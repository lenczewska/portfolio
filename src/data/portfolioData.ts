import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Александра',
    surname: 'Смирнова',
    role: 'Frontend & Fullstack Developer',
    tagline: 'Создаю масштабируемые веб-приложения с чистым кодом и продуманным UI/UX',
    shortAbout: 'Привет! Я разработчик с фокусом на TypeScript, React и современной экосистеме веб-разработки. Люблю превращать сложные бизнес-задачи в элегантные, быстрые и доступные цифровые продукты.',
    bio: 'Имею крепкую базу в алгоритмах, архитектуре веб-приложений и современных инструментах разработки. Постоянно повышаю квалификацию, изучаю лучшие практики и стремлюсь к написанию чистого, тестируемого кода.',
    avatarUrl: '/images/avatar.jpg',
    resumeUrl: '#contact',
    stats: [
      { value: '15+', label: 'Завершенных проектов', subtext: 'Web & SPA' },
      { value: '3+', label: 'Года практики', subtext: 'React & TypeScript' },
      { value: '8+', label: 'Сертификатов и курсов', subtext: 'Профильное обучение' },
      { value: '100%', label: 'Внимание к деталям', subtext: 'Clean Architecture' }
    ]
  },

  contacts: {
    email: 'lenczeewska@gmail.com',
    telegram: 'https://t.me/lenczewskaa',
    telegramHandle: '@lenczewskaa',
    github: 'https://github.com/lenczewska',
    githubHandle: 'github.com/lenczewska',
    linkedin: 'https://www.linkedin.com/in/lenczewska/',
    linkedinHandle: 'linkedin.com/in/lenczewska',
    location: 'Баку, Азербайджан / Remote',
    status: 'Открыта к интересным проектам и предложениям'
  },

  projects: [
    {
      id: 'aura-analytics',
      title: 'Aura Analytics — SaaS Дашборд',
      category: 'fullstack',
      categoryLabel: 'Fullstack / SaaS',
      description: 'Аналитическая платформа реального времени для мониторинга метрик, блокчейн-активов и пользовательской активности.',
      fullDescription: 'Полнофункциональный дашборд с интерактивными графиками, поддержкой WebSockets для обновления котировок в реальном времени, гибкой системой фильтрации данных и адаптивной темной темой. Разработана модульная архитектура компонентов и оптимизирован рендеринг тяжелых графиков.',
      image: '/images/project_saas.jpg',
      tags: ['React', 'TypeScript', 'Vite', 'Chart.js', 'Tailwind CSS', 'Node.js', 'REST API'],
      features: [
        'Интерактивные графики с масштабированием и тултипами',
        'Синхронизация данных в реальном времени по WebSocket',
        'Фильтрация и экспорт аналитических отчетов в CSV / PDF',
        'Управление состоянием с помощью Zustand / Redux Toolkit',
        'Поддержка темной и светлой темы с сохранением настроек'
      ],
      demoUrl: 'https://example.com/demo-aura',
      githubUrl: 'https://github.com/example/aura-analytics',
      featured: true,
      date: '2026'
    },
    {
      id: 'aether-store',
      title: 'Aether Store — E-Commerce Платформа',
      category: 'frontend',
      categoryLabel: 'Frontend / E-Commerce',
      description: 'Современный интернет-магазин с 3D-превью товаров, корзиной, умным поиском и онлайн-оплатой.',
      fullDescription: 'Высокопроизводительный интернет-магазин с оптимизированной загрузкой изображений, плавной анимацией взаимодействия, фильтрацией товаров по категориям и ценам, оформлением заказов и интеграцией платежного шлюза.',
      image: '/images/project_ecommerce.jpg',
      tags: ['React', 'TypeScript', 'Next.js', 'Framer Motion', 'Stripe API', 'CSS Modules'],
      features: [
        'Каталог с умной фильтрацией, пагинацией и сортировкой',
        'Интерактивная корзина с сохранением в LocalStorage',
        'Плавные микроанимации переходов между страницами',
        'Адаптивный дизайн для смартфонов, планшетов и десктопов',
        'Интеграция тестового чекаута'
      ],
      demoUrl: 'https://example.com/demo-aether',
      githubUrl: 'https://github.com/example/aether-store',
      featured: true,
      date: '2025 - 2026'
    },
    {
      id: 'neural-flow',
      title: 'NeuralFlow — AI Workspace',
      category: 'fullstack',
      categoryLabel: 'AI App / Web App',
      description: 'Интерфейс для работы с LLM-моделями, визуализации нейросетевых связей и управления промптами.',
      fullDescription: 'Веб-приложение с диалоговым интерфейсом для взаимодействия с AI-моделями, поддержкой стриминга ответов (Server-Sent Events), подсветкой синтаксиса кода в чате, управлением рабочими пространствами и визуализацией графов.',
      image: '/images/project_ai.jpg',
      tags: ['React', 'TypeScript', 'OpenAI API', 'Canvas API', 'Zustand', 'CSS Grid'],
      features: [
        'Потоковая генерация ответов (streaming response)',
        'Интерактивная визуализация графов связей на HTML5 Canvas',
        'Подсветка синтаксиса для 20+ языков программирования',
        'История переписок с полнотекстовым поиском',
        'Кастомизация системных промптов и параметров генерации'
      ],
      demoUrl: 'https://example.com/demo-neuralflow',
      githubUrl: 'https://github.com/example/neuralflow',
      featured: true,
      date: '2025'
    }
  ],

  skillCategories: [
    {
      id: 'languages',
      title: 'Языки программирования',
      iconName: 'Code2',
      description: 'Основной стек языков для создания надежной логики и архитектуры',
      skills: [
        { name: 'TypeScript', level: 92, levelText: 'Продвинутый', experience: '3 года', description: 'Строгая типизация, дженерики, утилитные типы, AST, архитектура' },
        { name: 'JavaScript (ES6+)', level: 95, levelText: 'Эксперт', experience: '4 года', description: 'Асинхронность, Event Loop, Closures, Прототипы, модули' },
        { name: 'HTML5 & Semantic Web', level: 98, levelText: 'Эксперт', experience: '4 года', description: 'Семантическая верстка, доступность (a11y), SEO-оптимизация' },
        { name: 'CSS3 / SCSS / PostCSS', level: 94, levelText: 'Продвинутый', experience: '4 года', description: 'Flexbox, Grid, Custom Properties, анимации, адаптив' },
        { name: 'SQL & PostgreSQL', level: 75, levelText: 'Средний', experience: '2 года', description: 'Запросы, связи таблиц, индексы, проектирование схем' },
        { name: 'Python', level: 70, levelText: 'Базовый+', experience: '1.5 года', description: 'Скрипты автоматизации, работа с API, базовый бэкенд' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Фреймворки & Стек',
      iconName: 'Layout',
      description: 'Инструменты для создания реактивных, динамичных и отзывчивых UI',
      skills: [
        { name: 'React 18 / 19', level: 95, levelText: 'Эксперт', experience: '3 года', description: 'Хуки, Custom Hooks, Suspense, Concurrent Mode, оптимизация рендеров' },
        { name: 'Next.js', level: 85, levelText: 'Продвинутый', experience: '2 года', description: 'App Router, SSR, SSG, Server Components, API routes' },
        { name: 'Redux Toolkit / Zustand', level: 90, levelText: 'Продвинутый', experience: '3 года', description: 'Глобальный стейт-менеджмент, селекторы, RTK Query' },
        { name: 'React Router v6 / TanStack', level: 92, levelText: 'Продвинутый', experience: '3 года', description: 'SPA маршрутизация, ленивая загрузка, кэширование' },
        { name: 'REST API & WebSockets', level: 90, levelText: 'Продвинутый', experience: '3 года', description: 'Интеграция сервисов, Axios, Fetch, Real-time стриминг' },
        { name: 'Tailwind CSS & Vanilla CSS', level: 95, levelText: 'Эксперт', experience: '3 года', description: 'Кастомные дизайн-системы, микроанимации, UI-киты' }
      ]
    },
    {
      id: 'tools',
      title: 'Инструменты & DevOps',
      iconName: 'Wrench',
      description: 'Среда разработки, контроль версий и сборщики',
      skills: [
        { name: 'Git & GitHub / GitLab', level: 90, levelText: 'Продвинутый', experience: '4 года', description: 'Ветвление, Pull Requests, Rebase, Git Flow, CI/CD Actions' },
        { name: 'Vite & Webpack', level: 88, levelText: 'Продвинутый', experience: '3 года', description: 'Конфигурация сборки, code-splitting, tree-shaking, плагины' },
        { name: 'Docker (Основы)', level: 72, levelText: 'Средний', experience: '1.5 года', description: 'Контейнеризация клиентских приложений, Dockerfile, Compose' },
        { name: 'Figma to Code', level: 92, levelText: 'Продвинутый', experience: '4 года', description: 'Pixel Perfect верстка, дизайн-токены, автолейауты' },
        { name: 'Jest / React Testing Library', level: 78, levelText: 'Средний', experience: '2 года', description: 'Юнит-тестирование компонентов, снепшоты, моки' },
        { name: 'Postman & Swagger', level: 88, levelText: 'Продвинутый', experience: '3 года', description: 'Тестирование эндпоинтов, документация API' }
      ]
    }
  ],

  languages: [
    {
      language: 'Русский',
      level: 'Родной язык (Native)',
      percentage: 100,
      flag: '🇷🇺',
      description: 'Свободное владение, грамотная устная и письменная речь'
    },
    {
      language: 'Английский (English)',
      level: 'B2 — Upper-Intermediate',
      percentage: 80,
      flag: '🇬🇧',
      description: 'Чтение технической документации, ведение переписки, участие в созвонах'
    },
    {
      language: 'Немецкий (Deutsch)',
      level: 'A2 — Elementary',
      percentage: 35,
      flag: '🇩🇪',
      description: 'Базовые фразы, продолжаю активное изучение'
    }
  ],

  courses: [
    {
      id: 'course-1',
      title: 'Профессия: Frontend-разработчик PRO',
      institution: 'Яндекс Практикум / Академия',
      instructor: 'Senior Frontend Engineers',
      period: '2024 — 2025 (9 месяцев)',
      credentialUrl: 'https://example.com/certificate/yandex-practicum',
      certificateId: 'YP-FE-984210',
      skillsLearned: ['TypeScript в глубину', 'React архитектура', 'Тестирование (Jest, RTL)', 'Алгоритмы', 'CI/CD'],
      description: 'Углубленная программа подготовки frontend-инженеров: разработка крупных SPA приложений, веб-безопасность, оптимизация производительности и командная работа по Agile/Scrum.',
      featured: true
    },
    {
      id: 'course-2',
      title: 'React & Redux: Проектирование сложных интерфейсов',
      institution: 'Hexlet / Udemy',
      instructor: 'Senior Staff Architect',
      period: '2024 (4 месяца)',
      credentialUrl: 'https://example.com/certificate/react-redux-pro',
      certificateId: 'HEX-RR-44912',
      skillsLearned: ['Redux Toolkit', 'RTK Query', 'Zustand', 'Custom Hooks', 'Virtual DOM internals'],
      description: 'Курс по паттернам проектирования в React: компонентная композиция, чистые функции, эффективная работа с состоянием и кэшированием данных.',
      featured: true
    },
    {
      id: 'course-3',
      title: 'TypeScript Masterclass: Полное руководство от А до Я',
      institution: 'Stepik / Frontend Masters',
      period: '2023 (3 месяца)',
      credentialUrl: 'https://example.com/certificate/ts-masterclass',
      certificateId: 'TS-MC-2023-77',
      skillsLearned: ['Generics', 'Conditional Types', 'Mapped Types', 'Declaration files', 'Decorators'],
      description: 'Глубокое погружение в систему типов TypeScript, создание типобезопасных библиотек и рефакторинг legacy JavaScript кода на TypeScript.',
      featured: true
    },
    {
      id: 'course-4',
      title: 'UI/UX Design & Дизайн-системы в Figma',
      institution: 'Skillbox / Coursera',
      period: '2023 (2 месяца)',
      credentialUrl: 'https://example.com/certificate/uiux-figma',
      certificateId: 'UX-FG-8819',
      skillsLearned: ['Figma AutoLayout', 'Компоненты и варианты', 'Дизайн-токены', 'Доступность интерфейсов (WCAG)'],
      description: 'Практический курс по созданию современных адаптивных дизайн-систем, прототипированию и передаче макетов в разработку.',
      featured: false
    }
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'Бакалавр',
      field: 'Информационные системы и технологии (ИСТ)',
      university: 'Национальный исследовательский университет',
      period: '2020 — 2024',
      description: 'Профильное высшее образование в области компьютерных наук: структуры данных, алгоритмы, базы данных, ООП и архитектура вычислительных систем.'
    }
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Frontend / React Разработчик',
      company: 'Tech Solutions Studio',
      location: 'Москва / Remote',
      period: '2024 — Настоящее время',
      isCurrent: true,
      description: 'Разработка и поддержка клиентской части современных веб-сервисов и корпоративных панелей управления.',
      achievements: [
        'Перевела кодовую базу с JavaScript на TypeScript, сократив количество runtime-ошибок на 40%',
        'Реализовала модульную дизайн-систему на React, ускорив выпуск новых страниц в 2 раза',
        'Оптимизировала бандл приложения через code splitting, улучшив Core Web Vitals и показатель LCP на 35%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'SCSS', 'Jest']
    },
    {
      id: 'exp-2',
      role: 'Junior Frontend Разработчик',
      company: 'Digital Wave Agency',
      location: 'Удаленно',
      period: '2023 — 2024',
      isCurrent: false,
      description: 'Создание адаптивных лендингов, интернет-магазинов и интеграция с внешними REST API.',
      achievements: [
        'Сверстала более 10 высоконагруженных лендингов и промо-страниц с идеальным Pixel Perfect соответствием',
        'Настроила клиентскую валидацию форм и интеграцию с CRM-системами через Webhook API'
      ],
      technologies: ['JavaScript (ES6+)', 'React', 'HTML5/CSS3', 'Git', 'Webpack', 'Figma']
    }
  ]
};
