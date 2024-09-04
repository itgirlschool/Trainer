import "./AddCourseData.scss";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postCourseData from "../../Common/Admin/postCourseData";
import exit from "../../assets/images/exit-svgrepo-com 1.svg";
import { useNavigate } from "react-router-dom";

export default function AddCourseData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { courseName } = data;
    try {
      await postCourseData(courseName);
      reset();
      navigate(-1);
    } catch (err) {
      // setIsError(true);
    }
  };

  return (
    <div className="admin-addData__mobile">
      <div className="admin-addData__form">
        <button
          className="admin-addData__form_exitbutton"
          onClick={() => navigate(-1)}
        >
          <img className="admin-addData__form_exitimg" src={exit} alt="exit" />
          <span className="admin-addData__form_exittext">Назад</span>
        </button>

        <div className="admin-addData__form_title">
          <span>Добавить</span> новое направление
        </div>
        <div className="admin-addData__form_data">
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
      </div>
    </div>
  );
}
