import "./AddCourseData.scss";

import React from "react";
import { useForm } from "react-hook-form";
import postGroupData from "../../Common/Admin/postGroupData";

import exit from "../../assets/images/exit-svgrepo-com 1.svg";
import { useNavigate } from "react-router-dom";

export default function AddGroupData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { groupName } = data;
    try {
      await postGroupData(groupName);
      reset();
    } catch (err) {
      console.log(err);
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
          <span>Добавить</span> новую группу
        </div>
        <div className="admin-addData__form_data">
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
      </div>
    </div>
  );
}
