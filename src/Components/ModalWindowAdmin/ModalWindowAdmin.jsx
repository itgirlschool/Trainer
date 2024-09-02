import "./ModalWindowAdmin.scss";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postCourseData from "../../Common/Admin/postCourseData";
import postGroupData from "../../Common/Admin/postGroupData";

import close from "../../assets/images/burger_close_icon.svg";

export default function ModalWindowAdmin({ type, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { groupName, courseName } = data;
    if (type === "group") {
      try {
        await postGroupData(groupName);
        reset();
        onClose(false);
      } catch (err) {
        // setIsError(true);
      }
    } else if (type === "course") {
      try {
        await postCourseData(courseName);
        reset();
        onClose(false);
      } catch (err) {
        // setIsError(true);
      }
    }
  };

  return (
    <div className="admin-modal" onClick={() => onClose(false)}>
      <div
        className="admin-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-modal__form">
          <button
            className="admin-modal__form_exitbutton"
            onClick={() => onClose(false)}
          >
            <img
              className="admin-modal__form_exitimg"
              src={close}
              alt="close"
            />
            <span className="admin-modal__form_exittext">Закрыть</span>
          </button>
          {type === "group" ? (
            <>
              {" "}
              <div className="admin-modal__form_title">
                <span>Добавить</span> новую группу
              </div>
              <div className="admin-modal__form_data">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                  <button type="submit">Добавить</button>
                </form>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="admin-modal__form_title">
                <span>Добавить</span> новое направление
              </div>
              <div className="admin-modal__form_data">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Наименование направления"
                    {...register("courseName", {
                      required: "Введите наименование направления",
                      pattern: {
                        value: /[a-zA-Zа-яёЁА-Я0-9]+$/,
                        message: "Наименование должно содержать буквы и цифры",
                      },
                    })}
                  />
                  {errors.courseName && (
                    <p className="admin-error">{errors.courseName.message}</p>
                  )}
                  <button type="submit">Добавить</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
