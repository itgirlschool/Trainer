import React from "react";
import "./Profile.scss";
import Input from "../../Components/Profile/Input";
import SubjectList from "../SubjectList/SubjectList";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile__user">
        <div className="profile__user-info">
          <div className="avatar">
            <img
              src="src/assets/images/user-avatar.svg"
              alt="Аватарка пользователя"
            />
          </div>
          <div className="user-name">
            <p className="greetings">
              Добро пожаловать
              <img
                className="vector"
                src="src/assets/images/vector2.svg"
                alt="vector"
              />
            </p>
            <p className="username">Даша Чум</p>
          </div>
        </div>
      </div>
      <div className="profile__settings">
        <h1 className="profile__settings-title">Профиль</h1>
        <div className="profile__settings-icon">
          <div className="img">
            <img
              src="src/assets/images/default_img.svg"
              alt="Иконка по-умолчанию"
            />
          </div>
          <div className="info">
            <p>Изменить фото профиля</p>
            <button className="icon-btn">
              <img
                src="src/assets/images/change_profile_photo.svg"
                alt="Иконка для смены фото профиля"
              />
            </button>
          </div>
        </div>
        <div className="profile__settings-user">
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Фамилия" />
          <Input type="tel" placeholder="Номер телефона" />
          <Input type="email" placeholder="Электронная почта" />
          <Input type="password" placeholder="Пароль" />
          <Input type="password" placeholder="Повторите пароль" />
        </div>
        <button className="profile__btn">Сохранить изменения</button>
      </div>
    </div>
  );
}
