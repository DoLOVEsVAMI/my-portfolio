import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  ServerCog,
  Send,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const skillGroups = [
  { icon: Braces, title: 'Серверная часть', items: ['Python', 'Django', 'FastAPI', 'Flask', 'REST API', 'OpenAPI'] },
  { icon: Code2, title: 'Интерфейсы', items: ['React', 'Next.js', 'Vue.js', 'JavaScript', 'HTML / CSS'] },
  { icon: Database, title: 'Данные и системы', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'Celery', 'Kafka'] },
  { icon: ServerCog, title: 'Инфраструктура', items: ['Docker', 'Nginx', 'Linux', 'Git', 'CI / CD', 'WebSocket'] },
]

const projects = [
  {
    number: '01',
    title: 'Компьютерное зрение для промышленных труб',
    description: 'Система автоматически анализирует геометрию трубы по изображениям сканов: диаметры, толщину стенки, овальность и дефекты.',
    metric: '90–95%',
    metricLabel: 'точность измерений',
    tags: ['Python', 'OpenCV', 'Графический интерфейс'],
    bullets: ['Самостоятельно спроектировал весь процесс обработки', 'Решение используется в реальной эксплуатации'],
    accent: 'vision',
  },
  {
    number: '02',
    title: 'Мониторинг транспорта',
    description: 'Комплексная веб-система для контроля корпоративного автопарка и анализа телематических данных в реальном времени.',
    metric: '20',
    metricLabel: 'автомобилей онлайн',
    tags: ['Django', 'React', 'PostgreSQL', 'WebSocket'],
    bullets: ['Карта, история перемещений и обновления в реальном времени', 'Аналитика, отчётность и ролевая модель доступа'],
    accent: 'transport',
  },
  {
    number: '03',
    title: 'Платформа онлайн-сообщества',
    description: 'Цифровое пространство онлайн-школы: профили, публикации, чаты, курсы, группы, уведомления и модерация.',
    metric: '1–2 тыс.',
    metricLabel: 'активных пользователей',
    tags: ['Python', 'React', 'Реальное время', 'Роли и права'],
    bullets: ['Серверная часть и пользовательский интерфейс', 'Личные и групповые чаты, сообщества и курсы'],
    accent: 'community',
  },
  {
    number: '04',
    title: 'Рабочее пространство для команды',
    description: 'Notion-подобное приложение для организации знаний и командной работы с гибкой структурой страниц.',
    metric: '10+',
    metricLabel: 'ключевых модулей',
    tags: ['React', 'Django', 'PostgreSQL'],
    bullets: ['Форматированный текст, перетаскивание и вложенные страницы', 'Файлы, поиск, комментарии и права доступа'],
    accent: 'workspace',
  },
]

const experience = [
  {
    years: '2024 — сейчас',
    role: 'Разработчик полного цикла / программный инженер',
    company: 'Коммерческая разработка',
    text: 'Разрабатываю и поддерживаю веб-приложения на Python и React: от архитектуры и API до интерфейса и инфраструктуры рабочего продукта.',
    items: ['Сервисы на Django, FastAPI и Flask', 'PostgreSQL, Redis, MongoDB и Neo4j', 'JWT, OAuth, роли доступа и документация OpenAPI', 'Docker, Linux, Nginx и автоматическое развёртывание'],
  },
  {
    years: '2025 — сейчас',
    role: 'Разработчик полного цикла / программный инженер',
    company: 'Стартап · приложение для тренировок',
    text: 'Развиваю продукт с ранней стадии: проектирую API и данные, реализую серверную функциональность и решаю задачи пользовательского интерфейса.',
    items: ['Около 100 пользователей сейчас', 'Аудитория до 500 пользователей за время разработки', 'Проработка архитектуры новых продуктовых функций'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="На главную" onClick={closeMenu}>
          <span className="brand-mark">{'{ }'}</span>
          <span>портфолио</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Связаться <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="status-pill"><span /> Открыт к предложениям · удалённо</div>
            <p className="eyebrow">Всеволод Яхимович · Python-разработчик и программный инженер</p>
            <h1>Создаю системы,<br />которые <span>работают.</span></h1>
            <p className="hero-lead">Проектирую серверную часть, API и базы данных, собираю интерфейсы на React и довожу продукты до рабочего запуска.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">Посмотреть проекты <ArrowDown size={18} /></a>
              <a className="button button--ghost" href="#contact">Обсудить задачу <ArrowUpRight size={18} /></a>
            </div>
            <div className="hero-meta">
              <div><strong>2+</strong><span>года коммерческого опыта</span></div>
              <div><strong>B2</strong><span>Английский язык</span></div>
              <div><strong>Полный цикл</strong><span>от API до запуска</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Фотография Всеволода Яхимовича">
            <div className="portrait-frame">
              <img src="./profile.jpg" alt="Всеволод Яхимович у моря" />
              <div className="portrait-caption">
                <span>Россия</span>
                <strong>Удалённо по всему миру</strong>
              </div>
            </div>
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="floating-label floating-label--top"><Sparkles size={15} /> открыт к предложениям</div>
            <div className="floating-label floating-label--bottom"><span>2+</span> года коммерческого опыта</div>
          </div>
        </section>

        <section id="about" className="about section-shell section-block">
          <div className="section-heading">
            <p className="section-index">01 / ОБО МНЕ</p>
            <h2>Инженерный подход<br />к продуктовым задачам.</h2>
          </div>
          <div className="about-content">
            <p className="about-lead">Я Python-разработчик с практическим опытом во всём цикле создания веб-продукта.</p>
            <p>Основная специализация — серверная разработка, проектирование REST API, структуры баз данных и архитектуры приложений. Работаю и с пользовательским интерфейсом на React, а также создаю решения в области компьютерного зрения и машинного обучения.</p>
            <p>Беру ответственность не только за код: настраиваю Docker, Nginx, Linux-окружение, CI/CD и автоматическое развёртывание.</p>
            <div className="focus-row">
              <span><Check size={15} /> Архитектура</span>
              <span><Check size={15} /> Запуск в работу</span>
              <span><Check size={15} /> Масштабирование</span>
            </div>
          </div>
        </section>

        <section className="skills section-shell section-block">
          <div className="section-heading section-heading--inline">
            <div>
              <p className="section-index">02 / СТЕК</p>
              <h2>Инструменты,<br />которые знаю в деле.</h2>
            </div>
            <p>Выбираю технологии под задачу, а не наоборот.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <div className="tag-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="secondary-skills">
            <span>Компьютерное зрение</span><i />
            <span>OpenCV</span><i />
            <span>PyTorch</span><i />
            <span>TensorFlow</span><i />
            <span>OAuth</span><i />
            <span>Проверка кода</span>
          </div>
        </section>

        <section id="projects" className="projects section-block">
          <div className="section-shell">
            <div className="section-heading section-heading--inline projects-heading">
              <div>
                <p className="section-index">03 / ПРОЕКТЫ</p>
                <h2>Сделано для<br />реального мира.</h2>
              </div>
              <p>Системы с пользователями, данными и измеримым результатом.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-art project-art--${project.accent}`}>
                    <span className="project-number">{project.number}</span>
                    <div className="art-grid" />
                    <div className="metric-card"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                    <div className="art-dot art-dot--a" /><div className="art-dot art-dot--b" /><div className="art-path" />
                  </div>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}
                    </ul>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-shell section-block">
          <div className="section-heading">
            <p className="section-index">04 / ОПЫТ</p>
            <h2>Опыт и образование.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-date">{item.years}</div>
                <div className="timeline-content">
                  <p className="timeline-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.text}</p>
                  <ul>{item.items.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
            <article className="timeline-item timeline-item--education">
              <div className="timeline-marker"><GraduationCap size={16} /></div>
              <div className="timeline-date">Образование</div>
              <div className="timeline-content">
                <p className="timeline-company">Северо-Кавказский федеральный университет</p>
                <h3>Информационные системы и технологии</h3>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact section-shell section-block">
          <div className="contact-card">
            <div className="contact-orb" />
            <p className="section-index">05 / КОНТАКТЫ</p>
            <h2>Есть задача?<br /><span>Давайте обсудим.</span></h2>
            <p>Открыт к предложениям по удалённой работе и интересным продуктовым задачам.</p>
            <div className="contact-actions">
              <a className="button button--light" href="mailto:sevan4ik1337@gmail.com"><Mail size={18} /> Написать на почту</a>
              <a className="button button--outline-light" href="https://t.me/yahimovich" target="_blank" rel="noreferrer"><Send size={18} /> Telegram <ArrowUpRight size={16} /></a>
              <a className="button button--outline-light" href="https://vk.ru/yahimovich" target="_blank" rel="noreferrer"><UsersRound size={18} /> VK <ArrowUpRight size={16} /></a>
              <a className="button button--outline-light" href="https://github.com/DoLOVEsVAMI" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-meta"><span><MapPin size={15} /> Удалённая работа</span><span>Русский · Английский B2</span></div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <a className="brand" href="#top"><span className="brand-mark">{'{ }'}</span><span>портфолио</span></a>
        <a href="#top" className="to-top">Наверх <ArrowUpRight size={15} /></a>
      </footer>
    </>
  )
}

export default App
