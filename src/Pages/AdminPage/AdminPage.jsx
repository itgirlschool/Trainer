import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./AdminPage.scss";
import cat from "../../assets/images/cat_calculator.svg";
import copy from "../../assets/images/copy.svg";
import exit from "../../assets/images/exit-svgrepo-com 1.svg";

export default function AdminPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [link, setLink] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert(`Текст скопирован: "${link}"`);
    } catch (err) {
      console.error("Ошибка при копировании текста:", err);
    }
  };

  const [isLinkGotten, setIsLinkGotten] = useState(true);
  return (
    <div className="admin-container">
      <div>
        <button className="admin-exit">
          <img className="admin-exit__img" src={exit} alt="exit" />
          <span className="admin-exit__text">Выйти</span>
        </button>
      </div>
      <div className="admin">
        <div className="admin__image">
          <img src={cat} alt="admin" />
        </div>
        <div className="admin__form">
          <div className="admin__form-title">
            <span>Создание</span> ссылки для доступа к тренажерам
          </div>
          <div className="admin__form-data">
            <form onSubmit={handleSubmit()}>
              <input
                type="text"
                placeholder="Наименование группы"
                {...register("groupName", {
                  required: "Введите наименование группы",
                })}
              />
              {errors.groupName && (
                <p className="admin-error">{errors.groupName.message}</p>
              )}

              <input
                type="text"
                placeholder="Наименование курса"
                {...register("courseName", {
                  required: "Введите наименование курса",
                })}
              />
              {errors.courseName && (
                <p className="admin-error">{errors.courseName.message}</p>
              )}
              <button type="submit">Создать ссылку</button>
            </form>
          </div>
        </div>
      </div>
      {isLinkGotten && (
        <div className="admin-answer__container">
          <p className="admin-answer__link">{link}</p>
          <button className="admin-answer__button" onClick={copyToClipboard}>
            <img className="admin-answer__img" src={copy} alt="copy" />
            <span className="admin-answer__tip">Копировать ссылку</span>
          </button>
        </div>
      )}
    </div>
  );
}
