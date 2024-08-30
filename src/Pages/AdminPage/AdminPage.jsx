import React, { useState } from "react";

import "./AdminPage.scss";
import exit from "../../assets/images/exit-svgrepo-com 1.svg";
import add from "../../assets/images/addCourse.svg";
import addgroup from "../../assets/images/create_group.svg";
import data from "./data.json";
import ModalWindowAdmin from "../../Components/ModalWindowAdmin/ModalWindowAdmin";

export default function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(null);

  const onHandleModalCourse = () => {
    setIsModalOpen(!isModalOpen);
    setTypeModal("course");
  };

  const copyToClipboard = async (e) => {
    const link = e.target.getAttribute("data-key");
    try {
      await navigator.clipboard.writeText(link);
      alert(link);
    } catch (err) {
      console.error("Ошибка при копировании текста:", err);
    }
  };

  return (
    <>
      {isModalOpen && <ModalWindowAdmin type={typeModal} />}
      <div className="admin-container">
        <div className="admin-container__header">
          <button className="admin-container__header_button">
            <img className="admin-exit__img" src={exit} alt="exit" />
            <span className="admin-exit__text">Выйти</span>
          </button>
          <button
            className="admin-container__header_button"
            onClick={onHandleModalCourse}
          >
            <img className="admin-exit__img" src={add} alt="add" />
            <span className="admin-exit__text">Добавить направление</span>
          </button>
        </div>
        <div className="admin-container__main">
          {data.map((item) => (
            <div className="admin-container__main_list">
              <div className="admin-container__course">
                <h2
                  key={item.moduleIdid}
                  className="admin-container__course_title"
                >
                  {item.moduleName}
                </h2>
                <button
                  data-key={item.moduleId}
                  className="admin-container__course_button"
                >
                  <img src={addgroup} alt="addgroup" />
                  <span>Добавить группу</span>
                </button>
              </div>
              {item.groups.length ? (
                <>
                  {item.groups.map((group) => (
                    <div key={group.id} className="admin-container__group">
                      <p className="admin-container__group_text">
                        {group.groupName}
                      </p>
                      <button
                        data-key={group.link}
                        onClick={copyToClipboard}
                        className="admin-container__group_button"
                      >
                        Скопировать ссылку
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <div className="admin-container__group">
                  <p className="admin-container__group_text">
                    Здесь пока нет групп
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
