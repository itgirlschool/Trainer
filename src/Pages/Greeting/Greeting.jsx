import React from "react";
import cat from "../../assets/images/cat_greeting.svg";
import paw from "../../assets/images/paw.svg";
import titleIcon from "../../assets/images/vector1.svg";
import arrow from "../../assets/images/arrow_07.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import "./Greeting.scss";

export default function Greeting() {
  return (
    <>
      <section className="greeting__outer">
        <div className="content_wrapper">
          <div className="content_title">
            <div className="content_title_wrapper">
              <h3 className="greeting__text_black bl1">
                Добро пожаловать
                <img src={titleIcon} alt="icon" />
              </h3>
              <p className="greeting__text_pink">
                в наши удивительные тренажеры
              </p>
              <p className="greeting__text_black bl2">по программированию!</p>
            </div>
          </div>
          <div className="content_body">
            <div className="wrap_box_first">
              {" "}
              <div className="box box_first">
                Мы рады приветствовать тебя в нашем виртуальном мире, где ты
                сможешь познакомиться с языками программирования. Это приложение
                поможет тебе погрузиться в разработку и попробовать себя в
                качестве разработчика.
              </div>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="box box_second">
              Не волнуйся, если у тебя нет предварительного опыта в
              программировании. Наш тренажер #ITGIRLS специально разработан для
              обучения программированию разработчиков, только начинающих свой
              путь. Мы будем тебя поддерживать на каждом шагу, предоставляя
              пошаговые инструкции и полезные подсказки.
            </div>
          </div>
          <div className="btn_wrapper">
            <p>Начать</p>
            <img src={arrowRight} alt="arrow" />
          </div>
          <div className="content_image"></div>
        </div>
        <div className="images_wrapper">
          <img src={cat} alt="cat" />
        </div>
      </section>
      <div className="greeting__wrapper_paw">
        <img src={paw} alt="paw"/>
      </div>
    </>
  );
}
