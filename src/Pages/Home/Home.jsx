import "./Home.scss";

export default function Home() {
  return (
    <div className="homePage">
      <div className="homePage__container">
        <h1 className="homePage__title">Приветствуем тебя в ITGIRLS!</h1>
        <div className="homePage__subject-list">
          <div className="homePage__subject-item">
            <h2 className="homePage__subject-item-name">HTML и CSS</h2>
            <p className="homePage__subject-item-desc">
              Курс предназначен для начинающих, желающих освоить основы
              веб-разработки. В ходе обучения вы научитесь создавать
              структурированные веб-страницы с использованием HTML, а также
              стилизовать их с помощью CSS. Курс охватывает ключевые концепции,
              такие как теги, атрибуты, селекторы, оформление текста, цвета,
              макеты и адаптивный дизайн.
            </p>
            <button className="homePage__subject-item-btn">Перейти</button>
          </div>
          <div className="homePage__subject-item">
            <h2 className="homePage__subject-item-name">JavaScript</h2>
            <p className="homePage__subject-item-desc">
              Это вводный курс для тех, кто хочет освоить основы
              программирования на языке JavaScript. Вы научитесь добавлять
              интерактивность на веб-страницы, работать с элементами DOM,
              обрабатывать события и использовать основные структуры данных.
              Курс охватывает ключевые концепции, такие как переменные, функции,
              циклы и условия, что позволит вам создавать динамичные
              веб-приложения.
            </p>
            <button className="homePage__subject-item-btn">Перейти</button>
          </div>
          <div className="homePage__subject-item">
            <h2 className="homePage__subject-item-name">React</h2>
            <p className="homePage__subject-item-desc">
              Курс по React познакомит вас с одной из самых популярных библиотек
              для создания пользовательских интерфейсов. Вы научитесь строить
              компоненты, управлять состоянием и работать с пропсами. Курс
              охватывает такие концепции, как JSX, хуки и маршрутизация, что
              позволит вам разрабатывать современные и масштабируемые
              веб-приложения.
            </p>
            <button className="homePage__subject-item-btn">Перейти</button>
          </div>
          <div className="homePage__subject-item">
            <h2 className="homePage__subject-item-name">TypeScript</h2>
            <p className="homePage__subject-item-desc">
              Данный курс научит вас использовать статическую типизацию в
              JavaScript для написания более безопасного и поддерживаемого кода.
              Вы освоите ключевые понятия, такие как типы, интерфейсы, обобщения
              и декораторы, а также интеграцию TypeScript с популярными
              фреймворками, такими как React и Node.js. Этот курс поможет вам
              писать чистый и надежный код, улучшая качество ваших
              веб-приложений.
            </p>
            <button className="homePage__subject-item-btn">Перейти</button>
          </div>
        </div>
      </div>
    </div>
  );
}
