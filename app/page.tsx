"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Locale = "en" | "ru";

type LocalizedText = {
  en: string;
  ru: string;
};

type WorkDefinition = {
  image: string;
  desktopImage?: string;
  title: LocalizedText;
  mobileTitle: LocalizedText;
  tags: { en: string[]; ru: string[] };
  impact: Array<{ value: string; label: LocalizedText }>;
  impactStatement: LocalizedText;
  storyEyebrow: LocalizedText;
  storyTitle: LocalizedText;
  storyCopy: LocalizedText;
  roadmap: Array<{ title: LocalizedText; copy: LocalizedText }>;
};

type Work = {
  image: string;
  desktopImage?: string;
  title: string;
  mobileTitle: string;
  tags: string[];
  impact: Array<{ value: string; label: string }>;
  impactStatement: string;
  storyEyebrow: string;
  storyTitle: string;
  storyCopy: string;
  roadmap: Array<{ title: string; copy: string }>;
};

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

const workDefinitions: WorkDefinition[] = [
  {
    image: "/portfolio/case-01-img.png",
    desktopImage: "/portfolio/case-01-img-desktop.png",
    title: text("Corporate Video\nConferencing Service", "Корпоративный сервис видеоконференций"),
    mobileTitle: text("Corporate Video\nConferencing Service", "Корпоративный сервис\nвидеоконференций"),
    tags: {
      en: ["B2B", "Token & Variables UI", "Synthy-UX"],
      ru: ["B2B", "Токены и переменные", "Synthy-UX"],
    },
    impact: [
      { value: "1", label: text("Unified workspace for every corporate call", "Единое пространство для каждого корпоративного звонка") },
      { value: "5", label: text("Collaboration tools connected in one room", "Инструментов совместной работы в одной комнате") },
      { value: "200+", label: text("Participants supported in a live session", "Участников в одной онлайн-сессии") },
      { value: "0", label: text("Context switches during the meeting flow", "Переключений контекста во время встречи") },
    ],
    impactStatement: text("From fragmented calls to one focused workspace.", "От разрозненных звонков — к единому сфокусированному пространству."),
    storyEyebrow: text("Product Architecture", "Архитектура продукта"),
    storyTitle: text("A conference room built around decisions.", "Конференц-комната, построенная вокруг решений."),
    storyCopy: text(
      "I reorganised the service around the real rhythm of a corporate meeting: preparing the room, bringing people into context, working with shared materials and recording the outcome. The interface keeps advanced controls available without letting them compete with the conversation.",
      "Я перестроил сервис вокруг реального ритма корпоративной встречи: подготовка комнаты, погружение участников в контекст, работа с общими материалами и фиксация результата. Интерфейс сохраняет сложные инструменты доступными, но не позволяет им конкурировать с разговором.",
    ),
    roadmap: [
      { title: text("Discovery", "Исследование"), copy: text("Mapped meeting roles, legacy controls and the moments where collaboration lost context.", "Зафиксировал роли участников, унаследованные элементы управления и точки потери контекста.") },
      { title: text("Information Architecture", "Информационная архитектура"), copy: text("Reframed the service around preparation, live collaboration and a recorded outcome.", "Перестроил сервис вокруг подготовки, совместной работы и зафиксированного результата.") },
      { title: text("Live Prototype", "Интерактивный прототип"), copy: text("Tested the meeting flow with high-density controls and realistic conference scenarios.", "Проверил сценарий встречи с высокой плотностью элементов и реалистичными условиями конференции.") },
      { title: text("Design System", "Дизайн-система"), copy: text("Unified controls, states and tokens into a system ready for product scaling.", "Объединил контролы, состояния и токены в систему, готовую к масштабированию продукта.") },
    ],
  },
  {
    image: "/portfolio/case-02-img.png",
    title: text("Smart Targets\nTraining Application", "Приложение для тренировки по умным мишеням"),
    mobileTitle: text("Smart Targets\nTraining Application", "Умные мишени\nдля тренировок"),
    tags: {
      en: ["Sport Tech", "Design System", "UX"],
      ru: ["Sport Tech", "Дизайн-система", "UX"],
    },
    impact: [
      { value: "2 mm", label: text("Shot coordinate accuracy across target zones", "Точность координат выстрела по зонам мишени") },
      { value: "24/24", label: text("Hits visible in a single training session", "Попадания, видимые в одной тренировочной сессии") },
      { value: "<1 s", label: text("Feedback from impact to interface", "От попадания до обратной связи в интерфейсе") },
      { value: "4", label: text("Training modes composed from one system", "Режима тренировки в рамках одной системы") },
    ],
    impactStatement: text("Every shot becomes immediate, readable feedback.", "Каждый выстрел превращается в мгновенную и понятную обратную связь."),
    storyEyebrow: text("Real-time Experience", "Опыт в реальном времени"),
    storyTitle: text("Telemetry that stays clear under pressure.", "Телеметрия, которая остаётся понятной под давлением."),
    storyCopy: text(
      "The product translates target signals into a compact training language: hits, timing, zones, split time and progress. I designed the hierarchy for one-handed use, fast scanning and rapid comparison, while the token-based system keeps every state consistent.",
      "Продукт переводит сигналы мишени в компактный язык тренировки: попадания, тайминг, зоны, сплиты и прогресс. Я спроектировал иерархию для работы одной рукой, быстрого сканирования и сравнения, а токенизированная система сохраняет согласованность всех состояний.",
    ),
    roadmap: [
      { title: text("Signal Mapping", "Карта сигналов"), copy: text("Connected sensor events with the actions and decisions a shooter makes during training.", "Связал события датчиков с действиями и решениями стрелка во время тренировки.") },
      { title: text("Training Logic", "Логика тренировки"), copy: text("Structured hits, zones, split time and scoring into a single interaction model.", "Собрал попадания, зоны, сплиты и счёт в единую модель взаимодействия.") },
      { title: text("Field Prototype", "Полевой прототип"), copy: text("Validated one-handed navigation and fast scanning in realistic training conditions.", "Проверил навигацию одной рукой и быстрое считывание данных в реальных условиях.") },
      { title: text("Performance UI", "Рабочий интерфейс"), copy: text("Built a token-based system for dense telemetry, live states and future modes.", "Создал токенизированную систему для плотной телеметрии, live-состояний и новых режимов.") },
    ],
  },
  {
    image: "/portfolio/case-03-img.png",
    title: text("ESG Compliance\nCompany Page", "Корпоративный сайт ESG-платформы"),
    mobileTitle: text("ESG Compliance\nCompany Page", "Корпоративный сайт\nESG-платформы"),
    tags: {
      en: ["Figma to Code", "AI-Development", "Compliance"],
      ru: ["Figma to Code", "ИИ-разработка", "Комплаенс"],
    },
    impact: [
      { value: "86", label: text("Compliance criteria structured into one system", "Критериев комплаенса в единой системе") },
      { value: "3", label: text("Sustainability standards connected", "Стандарта устойчивого развития связаны между собой") },
      { value: "0→1", label: text("Product shaped from concept to launch", "Продукт от концепции до запуска") },
      { value: "1", label: text("Clear entry point for complex ESG data", "Понятная точка входа в сложные ESG-данные") },
    ],
    impactStatement: text("From complex regulation to measurable clarity.", "От сложного регулирования — к измеримой ясности."),
    storyEyebrow: text("Information Design", "Информационный дизайн"),
    storyTitle: text("A credible front door to a complex platform.", "Убедительная точка входа в сложную платформу."),
    storyCopy: text(
      "The company page turns regulatory complexity into a calm product narrative. I combined a clear value proposition, restrained motion and a modular visual system so enterprise users can understand the platform before they meet its deeper analytical tools.",
      "Корпоративная страница превращает сложное регулирование в спокойный продуктовый рассказ. Я объединил ясное ценностное предложение, сдержанное движение и модульную визуальную систему, чтобы корпоративный пользователь понял платформу ещё до знакомства с её аналитическими инструментами.",
    ),
    roadmap: [
      { title: text("Regulatory Framing", "Регуляторный контекст"), copy: text("Translated standards, criteria and stakeholder language into a clear product proposition.", "Перевёл стандарты, критерии и язык стейкхолдеров в понятное продуктовое предложение.") },
      { title: text("Content Model", "Контентная модель"), copy: text("Built a narrative from business value to platform capabilities and trust signals.", "Выстроил повествование от бизнес-ценности к возможностям платформы и сигналам доверия.") },
      { title: text("Visual Prototype", "Визуальный прототип"), copy: text("Balanced enterprise credibility with a distinctive, restrained motion language.", "Соединил корпоративную убедительность с узнаваемым и сдержанным языком движения.") },
      { title: text("Figma to Production", "От Figma до продакшена"), copy: text("Converted the modular design directly into a responsive production experience.", "Перенёс модульный дизайн напрямую в адаптивный production-интерфейс.") },
    ],
  },
  {
    image: "/portfolio/case-04-img.png",
    desktopImage: "/portfolio/case-04-img-desktop.png",
    title: text("Real Estate\nDeveloper Site", "Сайт девелопера Ovid"),
    mobileTitle: text("Real Estate\nDeveloper Site", "Сайт девелопера\nOvid"),
    tags: {
      en: ["UI/UX", "Redesign", "Figma to Code"],
      ru: ["UI/UX", "Редизайн", "Figma to Code"],
    },
    impact: [
      { value: "5", label: text("Residential projects presented as complete product stories", "Жилых проектов представлены как полноценные продуктовые истории") },
      { value: "1", label: text("Connected journey from discovery to a viewing request", "Связный путь от знакомства до заявки на просмотр") },
      { value: "2", label: text("Gallery modes: guided autoplay and direct navigation", "Режима галереи: управляемый автопоказ и ручная навигация") },
      { value: "360°", label: text("Property context from location to amenities and homes", "Контекст объекта: от локации до инфраструктуры и квартир") },
    ],
    impactStatement: text("From a catalogue of buildings to one editorial property journey.", "От каталога зданий — к цельному редакционному сценарию выбора дома."),
    storyEyebrow: text("Digital Real Estate", "Цифровая недвижимость"),
    storyTitle: text("A developer website that lets architecture lead.", "Сайт девелопера, в котором архитектура говорит первой."),
    storyCopy: text(
      "I reframed Ovid Real Estate as a mobile-first editorial experience rather than a conventional property catalogue. Full-screen imagery, Noto Serif Display and restrained motion create a premium rhythm, while every project page keeps location, advantages, amenities, apartment types and a viewing request in one connected journey.",
      "Я переосмыслил Ovid Real Estate как mobile-first редакционный опыт, а не традиционный каталог недвижимости. Полноэкранные изображения, Noto Serif Display и сдержанная анимация создают премиальный ритм, а каждая страница проекта связывает локацию, преимущества, инфраструктуру, типы квартир и заявку на просмотр в единый сценарий.",
    ),
    roadmap: [
      { title: text("Experience Audit", "Аудит опыта"), copy: text("Reframed the existing catalogue around how people discover, compare and feel a future home.", "Перестроил существующий каталог вокруг того, как люди знакомятся, сравнивают и ощущают будущий дом.") },
      { title: text("Editorial Direction", "Редакционное направление"), copy: text("Built a restrained visual language where architecture, typography and real photography carry the story.", "Создал сдержанный визуальный язык, где историю ведут архитектура, типографика и реальные фотографии.") },
      { title: text("Motion Prototype", "Прототип движения"), copy: text("Connected autoplay, horizontal navigation and touch gestures into one calm gallery system.", "Связал автопоказ, горизонтальную навигацию и жесты в единую спокойную систему галереи.") },
      { title: text("Responsive Delivery", "Адаптивная реализация"), copy: text("Expanded the concept into five project pages with reusable content patterns and viewing requests.", "Масштабировал концепцию на пять страниц проектов с повторяемыми контентными паттернами и заявкой на просмотр.") },
    ],
  },
  {
    image: "/portfolio/case-05-img.png",
    title: text("Sustain & Mitigation\nAI-Platform", "ИИ-платформа устойчивого развития"),
    mobileTitle: text("Sustain & Mitigation\nAI-Platform", "ИИ-платформа\nустойчивого развития"),
    tags: {
      en: ["MSP", "AI", "Compliance"],
      ru: ["MSP", "ИИ", "Комплаенс"],
    },
    impact: [
      { value: "86", label: text("Sustainability indicators made operational", "Показателей устойчивости, превращённых в рабочую систему") },
      { value: "6", label: text("Analytical modules in one workspace", "Аналитических модулей в одном пространстве") },
      { value: "3", label: text("Compliance frameworks aligned", "Согласованных фреймворка комплаенса") },
      { value: "1", label: text("Live score for management decisions", "Динамический рейтинг для управленческих решений") },
    ],
    impactStatement: text("Sustainability data turned into an operating system.", "Данные устойчивого развития, превращённые в операционную систему."),
    storyEyebrow: text("Enterprise Platform", "Корпоративная платформа"),
    storyTitle: text("Making compliance useful between reports.", "Комплаенс, полезный не только в момент отчёта."),
    storyCopy: text(
      "I transformed a dense reporting model into a working product for continuous management. The interface connects questionnaires, evidence, indicators, risks and recommendations, giving every role a clear next action instead of another static dashboard.",
      "Я превратил плотную отчётную модель в рабочий продукт для непрерывного управления. Интерфейс связывает анкеты, доказательства, показатели, риски и рекомендации, предлагая каждой роли понятное следующее действие вместо очередного статичного дашборда.",
    ),
    roadmap: [
      { title: text("Criteria Audit", "Аудит критериев"), copy: text("Connected 86 indicators with standards, evidence and real enterprise workflows.", "Связал 86 показателей со стандартами, доказательствами и реальными процессами компании.") },
      { title: text("Role Architecture", "Архитектура ролей"), copy: text("Defined distinct decision paths for managers, analysts, experts and data owners.", "Определил разные пути принятия решений для руководителей, аналитиков, экспертов и владельцев данных.") },
      { title: text("Analytical Prototype", "Аналитический прототип"), copy: text("Tested questionnaires, scores, risks and recommendations as one continuous flow.", "Проверил анкеты, рейтинги, риски и рекомендации как единый непрерывный сценарий.") },
      { title: text("Operating System", "Операционная система"), copy: text("Unified modules and tokens into a platform designed for continuous compliance.", "Объединил модули и токены в платформу для непрерывного управления комплаенсом.") },
    ],
  },
  {
    image: "/portfolio/case-06-img.png",
    title: text("Business Simulator\nSaaS Platform", "SaaS-платформа бизнес-симулятора"),
    mobileTitle: text("Business Simulator\nSaaS Platform", "Бизнес-симулятор\nSaaS-платформа"),
    tags: {
      en: ["Figma to Code", "AI-Development", "B2B SaaS"],
      ru: ["Figma to Code", "ИИ-разработка", "B2B SaaS"],
    },
    impact: [
      { value: "1", label: text("Interactive model of the operating business", "Интерактивная модель действующего бизнеса") },
      { value: "5", label: text("Business centres connected in real time", "Бизнес-центров, связанных в реальном времени") },
      { value: "20+", label: text("Management flows brought into one product", "Управленческих потоков в одном продукте") },
      { value: "24/7", label: text("AI assistance across daily operations", "ИИ-поддержка ежедневных операций") },
    ],
    impactStatement: text("A living business model, not another dashboard.", "Живая модель бизнеса вместо очередного дашборда."),
    storyEyebrow: text("Product Vision", "Продуктовое видение"),
    storyTitle: text("Complex operations made tangible.", "Сложные операции, ставшие наглядными."),
    storyCopy: text(
      "The simulator presents the company as an interactive system rather than a stack of reports. Teams can see responsibilities, tasks, logistics and performance in context, while the AI layer helps turn signals into coordinated decisions.",
      "Симулятор представляет компанию как интерактивную систему, а не набор отчётов. Команды видят ответственность, задачи, логистику и эффективность в контексте, а ИИ-слой помогает превращать сигналы в согласованные решения.",
    ),
    roadmap: [
      { title: text("Business Mapping", "Карта бизнеса"), copy: text("Modelled roles, centres, resources and management loops as one connected system.", "Смоделировал роли, центры, ресурсы и управленческие циклы как единую систему.") },
      { title: text("Model Grammar", "Грамматика модели"), copy: text("Created a visual language for objects, dependencies, states and performance signals.", "Создал визуальный язык объектов, зависимостей, состояний и показателей эффективности.") },
      { title: text("AI Interaction", "ИИ-взаимодействие"), copy: text("Designed assistance that explains signals and proposes coordinated next actions.", "Спроектировал помощника, который объясняет сигналы и предлагает согласованные следующие действия.") },
      { title: text("Modular Launch", "Модульный запуск"), copy: text("Built scalable patterns for new business centres, workflows and analytical layers.", "Создал масштабируемые паттерны для новых бизнес-центров, процессов и аналитических слоёв.") },
    ],
  },
];

const localizeWorks = (locale: Locale): Work[] =>
  workDefinitions.map((work) => ({
    image: work.image,
    desktopImage: work.desktopImage,
    title: work.title[locale],
    mobileTitle: work.mobileTitle[locale],
    tags: work.tags[locale],
    impact: work.impact.map((item) => ({ value: item.value, label: item.label[locale] })),
    impactStatement: work.impactStatement[locale],
    storyEyebrow: work.storyEyebrow[locale],
    storyTitle: work.storyTitle[locale],
    storyCopy: work.storyCopy[locale],
    roadmap: work.roadmap.map((step) => ({ title: step.title[locale], copy: step.copy[locale] })),
  }));

const desktopPrinciples = [
  { en: "Empathy", ru: "Эмпатия", icon: "\ue87e" },
  { en: "Curiosity", ru: "Любопытство", icon: "\ue8b6" },
  { en: "Bias for Action", ru: "Склонность к действию", icon: "\uea0b" },
  { en: "Values", ru: "Ценности", icon: "\uead5" },
  { en: "Systems", ru: "Системы", icon: "\ue4fd" },
  { en: "Clarity", ru: "Ясность", icon: "\ue3b4" },
  { en: "Iteration", ru: "Итерации", icon: "\ue863" },
  { en: "Reframing", ru: "Переосмысление", icon: "\ue437" },
  { en: "Ambiguity", ru: "Неопределённость", icon: "\ue8fd" },
  { en: "Prototypes", ru: "Прототипы", icon: "\uea4b" },
  { en: "Context", ru: "Контекст", icon: "\ue87a" },
  { en: "Evidence", ru: "Доказательства", icon: "\uef3e" },
];

const mobilePrinciples = [
  { en: "Empathy", ru: "Эмпатия", icon: "\ue87d" },
  { en: "Curiosity", ru: "Любопытство", icon: "\ue8b6" },
  { en: "Bias for Action", ru: "Действие", icon: "\uea0b" },
  { en: "Values", ru: "Ценности", icon: "\uead5" },
  { en: "Systems", ru: "Системы", icon: "\ue4fd" },
  { en: "Clarity", ru: "Ясность", icon: "\ue3b4" },
  { en: "Iteration", ru: "Итерации", icon: "\ue863" },
  { en: "Reframing", ru: "Переосмысление", icon: "\ue437" },
  { en: "Ambiguity", ru: "Неопределённость", icon: "\ue887" },
  { en: "Prototypes", ru: "Прототипы", icon: "\uea4b" },
  { en: "Context", ru: "Контекст", icon: "\ue87a" },
  { en: "Evidence", ru: "Доказательства", icon: "\uef3e" },
  { en: "Active Listening", ru: "Активное слушание", icon: "\ue023" },
  { en: "Synthesis", ru: "Синтез", icon: "\ue9f4" },
  { en: "Inclusion", ru: "Инклюзивность", icon: "\uf8d9" },
  { en: "Focus", ru: "Фокус", icon: "\ue3dc" },
  { en: "Experiment", ru: "Эксперимент", icon: "\uea3a" },
  { en: "Patterns", ru: "Паттерны", icon: "\uf043" },
  { en: "Momentum", ru: "Импульс", icon: "\ue8e5" },
  { en: "Simplicity", ru: "Простота", icon: "\ue0f0" },
  { en: "Constraints", ru: "Ограничения", icon: "\uf1c2" },
  { en: "Learning", ru: "Обучение", icon: "\ue80c" },
  { en: "Craft", ru: "Мастерство", icon: "\uf10a" },
  { en: "Outcomes", ru: "Результаты", icon: "\ue153" },
];

const accessiblePrinciples = Array.from(
  new Map([...desktopPrinciples, ...mobilePrinciples].map((principle) => [principle.en, principle])).values(),
);

const heroTags = {
  en: [
    "Figma to Code / AI-Dev",
    "All Type Prototyping",
    "Atoms / Tokens / Variables",
    "JTBD",
    "Low-end / Hi-end MVP",
    "AI-Driven Research",
    "UI-Kits & Design Systems",
    "CJM",
  ],
  ru: [
    "Figma to Code / AI-Dev",
    "Все виды прототипирования",
    "Атомы / Токены / Переменные",
    "JTBD",
    "Low-end / Hi-end MVP",
    "ИИ-исследования",
    "UI-киты и дизайн-системы",
    "CJM",
  ],
};

const preloaderApps = [
  { name: "Figma", icon: "/portfolio/figma-icon.svg" },
  { name: "Sketch", icon: "/portfolio/sketch-icon.svg" },
  { name: "ChatGPT", icon: "/portfolio/gpt-icon.svg" },
  { name: "Sublime", icon: "/portfolio/sublime-icon.svg" },
  // { name: "Notion", icon: "/portfolio/notion-icon.svg" },
];

const budgetOptions = {
  en: ["Up to $10,000", "$10,000–$30,000", "$30,000–$50,000", "$50,000–$100,000", "$100,000+"],
  ru: ["До $10 000", "$10 000–$30 000", "$30 000–$50 000", "$50 000–$100 000", "От $100 000"],
};

const uiCopy = {
  en: {
    task: "Task",
    language: "Language",
    menuAria: {
      open: "Open menu",
      close: "Close menu",
      closeTask: "Close task form",
      back: "Back to task form",
    },
    navigation: [
      ["Works", "#works"],
      ["Mindset", "#mindset"],
      ["Skills", "#skills"],
      ["Contact", "#contact"],
    ],
    socials: "Socials",
    credits: "Credits",
    name: "Igor Bogdanov",
    role: "UI/UX & Product Designer",
    remote: "Remote / Open to relocation",
    signature: "Igor Bogdanov · Product / UI / UX",
    preloaderBrandDesktop: "Igor Bogdanov / Portfolio",
    preloaderBrandMobile: "Igor Bogdanov / Portfolio",
    preloaderTagline: "Turning complexity into clear products.",
    heroName: "Igor Bogdanov @ Somedesigner",
    heroTitle: ["UI/UX Designer", "CX Analyst"],
    heroDisciplines: "Core disciplines",
    heroIntro: "Helping brands achieve their goals in a digital environment",
    heroIntroLines: ["Helping brands achieve", "their goals in a digital", "environment"],
    year: "yr",
    statDesign: "Multidisciplinary Design",
    statResearch: "UI/UX Design & Research",
    selected: "Selected · 2023—2026",
    recentWorks: "Recent Works",
    readyLines: ["Ready", "for a design", "adventure."],
    newProject: "New project",
    startNewProject: "Start a new project",
    moreProjects: "More projects",
    mindsetTitle: "My Mindset",
    mindsetLeadBefore: "I treat design as a way to ",
    mindsetLeadEmphasis: "reduce uncertainty",
    mindsetLeadAfter: " around real human needs—not as a layer of decoration.",
    mindsetParagraphs: [
      "I begin with empathy: I step into the user’s real constraints, listen for what is not being said, and reframe the brief until the actual problem becomes visible.",
      "Then I move. I prototype early, test assumptions, and let evidence reshape the path. Ambiguity is not a flaw in the process—it is where useful questions begin.",
    ],
    canvasAria: "Interactive infinite canvas of design principles. Drag to explore.",
    canvasHint: "Drag to explore · hover to focus",
    art: "Art can add layers for emotional expression.",
    yes: "Yes",
    designStrong: "Design removes the unnecessary",
    designAfter: " until a functional idea becomes clear.",
    but: "But",
    skillsTitle: "Core Skills",
    skills: [
      {
        title: "Design",
        meta: "UI / GRAPHIC / BRANDS",
        copy: "Building clear visual languages, scalable interfaces, and brand systems that hold together across every touchpoint.",
      },
      {
        title: "Research",
        meta: "UX / CX",
        copy: "Finding the real task through interviews, journey mapping, JTBD, behavioral patterns, and evidence-led product decisions.",
      },
      {
        title: "Creative",
        meta: "KEY VISUAL",
        copy: "Turning strategy into memorable concepts without sacrificing legibility, purpose, or the product’s everyday usefulness.",
      },
      {
        title: "AI-Dev",
        meta: "MCP / CLI / FE / BE",
        copy: "Bridging design and working software with AI-assisted prototyping, design-to-code workflows, and production-minded implementation.",
      },
    ],
    availability: "Available for selected projects",
    footerTitle: "Let’s design something useful, clear and lasting.",
    footerTitleLines: ["Let’s design", "something useful,", "clear and lasting."],
    startProject: "Start a Project",
    backTop: "Back to Top",
    gotVision: ["Got a vision?", "Let's bring it to life."],
    footerNavigation: "Navigation",
    footerWorks: "Works",
    footerServices: "Services",
    project: {
      open: "Open case",
      close: "Close project",
      disciplines: "Project disciplines",
      case: "Case",
      outcome: "Outcome · Selected",
      impact: ["Obtained", "Result"],
      roadmapEyebrow: "Process · Roadmap",
      roadmapTitle: "Roadmap",
      next: "Next project",
      openNext: "Open next case",
      explore: "Explore the work",
      storyImage: "interface presentation",
    },
    form: {
      title: ["Tell me about", "your project"],
      subtitle: "Briefly describe your task, and I will get in touch with you as soon as possible.",
      name: "Name",
      phone: "Phone",
      company: "Company",
      email: "E-mail",
      budget: "Project budget",
      budgetPlaceholder: "Select a range",
      message: "Message",
      messagePlaceholder: "Briefly describe the project: goals, timing, context and key expectations",
      consentBefore: "By clicking “Send Task”, I give my consent to the ",
      consentLink: "processing of my personal data",
      send: "Send Task",
      sending: "Sending…",
      sent: "Task sent.",
      failed: "I could not send the task. Please try again.",
    },
    policy: {
      eyebrow: "Privacy",
      title: "Personal Data Processing Policy",
      effective: "Effective July 23, 2026",
      sections: [
        {
          title: "1. Controller and scope",
          body: "This policy explains how Igor Bogdanov, UI/UX & Product Designer, processes personal data submitted through this portfolio. Questions and privacy requests can be sent to",
        },
        {
          title: "2. Data I collect",
          body: "I may collect your name, phone number, company, e-mail address, preferred project budget and the information you include in your message. Basic technical delivery and security data may also be processed by the hosting infrastructure when you use the website.",
        },
        {
          title: "3. Purpose and legal basis",
          body: "I use this data only to review your request, reply to you, discuss a potential project, maintain the security of the form and keep a necessary record of our communication. The legal basis is your explicit consent, which you may withdraw at any time.",
        },
        {
          title: "4. Processing and recipients",
          body: "Processing may include collection, recording, organisation, storage, use, transmission for message delivery and deletion. Data is not sold and is not used for advertising or automated decision-making. It may be handled by the website hosting provider and Telegram solely to deliver your request.",
        },
        {
          title: "5. Retention and security",
          body: "Enquiries are kept only as long as reasonably necessary to answer you and manage a potential working relationship, normally no longer than 12 months unless a longer period is required by law or an active contract. Reasonable technical and organisational safeguards are used to protect the data.",
        },
        {
          title: "6. Your rights",
          body: "You may request access, correction, deletion, restriction or a copy of your data, object where applicable, and withdraw consent without affecting prior lawful processing. You may also contact the competent data protection authority in your country.",
        },
      ],
    },
  },
  ru: {
    task: "Задача",
    language: "Язык",
    menuAria: {
      open: "Открыть меню",
      close: "Закрыть меню",
      closeTask: "Закрыть форму задачи",
      back: "Вернуться к форме задачи",
    },
    navigation: [
      ["Работы", "#works"],
      ["Подход", "#mindset"],
      ["Навыки", "#skills"],
      ["Контакты", "#contact"],
    ],
    socials: "Соцсети",
    credits: "Автор",
    name: "Игорь Богданов",
    role: "UI/UX и продуктовый дизайнер",
    remote: "Удалённо / Готов к переезду",
    signature: "Игорь Богданов · Product / UI / UX",
    preloaderBrandDesktop: "Игорь Богданов / Портфолио",
    preloaderBrandMobile: "Игорь Богданов / Портфолио",
    preloaderTagline: "Превращаю сложность в понятные продукты.",
    heroName: "Игорь Богданов @ Somedesigner",
    heroTitle: ["UI/UX дизайнер", "CX-аналитик"],
    heroDisciplines: "Ключевые направления",
    heroIntro: "Помогаю брендам достигать целей в цифровой среде",
    heroIntroLines: ["Помогаю брендам", "достигать целей", "в цифровой среде"],
    year: "лет",
    statDesign: "Мультидисциплинарный\nдизайн",
    statResearch: "UI/UX дизайн\nи исследования",
    selected: "Избранное · 2023—2026",
    recentWorks: "Последние работы",
    readyLines: ["Готов", "к дизайн-", "приключению."],
    newProject: "Новый проект",
    startNewProject: "Начать новый проект",
    moreProjects: "Больше проектов",
    mindsetTitle: "Мой подход",
    mindsetLeadBefore: "Я отношусь к дизайну как к способу ",
    mindsetLeadEmphasis: "уменьшать неопределённость",
    mindsetLeadAfter: " вокруг реальных потребностей людей, а не как к слою декора.",
    mindsetParagraphs: [
      "Я начинаю с эмпатии: погружаюсь в реальные ограничения пользователя, слышу то, что осталось невысказанным, и переосмысливаю задачу, пока не становится видна настоящая проблема.",
      "Затем я действую. Рано создаю прототипы, проверяю предположения и позволяю фактам менять направление. Неопределённость — не ошибка процесса, а место, где появляются полезные вопросы.",
    ],
    canvasAria: "Интерактивный бесконечный канвас принципов дизайна. Перемещайте, чтобы исследовать.",
    canvasHint: "Перемещайте · наведите для фокуса",
    art: "Искусство может добавлять слои для эмоционального выражения.",
    yes: "Да",
    designStrong: "Дизайн убирает лишнее",
    designAfter: ", пока функциональная идея не становится ясной.",
    but: "Но",
    skillsTitle: "Ключевые навыки",
    skills: [
      {
        title: "Дизайн",
        meta: "UI / ГРАФИКА / БРЕНДЫ",
        copy: "Создаю ясные визуальные языки, масштабируемые интерфейсы и бренд-системы, которые остаются целостными во всех точках контакта.",
      },
      {
        title: "Исследования",
        meta: "UX / CX",
        copy: "Нахожу реальную задачу через интервью, карту пути клиента, JTBD, поведенческие паттерны и решения, основанные на данных.",
      },
      {
        title: "Креатив",
        meta: "КЛЮЧЕВОЙ ВИЗУАЛ",
        copy: "Превращаю стратегию в запоминающиеся концепции, не жертвуя читаемостью, назначением и повседневной полезностью продукта.",
      },
      {
        title: "ИИ-разработка",
        meta: "MCP / CLI / FE / BE",
        copy: "Соединяю дизайн и работающее ПО через ИИ-прототипирование, design-to-code процессы и ориентированную на production разработку.",
      },
    ],
    availability: "Доступен для новых задач",
    footerTitle: "Давайте создадим что-то полезное, ясное и долговечное.",
    footerTitleLines: ["Давайте", "создадим что-то", "полезное и ясное", "долговечное"],
    startProject: "Начать проект",
    backTop: "Наверх",
    gotVision: ["Есть идея?", "Давайте воплотим её."],
    footerNavigation: "Навигация",
    footerWorks: "Работы",
    footerServices: "Услуги",
    project: {
      open: "Открыть кейс",
      close: "Закрыть проект",
      disciplines: "Направления проекта",
      case: "Кейс",
      outcome: "Результат · Избранное",
      impact: ["Полученный", "результат"],
      roadmapEyebrow: "Процесс · Дорожная карта",
      roadmapTitle: "Roadmap",
      next: "Следующий проект",
      openNext: "Открыть следующий кейс",
      explore: "Посмотреть работу",
      storyImage: "презентация интерфейса",
    },
    form: {
      title: ["Расскажите мне", "о вашем проекте"],
      subtitle: "Кратко опишите задачу, и я свяжусь с вами в ближайшее время.",
      name: "Имя",
      phone: "Телефон",
      company: "Компания",
      email: "E-mail",
      budget: "Бюджет проекта",
      budgetPlaceholder: "Выберите диапазон",
      message: "Сообщение",
      messagePlaceholder: "Кратко опишите проект: цели, сроки, контекст и ключевые ожидания",
      consentBefore: "Нажимая «Отправить задачу», я даю согласие на ",
      consentLink: "обработку моих персональных данных",
      send: "Отправить задачу",
      sending: "Отправка…",
      sent: "Задача отправлена.",
      failed: "Не удалось отправить задачу. Пожалуйста, попробуйте ещё раз.",
    },
    policy: {
      eyebrow: "Конфиденциальность",
      title: "Политика обработки персональных данных",
      effective: "Действует с 23 июля 2026 года",
      sections: [
        {
          title: "1. Оператор и область действия",
          body: "Настоящая политика описывает, как Игорь Богданов, UI/UX и продуктовый дизайнер, обрабатывает персональные данные, переданные через это портфолио. Вопросы и запросы, связанные с конфиденциальностью, можно направлять по адресу",
        },
        {
          title: "2. Какие данные я собираю",
          body: "Я могу собирать ваше имя, номер телефона, название компании, адрес электронной почты, предпочтительный бюджет проекта и информацию из сообщения. При использовании сайта инфраструктура хостинга также может обрабатывать базовые технические данные, необходимые для доставки контента и обеспечения безопасности.",
        },
        {
          title: "3. Цели и правовые основания",
          body: "Я использую данные только для рассмотрения запроса, ответа, обсуждения потенциального проекта, обеспечения безопасности формы и хранения необходимой истории коммуникации. Правовым основанием является ваше явное согласие, которое можно отозвать в любое время.",
        },
        {
          title: "4. Обработка и получатели",
          body: "Обработка может включать сбор, запись, систематизацию, хранение, использование, передачу для доставки сообщения и удаление. Данные не продаются, не используются для рекламы или автоматизированного принятия решений. Хостинг-провайдер и Telegram могут обрабатывать их исключительно для доставки вашего запроса.",
        },
        {
          title: "5. Срок хранения и безопасность",
          body: "Запросы хранятся только столько, сколько разумно необходимо для ответа и управления потенциальными рабочими отношениями, как правило не более 12 месяцев, если более длительный срок не требуется законом или действующим договором. Для защиты данных применяются разумные технические и организационные меры.",
        },
        {
          title: "6. Ваши права",
          body: "Вы можете запросить доступ, исправление, удаление, ограничение обработки или копию своих данных, заявить возражение в предусмотренных законом случаях и отозвать согласие без влияния на законность предшествующей обработки. Вы также можете обратиться в компетентный орган по защите данных своей страны.",
        },
      ],
    },
  },
} as const;

function ChipRail({
  tags,
  auto = false,
  label,
}: {
  tags: string[];
  auto?: boolean;
  label: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    const group = groupRef.current;
    if (!rail || !group) return;
    const measure = () => setOverflowing(group.scrollWidth + 16 > rail.clientWidth);
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    observer.observe(group);
    measure();
    return () => observer.disconnect();
  }, [tags]);

  return (
    <div
      ref={railRef}
      className={`chips-rail ${overflowing ? "is-overflowing" : ""} ${auto ? "is-auto" : ""}`}
      aria-label={label}
    >
      <div className="chips-track">
        <div ref={groupRef} className="chips-group">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {auto && (
          <div className="chips-group" aria-hidden="true">
            {tags.map((tag) => <span key={`repeat-${tag}`}>{tag}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function MindsetCanvas({ locale }: { locale: Locale }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const stateRef = useRef({
    offsetX: 0,
    offsetY: 0,
    velocityX: 0,
    velocityY: 0,
    down: false,
    lastX: 0,
    lastY: 0,
    focusX: 0,
    focusY: 0,
    hover: false,
    moved: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const sceneCanvas = document.createElement("canvas");
    const sceneContext = sceneCanvas.getContext("2d");
    if (!sceneContext) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let inViewport = false;
    let introStarted = false;
    let introStart = 0;
    const textWidthCache = new Map<string, number>();
    const pointerFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const overlaysOpen = () =>
      document.body.classList.contains("task-active") ||
      document.body.classList.contains("menu-active");
    const shouldAnimate = () => inViewport && !document.hidden && !overlaysOpen();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, pointerFine.matches ? 1.5 : 1.25);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      sceneCanvas.width = Math.round(width * dpr);
      sceneCanvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      sceneContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      textWidthCache.clear();
      if (!stateRef.current.moved) {
        stateRef.current.focusX = width / 2;
        stateRef.current.focusY = height / 2;
      }
    };

    const roundedRect = (
      target: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      radius: number,
    ) => {
      const r = Math.min(radius, w / 2, h / 2);
      target.beginPath();
      target.moveTo(x + r, y);
      target.arcTo(x + w, y, x + w, y + h, r);
      target.arcTo(x + w, y + h, x, y + h, r);
      target.arcTo(x, y + h, x, y, r);
      target.arcTo(x, y, x + w, y, r);
      target.closePath();
    };

    const render = (now: number) => {
      frameRef.current = null;
      if (!shouldAnimate()) return;

      const state = stateRef.current;
      if (!state.down) {
        state.offsetX -= reduceMotion.matches ? 0 : 0.205;
        state.offsetX += state.velocityX;
        state.offsetY += state.velocityY;
        state.velocityX *= 0.89;
        state.velocityY *= 0.89;
      }

      sceneContext.clearRect(0, 0, width, height);
      const focusX = pointerFine.matches && state.hover ? state.focusX : width / 2;
      const focusY = pointerFine.matches && state.hover ? state.focusY : height / 2;
      const activePrinciples = pointerFine.matches ? desktopPrinciples : mobilePrinciples;
      const iconFont = pointerFine.matches ? "Material Icons Outlined" : "Material Icons";
      const isRussian = locale === "ru";
      const dx = pointerFine.matches
        ? isRussian
          ? Math.max(238, Math.min(width / 2.25, 292))
          : Math.max(190, Math.min(width / 2.55, 242))
        : isRussian
          ? 236
          : 184;
      const dy = pointerFine.matches
        ? isRussian
          ? Math.max(82, dx * 0.39)
          : Math.max(76, dx * 0.43)
        : isRussian
          ? 68
          : 62;
      const overscan = pointerFine.matches ? 2 : 1;
      const minColumn = Math.floor((-state.offsetX - dx * overscan) / dx);
      const maxColumn = Math.ceil((width - state.offsetX + dx * overscan) / dx);
      const minRow = Math.floor((-state.offsetY - dy * overscan) / dy);
      const maxRow = Math.ceil((height - state.offsetY + dy * overscan) / dy);
      const lens = Math.max(130, Math.min(width, height) * 0.35);
      const lensSquared = 2 * lens * lens;
      const introProgress = reduceMotion.matches
        ? 1
        : Math.min(1, Math.max(0, (now - introStart) / 720));
      const introEase = 1 - Math.pow(1 - introProgress, 3);
      const positionReveal = 0.82 + introEase * 0.18;
      const scaleReveal = 0.46 + introEase * 0.54;

      for (let row = minRow; row <= maxRow; row += 1) {
        for (let column = minColumn; column <= maxColumn; column += 1) {
          const rawX = column * dx + (row % 2 ? dx / 2 : 0) + state.offsetX;
          const rawY = row * dy + state.offsetY;
          const x = focusX + (rawX - focusX) * positionReveal;
          const y = focusY + (rawY - focusY) * positionReveal;
          const deltaFocusX = x - focusX;
          const deltaFocusY = y - focusY;
          const influence = Math.exp(-((deltaFocusX * deltaFocusX) + (deltaFocusY * deltaFocusY)) / lensSquared);
          const baseScale = pointerFine.matches
            ? 0.68 + influence * 0.62
            : 0.62 + influence * 0.5;
          const scale = baseScale * scaleReveal;
          const rawHash = column + row * 5;
          const hash = ((rawHash % activePrinciples.length) + activePrinciples.length) % activePrinciples.length;
          const principle = activePrinciples[hash];
          const label = principle[locale];
          const fontSize = Math.round(pointerFine.matches ? 13 + 7 * scale : 12 + 6 * scale);

          sceneContext.font = `400 ${fontSize}px Geist, Arial, Helvetica, sans-serif`;
          const widthKey = `${label}-${fontSize}`;
          let textWidth = textWidthCache.get(widthKey);
          if (textWidth === undefined) {
            textWidth = sceneContext.measureText(label).width;
            textWidthCache.set(widthKey, textWidth);
          }
          const iconSize = 14 * scale;
          const iconGap = 8 * scale;
          const pillWidth = textWidth + iconSize + iconGap + 32 * scale;
          const pillHeight = 36 * scale;
          const pillX = x - pillWidth / 2;
          const pillY = y - pillHeight / 2;

          roundedRect(sceneContext, pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
          sceneContext.strokeStyle = `rgba(28, 30, 33, ${(0.18 + influence * 0.55) * introEase})`;
          sceneContext.lineWidth = 1;
          sceneContext.stroke();
          sceneContext.fillStyle = `rgba(28, 30, 33, ${(0.38 + influence * 0.62) * introEase})`;
          sceneContext.textAlign = "left";
          sceneContext.textBaseline = "middle";
          sceneContext.font = `400 ${iconSize}px "${iconFont}"`;
          const contentWidth = iconSize + iconGap + textWidth;
          const contentX = x - contentWidth / 2;
          sceneContext.fillText(principle.icon, contentX, y + 0.5);
          sceneContext.font = `400 ${fontSize}px Geist, Arial, Helvetica, sans-serif`;
          sceneContext.fillText(label, contentX + iconSize + iconGap, y + 0.5);

          sceneContext.beginPath();
          sceneContext.arc(x + dx / 2, y + dy / 2, 1.1, 0, Math.PI * 2);
          sceneContext.fillStyle = `rgba(28, 30, 33, ${(0.07 + influence * 0.08) * introEase})`;
          sceneContext.fill();
        }
      }

      context.clearRect(0, 0, width, height);
      context.filter = "none";
      context.globalCompositeOperation = "source-over";
      context.drawImage(sceneCanvas, 0, 0, width, height);

      const edge = Math.min(104, width * 0.22);
      context.globalCompositeOperation = "destination-in";
      const fade = context.createLinearGradient(0, 0, width, 0);
      fade.addColorStop(0, "rgba(0,0,0,0)");
      fade.addColorStop(Math.min(0.18, edge / width), "rgba(0,0,0,1)");
      fade.addColorStop(Math.max(0.82, 1 - edge / width), "rgba(0,0,0,1)");
      fade.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = fade;
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      if (shouldAnimate()) frameRef.current = window.requestAnimationFrame(render);
    };

    const syncAnimation = () => {
      if (shouldAnimate()) {
        if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(render);
      } else if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const point = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    const pointerDown = (event: PointerEvent) => {
      const p = point(event);
      canvas.setPointerCapture(event.pointerId);
      Object.assign(stateRef.current, {
        down: true,
        lastX: p.x,
        lastY: p.y,
        focusX: p.x,
        focusY: p.y,
        velocityX: 0,
        velocityY: 0,
        hover: true,
        moved: true,
      });
    };
    const pointerMove = (event: PointerEvent) => {
      const p = point(event);
      const state = stateRef.current;
      state.focusX = p.x;
      state.focusY = p.y;
      state.hover = true;
      if (state.down) {
        const deltaX = p.x - state.lastX;
        const deltaY = p.y - state.lastY;
        state.offsetX += deltaX;
        state.offsetY += deltaY;
        state.velocityX = Math.max(-24, Math.min(24, deltaX));
        state.velocityY = Math.max(-24, Math.min(24, deltaY));
        state.lastX = p.x;
        state.lastY = p.y;
      }
    };
    const pointerUp = (event: PointerEvent) => {
      stateRef.current.down = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    };
    const pointerLeave = () => {
      stateRef.current.hover = false;
      stateRef.current.down = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        if (inViewport && !introStarted) {
          introStarted = true;
          introStart = performance.now();
        }
        syncAnimation();
      },
      { rootMargin: "80px 0px", threshold: 0.01 },
    );
    visibilityObserver.observe(canvas);
    const bodyObserver = new MutationObserver(syncAnimation);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", syncAnimation);
    Promise.all([
      document.fonts.load('18px "Material Icons"'),
      document.fonts.load('18px "Material Icons Outlined"'),
    ]).then(() => {
      resize();
      syncAnimation();
    });
    canvas.addEventListener("pointerdown", pointerDown);
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerup", pointerUp);
    canvas.addEventListener("pointercancel", pointerUp);
    canvas.addEventListener("pointerleave", pointerLeave);
    resize();
    syncAnimation();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      bodyObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      canvas.removeEventListener("pointerdown", pointerDown);
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerup", pointerUp);
      canvas.removeEventListener("pointercancel", pointerUp);
      canvas.removeEventListener("pointerleave", pointerLeave);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [locale]);

  return (
    <div className="mindset-canvas-wrap">
      <canvas
        ref={canvasRef}
        className="mindset-canvas"
        aria-label={uiCopy[locale].canvasAria}
      />
      <p className="canvas-hint"><span /> {uiCopy[locale].canvasHint}</p>
      <ul className="sr-only">
        {accessiblePrinciples.map((principle) => <li key={principle.en}>{principle[locale]}</li>)}
      </ul>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5M12 3.5C9.9 5.8 8.8 8.6 8.8 12s1.1 6.2 3.2 8.5" />
    </svg>
  );
}

type ProjectOrigin = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function WorkImage({
  work,
  alt,
  loading,
}: {
  work: Work;
  alt: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <picture className="work-picture">
      {work.desktopImage && <source media="(min-width: 1024px)" srcSet={work.desktopImage} />}
      <img src={work.image} alt={alt} loading={loading} />
    </picture>
  );
}

function ProjectCard({
  work,
  index,
  locale,
  onOpen,
}: {
  work: Work;
  index: number;
  locale: Locale;
  onOpen: (index: number, card: HTMLElement) => void;
}) {
  return (
    <article
      className="project-card"
      data-project-index={index}
    >
      <WorkImage work={work} alt="" loading={index < 2 ? "eager" : "lazy"} />
      <div className="project-shade" />
      <div className="project-content">
        <p className="project-number">0{index + 1}</p>
        <h2 className="display-h2">
          <span className="project-title-desktop">{work.title}</span>
          <span className="project-title-mobile">{work.mobileTitle}</span>
        </h2>
        <ChipRail tags={work.tags} label={uiCopy[locale].project.disciplines} />
      </div>
      <button
        type="button"
        aria-label={`${uiCopy[locale].project.open}: ${work.title}`}
        className="project-link"
        onClick={(event) => onOpen(index, event.currentTarget.closest(".project-card") as HTMLElement)}
      />
    </article>
  );
}

function ProjectModal({
  work,
  nextWork,
  index,
  locale,
  expanded,
  origin,
  projectCount,
  onPrepareClose,
  onClose,
  onNext,
}: {
  work: Work;
  nextWork: Work;
  index: number;
  locale: Locale;
  expanded: boolean;
  origin: ProjectOrigin;
  projectCount: number;
  onPrepareClose: () => void;
  onClose: () => void;
  onNext: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const nextTimerRef = useRef<number | null>(null);
  const closingRef = useRef(false);
  const [settled, setSettled] = useState(false);
  const [closingRect, setClosingRect] = useState<ProjectOrigin | null>(null);
  const [nextTransition, setNextTransition] = useState<{
    rect: ProjectOrigin;
    work: Work;
    active: boolean;
  } | null>(null);

  useEffect(() => {
    if (!expanded) return;
    closingRef.current = false;
    modalRef.current?.scrollTo({ top: 0 });
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const settleTimer = window.setTimeout(() => setSettled(true), desktop ? 40 : 680);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), desktop ? 520 : 700);
    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(focusTimer);
    };
  }, [expanded]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }
    if (nextTimerRef.current !== null) {
      window.clearTimeout(nextTimerRef.current);
    }
  }, []);

  useEffect(() => {
    if (expanded) modalRef.current?.scrollTo({ top: 0 });
  }, [expanded, index]);

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    const modal = modalRef.current;
    if (modal) modal.scrollTop = 0;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      setSettled(false);
      onClose();
      return;
    }
    onPrepareClose();
    const hero = heroRef.current;
    const rect = hero?.getBoundingClientRect();

    // Lock the visible hero to its exact current pixels before changing it
    // from document flow to fixed positioning. This prevents Safari from
    // exposing an intermediate oversized image during the reverse transition.
    if (rect) {
      setClosingRect({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
    setSettled(false);
    closeTimerRef.current = window.setTimeout(() => {
      heroRef.current?.getBoundingClientRect();
      setClosingRect(null);
      closeTimerRef.current = null;
      onClose();
    }, 20);
  };

  const requestNext = (button: HTMLButtonElement) => {
    if (closingRef.current || nextTransition) return;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      onNext();
      return;
    }
    const rect = button.getBoundingClientRect();
    const transitionWork = nextWork;
    setNextTransition({
      rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
      work: transitionWork,
      active: false,
    });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setNextTransition((current) => current ? { ...current, active: true } : current);
      });
    });
    nextTimerRef.current = window.setTimeout(() => {
      onNext();
      modalRef.current?.scrollTo({ top: 0 });
      window.setTimeout(() => setNextTransition(null), 70);
      nextTimerRef.current = null;
    }, 520);
  };

  const keepFocusInside = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      requestClose();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`project-modal ${expanded ? "is-open" : ""} ${settled ? "is-settled" : ""} ${closingRect ? "is-preparing-close" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onKeyDown={keepFocusInside}
      style={{
        "--project-origin-x": `${origin.x}px`,
        "--project-origin-y": `${origin.y}px`,
        "--project-origin-width": `${origin.width}px`,
        "--project-origin-height": `${origin.height}px`,
        "--project-close-x": `${closingRect?.x ?? 0}px`,
        "--project-close-y": `${closingRect?.y ?? 0}px`,
        "--project-close-width": `${closingRect?.width ?? 0}px`,
        "--project-close-height": `${closingRect?.height ?? 0}px`,
        "--project-origin-scale-x": typeof window === "undefined" ? 1 : origin.width / window.innerWidth,
        "--project-origin-scale-y": typeof window === "undefined" ? 1 : origin.height / Math.min(window.innerHeight * 0.78, 720),
      } as React.CSSProperties}
    >
      <div className="project-modal-surface">
        <div className="project-close-sticky">
          <button
            ref={closeRef}
            className="project-close"
            type="button"
            aria-label={uiCopy[locale].project.close}
            onClick={requestClose}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="project-modal-hero-slot">
          <header ref={heroRef} className="project-modal-hero">
            <WorkImage work={work} alt="" loading="eager" />
            <div className="project-shade" />
            <div className="project-modal-heading">
              <p>{uiCopy[locale].project.case} 0{index + 1}</p>
              <h1 id="project-modal-title" className="display-h1">
                <span className="project-title-desktop">{work.title}</span>
                <span className="project-title-mobile">{work.mobileTitle}</span>
              </h1>
              <ChipRail tags={work.tags} label={uiCopy[locale].project.disciplines} />
            </div>
          </header>
        </div>

        <section className="selected-impact">
          <header>
            <p>{uiCopy[locale].project.outcome}</p>
            <h2 className="display-h1">{uiCopy[locale].project.impact[0]}<br />{uiCopy[locale].project.impact[1]}</h2>
          </header>
          <div className="impact-grid">
            {work.impact.map((item) => (
              <article key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <p className="impact-statement">{work.impactStatement}</p>
        </section>

        <section className="case-story">
          <div className="case-story-copy">
            <p>{work.storyEyebrow}</p>
            <h2 className="display-h1">{work.storyTitle}</h2>
            <div>
              <span>01</span>
              <p>{work.storyCopy}</p>
            </div>
          </div>
          <figure>
            <WorkImage work={work} alt={`${work.title} — ${uiCopy[locale].project.storyImage}`} loading="lazy" />
          </figure>
        </section>

        <section className="case-roadmap">
          <header>
            <p>{uiCopy[locale].project.roadmapEyebrow}</p>
            <h2 className="display-h1">{uiCopy[locale].project.roadmapTitle}</h2>
          </header>
          <ol>
            {work.roadmap.map((step, stepIndex) => (
              <li key={step.title}>
                <div className="roadmap-marker">
                  <span>0{stepIndex + 1}</span>
                  <i aria-hidden="true" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="next-project">
          <p>{uiCopy[locale].project.next}</p>
          <button
            type="button"
            onClick={(event) => requestNext(event.currentTarget)}
            aria-label={`${uiCopy[locale].project.openNext}: ${nextWork.title}`}
          >
            <WorkImage work={nextWork} alt="" loading="lazy" />
            <span className="project-shade" />
            <span className="next-project-copy">
              <small>{uiCopy[locale].project.case} 0{(index + 1) % projectCount + 1}</small>
              <strong>{nextWork.title}</strong>
              <i>{uiCopy[locale].project.explore} <ArrowIcon /></i>
            </span>
          </button>
        </footer>
      </div>
      {nextTransition && (
        <div
          className={`next-project-transition ${nextTransition.active ? "is-active" : ""}`}
          aria-hidden="true"
          style={{
            "--next-origin-x": `${nextTransition.rect.x}px`,
            "--next-origin-y": `${nextTransition.rect.y}px`,
            "--next-origin-width": `${nextTransition.rect.width}px`,
            "--next-origin-height": `${nextTransition.rect.height}px`,
          } as React.CSSProperties}
        >
          <WorkImage work={nextTransition.work} alt="" loading="eager" />
          <span className="project-shade" />
        </div>
      )}
    </div>
  );
}

function Preloader({ done, locale }: { done: boolean; locale: Locale }) {
  const trackRef = useRef<HTMLElement>(null);
  const desktopPercentRef = useRef<HTMLElement>(null);
  const mobilePercentRef = useRef<HTMLElement>(null);
  const [appIndex, setAppIndex] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const duration = 1220;
    let frame = 0;
    let lastValue = -1;

    const animate = (now: number) => {
      const elapsed = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 2.25);
      const value = Math.min(100, Math.round(eased * 100));

      trackRef.current?.style.setProperty("transform", `scaleX(${eased})`);
      if (value !== lastValue) {
        const label = `${String(value).padStart(3, "0")}%`;
        if (desktopPercentRef.current) desktopPercentRef.current.textContent = label;
        if (mobilePercentRef.current) mobilePercentRef.current.textContent = label;
        lastValue = value;
      }

      if (elapsed < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (done) return;
    const timer = window.setInterval(
      () => setAppIndex((index) => (index + 1) % preloaderApps.length),
      280,
    );
    return () => window.clearInterval(timer);
  }, [done]);

  const activeApp = preloaderApps[appIndex];

  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="preloader-top">
        <span className="preloader-brand-desktop">{uiCopy[locale].preloaderBrandDesktop}</span>
        <span className="preloader-brand-mobile">{uiCopy[locale].preloaderBrandMobile}</span>
        <strong ref={desktopPercentRef} className="preloader-percent-desktop">000%</strong>
        <span className="preloader-tagline-mobile">{uiCopy[locale].preloaderTagline}</span>
      </div>
      <p>{uiCopy[locale].preloaderTagline}</p>
      <div className="preloader-app" key={activeApp.name}>
        <img src={activeApp.icon} alt="" />
        {/* <small>{activeApp.name}</small> */}
      </div>
      <div className="preloader-bottom">
        <div className="preloader-track"><i ref={trackRef} /></div>
        <strong ref={mobilePercentRef} className="preloader-percent-mobile">000%</strong>
      </div>
    </div>
  );
}

function TaskForm({
  open,
  policyOpen,
  locale,
  onPolicyOpen,
}: {
  open: boolean;
  policyOpen: boolean;
  locale: Locale;
  onPolicyOpen: (value: boolean) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "ready">("idle");
  const [budget, setBudget] = useState("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const copy = uiCopy[locale];
  const budgetIndex = budgetOptions.en.indexOf(budget);
  const budgetLabel = budgetIndex >= 0 ? budgetOptions[locale][budgetIndex] : budget;

  const saveDraft = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    const values: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") values[key] = value;
    });
    try {
      window.sessionStorage.setItem(
        "portfolio-task-draft",
        JSON.stringify({ values, budget, consent }),
      );
    } catch {
      // The form remains fully usable when browser storage is unavailable.
    }
  }, [budget, consent]);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    try {
      const saved = window.sessionStorage.getItem("portfolio-task-draft");
      if (!saved) return;
      const draft = JSON.parse(saved) as {
        values?: Record<string, string>;
        budget?: string;
        consent?: boolean;
      };
      Object.entries(draft.values ?? {}).forEach(([name, value]) => {
        const field = form.elements.namedItem(name);
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.value = value;
        }
      });
      window.requestAnimationFrame(() => {
        setBudget(draft.budget ?? draft.values?.budget ?? "");
        setConsent(Boolean(draft.consent));
      });
    } catch {
      window.sessionStorage.removeItem("portfolio-task-draft");
    }
  }, []);

  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => setBudgetOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!budgetOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!budgetRef.current?.contains(event.target as Node)) setBudgetOpen(false);
    };
    window.addEventListener("pointerdown", closeOnOutsideClick);
    return () => window.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [budgetOpen]);

  useEffect(() => {
    saveDraft();
  }, [saveDraft]);

  const submitTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    const formElement = event.currentTarget;
    setStatus("sending");
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (response.ok) {
        setStatus("sent");
        formElement.reset();
        setBudget("");
        setConsent(false);
        window.sessionStorage.removeItem("portfolio-task-draft");
      } else {
        setStatus("ready");
      }
    } catch {
      setStatus("ready");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <section id="task-form" className={`task-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className={`task-views ${policyOpen ? "is-policy-open" : ""}`}>
        <div className="task-form-view">
          <div className="task-panel-inner">
            <div className="task-intro">
              <h2>
                <span>{copy.form.title[0]}</span>
                <span>{copy.form.title[1]}</span>
              </h2>
              <p>{copy.form.subtitle}</p>
            </div>
            <form ref={formRef} onSubmit={submitTask} onInput={saveDraft}>
              <label>
                <span>{copy.form.name}</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                <span>{copy.form.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                <span>{copy.form.company}</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>{copy.form.email}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <div className={`budget-field ${budgetOpen ? "is-open" : ""}`} ref={budgetRef}>
                <span>{copy.form.budget}</span>
                <input name="budget" type="hidden" value={budget} />
                <button
                  className="budget-trigger"
                  type="button"
                  aria-expanded={budgetOpen}
                  aria-haspopup="listbox"
                  onClick={() => setBudgetOpen((value) => !value)}
                >
                  <span>{budgetLabel || copy.form.budgetPlaceholder}</span>
                  <i aria-hidden="true" />
                </button>
                <div
                  className="budget-options"
                  role="listbox"
                  aria-label={copy.form.budget}
                  aria-hidden={!budgetOpen}
                >
                  {budgetOptions[locale].map((option, optionIndex) => (
                    <button
                      key={budgetOptions.en[optionIndex]}
                      type="button"
                      role="option"
                      tabIndex={budgetOpen ? 0 : -1}
                      aria-selected={budget === budgetOptions.en[optionIndex]}
                      onClick={() => {
                        setBudget(budgetOptions.en[optionIndex]);
                        setBudgetOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <label className="message-field">
                <span>{copy.form.message}</span>
                <textarea
                  name="message"
                  required
                  placeholder={copy.form.messagePlaceholder}
                />
              </label>
              <div className="consent-row">
                <label className="consent-checkbox">
                  <input
                    name="consent"
                    type="checkbox"
                    checked={consent}
                    required
                    onChange={(event) => setConsent(event.target.checked)}
                  />
                  <span aria-hidden="true" />
                </label>
                <p>
                  {copy.form.consentBefore}
                  <button type="button" onClick={() => onPolicyOpen(true)}>
                    {copy.form.consentLink}
                  </button>.
                </p>
              </div>
              <div className="task-submit-row">
                <button type="submit" disabled={!consent || status === "sending"}>
                  {status === "sending" ? copy.form.sending : copy.form.send} <ArrowIcon />
                </button>
                <p aria-live="polite">
                  {status === "sent" && copy.form.sent}
                  {status === "ready" && copy.form.failed}
                </p>
              </div>
            </form>
          </div>
        </div>
        <article className="policy-view" aria-hidden={!policyOpen}>
          <div className="policy-inner">
            <header>
              <p>{copy.policy.eyebrow}</p>
              <h2>{copy.policy.title}</h2>
              <span>{copy.policy.effective}</span>
            </header>
            {copy.policy.sections.map((section, index) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <p>
                  {section.body}
                  {index === 0 && (
                    <>
                      {" "}
                      <a href="mailto:offbody@yandex.ru">offbody@yandex.ru</a>.
                    </>
                  )}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [localeTransitioning, setLocaleTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreProjectsOpen, setMoreProjectsOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [projectExpanded, setProjectExpanded] = useState(false);
  const [desktopCurtainPhase, setDesktopCurtainPhase] = useState<"idle" | "covering" | "covered" | "revealing">("idle");
  const [projectOrigin, setProjectOrigin] = useState<ProjectOrigin>({
    x: 0,
    y: 0,
    width: 1,
    height: 1,
  });
  const localeTimerRef = useRef<number | null>(null);
  const projectCloseTimerRef = useRef<number | null>(null);
  const curtainTimersRef = useRef<number[]>([]);
  const curtainPhaseRef = useRef<"idle" | "covering" | "covered" | "revealing">("idle");
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const heroHeaderRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const works = localizeWorks(locale);
  const copy = uiCopy[locale];

  const runDesktopCurtain = useCallback((commit: () => void) => {
    if (curtainPhaseRef.current !== "idle") return;
    curtainTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    curtainTimersRef.current = [];
    curtainPhaseRef.current = "covering";
    setDesktopCurtainPhase("covering");

    const coverTimer = window.setTimeout(() => {
      curtainPhaseRef.current = "covered";
      setDesktopCurtainPhase("covered");
      commit();

      const revealTimer = window.setTimeout(() => {
        curtainPhaseRef.current = "revealing";
        setDesktopCurtainPhase("revealing");

        const finishTimer = window.setTimeout(() => {
          curtainPhaseRef.current = "idle";
          setDesktopCurtainPhase("idle");
          curtainTimersRef.current = [];
        }, 480);
        curtainTimersRef.current.push(finishTimer);
      }, 70);
      curtainTimersRef.current.push(revealTimer);
    }, 440);
    curtainTimersRef.current.push(coverTimer);
  }, []);

  const toggleLocale = () => {
    if (localeTransitioning) return;
    setLocaleTransitioning(true);
    localeTimerRef.current = window.setTimeout(() => {
      setLocale((current) => current === "en" ? "ru" : "en");
      localeTimerRef.current = window.setTimeout(() => {
        setLocaleTransitioning(false);
        localeTimerRef.current = null;
      }, 240);
    }, 120);
  };

  const measureProjectDestination = useCallback((index: number, alignViewport: boolean) => {
    const card = document.querySelector<HTMLElement>(`.project-card[data-project-index="${index}"]`);
    if (!card) return;

    if (alignViewport) {
      const initialRect = card.getBoundingClientRect();
      const viewportInset = Math.max(16, (window.innerHeight - initialRect.height) / 2);
      const targetScroll = Math.max(0, window.scrollY + initialRect.top - viewportInset);
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, targetScroll);
      root.style.scrollBehavior = previousScrollBehavior;
    }

    const rect = card.getBoundingClientRect();
    projectTriggerRef.current = card.querySelector(".project-link");
    setProjectOrigin({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  const openProject = (index: number, card: HTMLElement) => {
    if (projectCloseTimerRef.current !== null) {
      window.clearTimeout(projectCloseTimerRef.current);
      projectCloseTimerRef.current = null;
    }
    const rect = card.getBoundingClientRect();
    projectTriggerRef.current = card.querySelector(".project-link");
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    setTaskOpen(false);
    setPolicyOpen(false);
    setProjectOrigin({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
    if (window.matchMedia("(min-width: 1024px)").matches) {
      runDesktopCurtain(() => {
        setActiveProjectIndex(index);
        setProjectExpanded(false);
        window.requestAnimationFrame(() => setProjectExpanded(true));
      });
      return;
    }
    setActiveProjectIndex(index);
    setProjectExpanded(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setProjectExpanded(true));
    });
  };

  const openNextProject = (index: number) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      runDesktopCurtain(() => {
        measureProjectDestination(index, true);
        setActiveProjectIndex(index);
      });
      return;
    }
    measureProjectDestination(index, true);
    setActiveProjectIndex(index);
  };

  const closeProject = useCallback(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (desktop) {
      runDesktopCurtain(() => {
        setProjectExpanded(false);
        setActiveProjectIndex(null);
        projectTriggerRef.current?.focus();
      });
      return;
    }
    setProjectExpanded(false);
    projectCloseTimerRef.current = window.setTimeout(() => {
      setActiveProjectIndex(null);
      projectCloseTimerRef.current = null;
      projectTriggerRef.current?.focus();
    }, 720);
  }, [activeProjectIndex, runDesktopCurtain]);

  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.body.classList.remove("menu-active");
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 420);
  };

  const openTaskForm = () => {
    setMenuOpen(false);
    setMoreProjectsOpen(false);
    setPolicyOpen(false);
    setTaskOpen(true);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const updateScrolled = () => {
      const headerHeight = heroHeaderRef.current?.offsetHeight ?? 72;
      setIsScrolled(window.scrollY >= headerHeight);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled);
    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setPreloaderDone(true), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-active", menuOpen);
    document.body.classList.toggle("socials-active", moreProjectsOpen);
    document.body.classList.toggle("task-active", taskOpen);
    document.body.classList.toggle("policy-active", policyOpen);
    document.body.classList.toggle("project-active", activeProjectIndex !== null);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeProjectIndex !== null) {
          document.querySelector<HTMLButtonElement>(".project-close")?.click();
        }
        else if (policyOpen) setPolicyOpen(false);
        else {
          setMenuOpen(false);
          setMoreProjectsOpen(false);
          setTaskOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-active", "socials-active", "task-active", "policy-active", "project-active");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, moreProjectsOpen, taskOpen, policyOpen, activeProjectIndex, closeProject]);

  useEffect(() => () => {
    if (localeTimerRef.current !== null) {
      window.clearTimeout(localeTimerRef.current);
    }
    if (projectCloseTimerRef.current !== null) {
      window.clearTimeout(projectCloseTimerRef.current);
    }
    curtainTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    curtainTimersRef.current = [];
  }, []);

  return (
    <main
      className={`${preloaderDone ? "page-ready" : "page-loading"} ${localeTransitioning ? "locale-transitioning" : ""}`}
      lang={locale}
    >
      <Preloader done={preloaderDone} locale={locale} />
      <div
        className={`desktop-project-curtain is-${desktopCurtainPhase}`}
        aria-hidden={desktopCurtainPhase === "idle"}
      />
      <header ref={heroHeaderRef} className={`site-header ${taskOpen ? "is-task-open" : ""}`}>
        <div className="header-left">
          <button
            className={`menu-button ${menuOpen || moreProjectsOpen || (taskOpen && !policyOpen) ? "is-open" : ""} ${policyOpen ? "is-back" : ""}`}
            onClick={() => {
              if (policyOpen) setPolicyOpen(false);
              else if (taskOpen) setTaskOpen(false);
              else if (moreProjectsOpen) setMoreProjectsOpen(false);
              else setMenuOpen((value) => !value);
            }}
            aria-expanded={menuOpen || moreProjectsOpen || taskOpen}
            aria-controls={taskOpen ? "task-form" : moreProjectsOpen ? "more-projects" : "site-menu"}
            aria-label={
              policyOpen
                ? copy.menuAria.back
                : taskOpen
                  ? copy.menuAria.closeTask
                  : moreProjectsOpen
                    ? copy.menuAria.close
                  : menuOpen
                    ? copy.menuAria.close
                    : copy.menuAria.open
            }
          >
            <span />
            <span />
          </button>
          <button
            className="language-toggle"
            type="button"
            aria-label={copy.language}
            onClick={toggleLocale}
            disabled={localeTransitioning}
          >
            <GlobeIcon />
            <span key={locale}>{locale.toUpperCase()}</span>
          </button>
        </div>
        <div className="header-actions">
          <button
            className={`task-button ${taskOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setMoreProjectsOpen(false);
              setPolicyOpen(false);
              setTaskOpen((value) => !value);
            }}
            aria-expanded={taskOpen}
            aria-controls="task-form"
            aria-hidden={policyOpen}
            tabIndex={policyOpen ? -1 : 0}
          >
            <span>{copy.task}</span>
            <i className="task-icon-wrap" aria-hidden="true">
              <img src="/portfolio/task-icon.svg" alt="" />
            </i>
          </button>
        </div>
      </header>

      <button
        className={`sticky-task-button ${isScrolled && !footerVisible && !taskOpen && !menuOpen && !moreProjectsOpen && !policyOpen && activeProjectIndex === null ? "is-visible" : ""}`}
        type="button"
        aria-label={copy.task}
        aria-controls="task-form"
        aria-expanded={taskOpen}
        tabIndex={isScrolled && !footerVisible && !taskOpen && !menuOpen && !moreProjectsOpen && !policyOpen && activeProjectIndex === null ? 0 : -1}
        onClick={openTaskForm}
      >
        <img src="/portfolio/task-icon.svg" alt="" aria-hidden="true" />
      </button>

      <TaskForm open={taskOpen} policyOpen={policyOpen} locale={locale} onPolicyOpen={setPolicyOpen} />

      {activeProjectIndex !== null && (
        <ProjectModal
          work={works[activeProjectIndex]}
          nextWork={works[(activeProjectIndex + 1) % works.length]}
          index={activeProjectIndex}
          locale={locale}
          expanded={projectExpanded}
          origin={projectOrigin}
          projectCount={works.length}
          onPrepareClose={() => measureProjectDestination(activeProjectIndex, true)}
          onClose={closeProject}
          onNext={() => openNextProject((activeProjectIndex + 1) % works.length)}
        />
      )}

      <div id="site-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label={copy.footerNavigation}>
          {copy.navigation.map(([label, href], index) => (
            <a key={label} href={href} onClick={(event) => navigateTo(event, href)}>
              <small>0{index + 1}</small>
              {label}
            </a>
          ))}
        </nav>
        <div className="menu-meta">
          <section>
            <p>{copy.socials}</p>
            <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
              <img src="/portfolio/linkedin.svg" alt="" /> LinkedIn
            </a>
            <a href="https://www.behance.net/offbody001c" target="_blank" rel="noreferrer">
              <img src="/portfolio/behance.svg" alt="" /> Behance
            </a>
            <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
              <img src="/portfolio/dribbble.svg" alt="" /> Dribbble
            </a>
          </section>
          <section>
            <p>{copy.credits}</p>
            <strong>{copy.name}</strong>
            <span>{copy.role}</span>
            <span>{copy.remote}</span>
          </section>
        </div>
        <p className="menu-signature">{copy.signature}</p>
      </div>

      <div
        id="more-projects"
        className={`more-projects-overlay ${moreProjectsOpen ? "is-open" : ""}`}
        aria-hidden={!moreProjectsOpen}
      >
        <button
          className="more-projects-close"
          type="button"
          aria-label={copy.menuAria.close}
          onClick={() => setMoreProjectsOpen(false)}
        >
          <span />
          <span />
        </button>
        <p>{copy.moreProjects}</p>
        <nav aria-label={copy.socials}>
          <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
            <img src="/portfolio/linkedin.svg" alt="" />
            <span>LinkedIn</span>
            <ArrowIcon />
          </a>
          <a href="https://www.behance.net/offbody001c" target="_blank" rel="noreferrer">
            <img src="/portfolio/behance.svg" alt="" />
            <span>Behance</span>
            <ArrowIcon />
          </a>
          <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
            <img src="/portfolio/dribbble.svg" alt="" />
            <span>Dribbble</span>
            <ArrowIcon />
          </a>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-card reveal is-visible">
          <img src="/portfolio/hero-img.png" alt={`${copy.name}, ${copy.role}`} />
          <div className="hero-shade" />
          <div className="hero-content">
            <p>{copy.heroName}</p>
            <h1 className="display-h1">
              {copy.heroTitle[0]}
              <br />
              {copy.heroTitle[1]}
            </h1>
            <ChipRail tags={heroTags[locale]} auto label={copy.heroDisciplines} />
          </div>
        </div>

        <div className="hero-intro reveal">
          <h2 className="display-h2">
            <span className="hero-intro-title-desktop">{copy.heroIntro}</span>
            <span className="hero-intro-title-mobile">
              {copy.heroIntroLines.map((line) => <span key={line}>{line}</span>)}
            </span>
          </h2>
          <div className="stats">
            <div>
              <strong>13+</strong>
              <span>{copy.year}</span>
              <p>{copy.statDesign}</p>
            </div>
            <div>
              <strong>8+</strong>
              <span>{copy.year}</span>
              <p>{copy.statResearch}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading reveal">
          <p>{copy.selected}</p>
          <h2 className="display-h1">{copy.recentWorks}</h2>
        </div>
        <div className="projects-grid">
          {works.map((work, index) => (
            <ProjectCard
              key={work.image}
              work={work}
              index={index}
              locale={locale}
              onOpen={openProject}
            />
          ))}
        </div>
        <div className="project-cta reveal">
          <div className="cta-card">
            <picture className="cta-background">
              <source media="(min-width: 1024px)" srcSet="/portfolio/case-form-img-desktop.png" />
              <img src="/portfolio/case-form-img.png" alt="" />
            </picture>
            <p className="cta-availability"><i aria-hidden="true" />{locale === "en" ? "Available" : "Доступен"}</p>
            <div className="cta-copy">
              <h2 className="display-h2">
                <span className="cta-title-desktop">
                  {locale === "en" ? <>Ready for a<br />design adventure.</> : <>Готов к<br />дизайн-приключению.</>}
                </span>
                <span className="cta-title-mobile">
                  {copy.readyLines.map((line) => <span key={line}>{line}</span>)}
                </span>
              </h2>
            </div>
            <span className="cta-action">{copy.newProject} <ArrowIcon /></span>
            <button
              className="cta-card-link"
              type="button"
              aria-label={copy.startNewProject}
              onClick={openTaskForm}
            />
          </div>
        </div>
        <button
          className="text-link reveal"
          type="button"
          onClick={() => {
            setMenuOpen(false);
            setTaskOpen(false);
            setPolicyOpen(false);
            setMoreProjectsOpen(true);
          }}
        >
          {copy.moreProjects} <ArrowIcon />
        </button>
      </section>

      <section className="mindset section-shell" id="mindset">
        <div className="section-heading reveal">
          <h2 className="display-h1">{copy.mindsetTitle}</h2>
        </div>
        <div className="mindset-copy">
          <h2 className="mindset-lead display-h2 reveal">
            {copy.mindsetLeadBefore}<em>{copy.mindsetLeadEmphasis}</em>{copy.mindsetLeadAfter}
          </h2>
          <div className="mindset-columns reveal">
            {copy.mindsetParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="reveal">
          <MindsetCanvas locale={locale} />
        </div>
        <div className="art-design reveal">
          <div className="art-design-row">
            <p>{copy.art}</p>
            <span className="art-design-meta">{copy.yes}</span>
          </div>
          <div className="art-design-row">
            <p><strong>{copy.designStrong}</strong>{copy.designAfter}</p>
            <span className="art-design-meta">{copy.but}</span>
          </div>
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading reveal">
          <h2 className="display-h1">{copy.skillsTitle}</h2>
        </div>
        <div className="skills-list">
          {copy.skills.map((skill, index) => (
            <article className="skill-row reveal" key={`skill-${index}`} style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}>
              <div>
                <h2 className="display-h2">{skill.title}</h2>
                <span className="skill-meta">{skill.meta}</span>
              </div>
              <p>{skill.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer ref={footerRef} className="portfolio-footer" id="contact">
        <img className="footer-pointer" src="/portfolio/kv-pointer-v2.svg" alt="" />
        <div className="footer-hero">
          <p className="availability"><span /> {copy.availability}</p>
          <h2 className="display-h1">
            <span className="footer-title-desktop">{copy.footerTitle}</span>
            <span className="footer-title-mobile">
              {copy.footerTitleLines.map((line) => <span key={line}>{line}</span>)}
            </span>
          </h2>
          <button
            className="conversation-button"
            type="button"
            onClick={openTaskForm}
          >
            <span>{copy.startProject}</span>
            <img src="/portfolio/task-icon.svg" alt="" />
          </button>
        </div>

        <div className="footer-links">
          <div className="footer-contact">
            <a href="#top" className="back-top">{copy.backTop} <span>↑</span></a>
            <p>{copy.gotVision[0]}<br />{copy.gotVision[1]}</p>
            <a href="https://t.me/somedesigner" target="_blank" rel="noreferrer" className="footer-email">@somedesigner</a>
          </div>
          <nav aria-label={copy.footerNavigation}>
            <p>{copy.footerNavigation}</p>
            <a href="#works">{copy.footerWorks}</a>
            <a href="#skills">{copy.footerServices}</a>
          </nav>
          <div className="footer-socials">
            <p>{copy.socials}</p>
            <a href="https://www.linkedin.com/in/bahdanau/" target="_blank" rel="noreferrer">
              <img src="/portfolio/linkedin.svg" alt="" /> LinkedIn
            </a>
            <a href="https://www.behance.net/offbody001c" target="_blank" rel="noreferrer">
              <img src="/portfolio/behance.svg" alt="" /> Behance
            </a>
            <a href="https://dribbble.com/offbody" target="_blank" rel="noreferrer">
              <img src="/portfolio/dribbble.svg" alt="" /> Dribbble
            </a>
          </div>
        </div>

        <div className="footer-signature">
          <h3>{copy.name}</h3>
          <p>{copy.role}<br />{copy.remote}</p>
          <span>@ 2026</span>
        </div>
      </footer>
    </main>
  );
}
