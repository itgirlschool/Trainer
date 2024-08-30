import "./ModalWindowAdmin.scss";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postData from "../../Common/Admin/postData";

export default function ModalWindowAdmin({ type, onClose }) {

    const group=['группы', "groupName", "группу"];
    const course=['курса', "courseName", "курс"];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   const onSubmit = async (data) => {
  //     const { groupName, courseName } = data;
  //     try {
  //       const response = await postData(groupName, courseName);
  //       setLink(response.data.link);
  //       setIsLinkGotten(true);
  //       reset();
  //     } catch (err) {
  //       setIsLinkGotten(false);
  //       setIsError(true);
  //     }
  //   };

  return (
    <div className="admin-modal" onClick={() => onClose(false)}>
      <div
        className="admin-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-modal__form">
          <div className="admin-modal__form_title">
            <span>Создание</span> ссылки для доступа в приложение
          </div>
          <div className="admin-modal__form_data">
            <form onSubmit={handleSubmit()}>
              <input
                type="text"
                placeholder="Наименование группы"
                {...register("groupName", {
                  required: "Введите наименование группы",
                  pattern: {
                    value: /[a-zA-Zа-яёЁА-Я0-9]+$/,
                    message: "Наименование должно содержать буквы и цифры",
                  },
                })}
              />
              {errors.groupName && (
                <p className="admin-error">{errors.groupName.message}</p>
              )}
              <button type="submit">Создать ссылку</button>
            </form>
          </div>
        </div>
      </div>
      <div className="admin-modal__overlay"></div>
    </div>
  );
}
