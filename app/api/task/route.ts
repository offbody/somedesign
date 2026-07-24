const clean = (value: unknown, limit = 1200) =>
  String(value ?? "").trim().slice(0, limit);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 120);
  const email = clean(body.email, 180);
  const company = clean(body.company, 180);
  const budget = clean(body.budget, 120);
  const message = clean(body.message, 2200);
  const consent = clean(body.consent, 20);

  if (!name || !phone || !email || !message || consent !== "on") {
    return Response.json({ ok: false, error: "Required fields are missing" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json(
      { ok: false, error: "Telegram delivery is not configured yet" },
      { status: 503 },
    );
  }

  const text = [
    "New portfolio task",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Company: ${company || "—"}`,
    `E-mail: ${email}`,
    `Project budget: ${budget || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  let telegramResponse: Response;
  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: controller.signal,
    });
  } catch {
    return Response.json({ ok: false, error: "Telegram delivery timed out" }, { status: 504 });
  } finally {
    clearTimeout(timeout);
  }

  if (!telegramResponse.ok) {
    return Response.json({ ok: false, error: "Telegram delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
