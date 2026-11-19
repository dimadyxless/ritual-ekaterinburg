'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Flower2, MapPin, Menu, MessageCircle, Phone, Truck, X } from 'lucide-react';

const services = [
  { title: 'Перевозка', text: 'Бережная транспортировка. Обсудим адрес, маршрут и необходимые условия.', icon: Truck },
  { title: 'Организация прощания', text: 'Помощь с подготовкой церемонии с учётом пожеланий семьи.', icon: Flower2 },
  { title: 'Сопровождение', text: 'Разберём последовательность действий и вопросы организации.', icon: MessageCircle },
];
const questions = [
  ['Как заказать перевозку?', 'Свяжитесь с компанией по телефону или в мессенджере. Сообщите адрес отправления, место назначения и желаемое время. Условия и стоимость необходимо согласовать до заказа.'],
  ['Что сообщить при первом обращении?', 'Достаточно кратко описать ситуацию, назвать адрес и оставить способ связи. Остальные детали можно обсудить в разговоре.'],
  ['Как узнать стоимость?', 'Стоимость зависит от маршрута, условий перевозки и выбранных услуг. Попросите предварительный расчёт с перечнем работ до подтверждения заказа.'],
  ['Можно ли обратиться только за перевозкой?', 'В этом макете перевозка предусмотрена как отдельная услуга. Доступные маршруты и условия нужно уточнить у компании.'],
];

export default function Home() {
  const isMonuments = window.location.pathname.endsWith('/monuments.html');
  const dialog = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactTitle, setContactTitle] = useState('Давайте обсудим, какая помощь нужна');

  function openContact(transport = false) {
    setContactTitle(transport ? 'Заказать перевозку' : 'Давайте обсудим, какая помощь нужна');
    setMenuOpen(false);
    dialog.current?.showModal();
  }

  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <header className="site-header">
        <a className="brand" href="./" aria-label="Ритуальная помощь — на главную"><Flower2 size={32} strokeWidth={1} /><span>Ритуальная помощь<small>ЕКАТЕРИНБУРГ</small></span></a>
        <nav aria-label="Основная навигация" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          <a href="./monuments.html">Памятники</a>
          <a href={isMonuments ? './#services' : '#services'} onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href={isMonuments ? './#approach' : '#approach'} onClick={() => setMenuOpen(false)}>Наш подход</a>
          <a href={isMonuments ? './#questions' : '#questions'} onClick={() => setMenuOpen(false)}>Вопросы</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
        <button className="header-contact" aria-label="Связаться с компанией" onClick={() => openContact()}><Phone size={15} /> Связаться</button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <main id="main">
        {isMonuments ? <>
          <section className="monuments-intro container section">
            <a className="back-link" href="./">← На главную</a>
            <p className="eyebrow">ПАМЯТНИКИ · ЕКАТЕРИНБУРГ</p>
            <h1>Память, <em>сохранённая в камне</em></h1>
            <p className="body-copy">Обсудим памятник, который бережно сохранит память о близком человеке. Начать можно с ваших пожеланий, фотографии или примера оформления.</p>
            <button className="button gold" onClick={() => openContact()}>Обсудить памятник <ArrowUpRight size={18} /></button>
          </section>
          <section className="container section monuments-details">
            <p className="eyebrow">ЧТО ВАЖНО УЧЕСТЬ</p><h2>Продуманное <em>оформление</em></h2>
            <div className="steps">
              <article><span className="step-number">01</span><h3>Форма и материал</h3><p>Обсудим внешний вид, размеры и материал. Доступные варианты уточняются при обращении.</p></article>
              <article><span className="step-number">02</span><h3>Надписи и портрет</h3><p>Подготовьте имя, даты, фотографию и пожелания к надписи. Все детали необходимо согласовать заранее.</p></article>
              <article><span className="step-number">03</span><h3>Сроки и установка</h3><p>Условия изготовления, установки и итоговую стоимость уточним с учётом места и выбранного оформления.</p></article>
            </div>
          </section>
          <section className="transport-section"><div><p className="eyebrow">НАЧНЁМ С РАЗГОВОРА</p><h2>Поможем <em>обсудить детали</em></h2><p>Расскажите о ваших пожеланиях.<br />Каталог, цены и контакты готовятся к публикации.</p></div><button className="button gold" onClick={() => openContact()}>Связаться по памятникам <ArrowUpRight size={18} /></button></section>
        </> : <>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art">
            <picture><source media="(max-width: 1100px)" srcSet="./images/hero-belorechenskaya-mobile.webp" /><img className="hero-image" width="1774" height="887" decoding="async" src="./images/hero-belorechenskaya-fast.webp" alt="Золотая арка и чёрно-золотой логотип Белореченская 10 на фактурной стене" fetchPriority="high" /></picture>
            <div className="hero-shade" />
          </div>
          <div className="hero-content container">
              <h1 id="hero-title">Бережно поможем<br />в <em>трудный момент.</em></h1>
            <p className="hero-description">Организация прощания и перевозка.<br />С вниманием к вашей семье<br className="mobile-break" /> и уважением к памяти близкого.</p>
            <div className="hero-actions"><button className="button gold" onClick={() => openContact(true)}><Truck size={19} /> Заказать перевозку <ArrowUpRight size={18} /></button></div>
            <p className="hero-note">Начнём с простого разговора. Поможем разобраться.</p>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="approach-copy"><p className="eyebrow">НАШ ПОДХОД</p><h2>Когда важны<br /><em>участие и такт</em></h2><p className="body-copy">В такие моменты бывает сложно принимать решения. Мы предлагаем начать с разговора — спокойно обсудить вашу ситуацию, пожелания семьи и дальнейшие шаги.</p><ul className="principles"><li><Check size={17} /><div><h3>Внимание к пожеланиям</h3><p>Традиции и решения вашей семьи — основа прощания.</p></div></li><li><Check size={17} /><div><h3>Понятная последовательность</h3><p>Обсудим, что нужно сделать сейчас и что можно решить позже.</p></div></li><li><Check size={17} /><div><h3>Согласование деталей</h3><p>Состав услуг и стоимость обсудим до начала работ.</p></div></li></ul></div>
        </section>


        <section className="services section atmosphere-section" id="services">
          <div className="section-heading"><div><p className="eyebrow">ПОМОЩЬ И ПОДДЕРЖКА</p><h2>Возьмём на себя<br /><em>организационные заботы</em></h2></div><p className="section-intro">Вы можете обратиться за отдельной услугой<br />или обсудить организацию прощания целиком.</p></div>
          <div className="service-grid">{services.map(({ title, text, icon: Icon }, index) => <button className="service" key={title} onClick={() => openContact(index === 0)}><Icon className="service-icon" size={32} strokeWidth={1.1} /><h3>{title}</h3><p>{text}</p><span className="service-action">Обсудить услугу <ArrowUpRight size={18} /></span></button>)}</div>
        </section>

        <section className="monuments-teaser container section">
          <div><p className="eyebrow">ПАМЯТНИКИ</p><h2>Сохранить память <em>о близком</em></h2><p className="body-copy">Форма, материал, портрет и памятная надпись — расскажите, какое оформление вам близко. Детали можно обсудить с нами.</p></div>
          <a className="button gold" href="./monuments.html">Подробнее о памятниках <ArrowUpRight size={18} /></a>
        </section>
        <section className="steps-section section atmosphere-section"><div className="container"><p className="eyebrow">С ЧЕГО НАЧАТЬ</p><h2>Вам достаточно <em>связаться с нами</em></h2><div className="steps"><article><span className="step-number">01</span><h3>Расскажите о ситуации</h3><p>Позвоните или напишите.<br />Начнём с того, какая помощь нужна.</p></article><article><span className="step-number">02</span><h3>Обсудим детали</h3><p>Уточним пожелания, адреса,<br />сроки и состав услуг.</p></article><article><span className="step-number">03</span><h3>Согласуем порядок работы</h3><p>Определим стоимость<br />и последовательность действий.</p></article></div></div></section>

        <section className="transport-section"><div><p className="eyebrow">ПЕРЕВОЗКА В ЕКАТЕРИНБУРГЕ</p><h2>Помощь начинается<br /><em>с одного обращения</em></h2><p>Сообщите адрес и нужный маршрут.<br />Остальные детали обсудим вместе.</p></div><button className="button gold" onClick={() => openContact(true)}><Truck size={19} /> Заказать перевозку <ArrowUpRight size={18} /></button></section>

        <section className="faq-section section" id="questions"><div><p className="eyebrow">ОТВЕТЫ НА ВОПРОСЫ</p><h2>Чтобы стало<br /><em>немного понятнее</em></h2><p className="body-copy">Если ваш вопрос остался —<br />мы готовы его обсудить.</p><button className="text-link" onClick={() => openContact()}>Задать вопрос <ArrowUpRight size={17} /></button></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>

        </>}
      </main>
      <footer className="site-footer" id="contacts">
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="brand" href="./" aria-label="Ритуальная помощь — на главную">
              <Flower2 size={32} strokeWidth={1} />
              <span>Ритуальная помощь<small>ЕКАТЕРИНБУРГ</small></span>
            </a>
            <p>С вниманием к людям.<br />С уважением к памяти.</p>
            <span className="footer-location"><MapPin size={15} /> Екатеринбург</span>
          </div>
          <nav className="footer-column" aria-label="Навигация в подвале">
            <h3>О компании</h3>
            <a href="./#approach">Наш подход</a>
            <a href="./#services">Услуги</a>
            <a href="./monuments.html">Памятники</a>
            <a href="./#questions">Частые вопросы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="footer-column">
            <h3>Помощь и услуги</h3>
            <button onClick={() => openContact(true)}>Заказать перевозку</button>
            <button onClick={() => openContact()}>Организация прощания</button>
            <button onClick={() => openContact()}>Сопровождение</button>
          </div>
          <div className="footer-column footer-connect">
            <h3>Свяжитесь с нами</h3>
            <button onClick={() => openContact()}><Phone size={16} /> По телефону <ArrowUpRight size={15} /></button>
            <button onClick={() => openContact()}><MessageCircle size={16} /> В мессенджере <ArrowUpRight size={15} /></button>
            <p>Телефон и ссылка на мессенджер<br />будут добавлены позже.</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Ритуальная помощь · Екатеринбург</span>
          <span>Предварительный макет. Название и услуги уточняются.</span>
          <a href="#">Наверх <ArrowUpRight size={15} /></a>
        </div>
      </footer>
      <dialog ref={dialog} aria-labelledby="contact-title" className="contact-dialog" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="dialog-close" aria-label="Закрыть" onClick={() => dialog.current?.close()}><X /></button><p className="eyebrow">ЕКАТЕРИНБУРГ</p><h2 id="contact-title">{contactTitle}</h2><p>Выберите удобный способ связи. Для перевозки подготовьте адрес отправления и место назначения.</p><div className="dialog-options"><div><Phone size={23} /><strong>По телефону</strong><span>Номер будет добавлен</span></div><div><MessageCircle size={23} /><strong>В мессенджере</strong><span>Ссылка будет добавлена</span></div></div><p className="demo-note">Это предварительный макет. Приём обращений станет доступен после добавления контактов компании.</p><button className="button outline" onClick={() => dialog.current?.close()}>Вернуться на сайт</button>
      </dialog>
    </>
  );
}
