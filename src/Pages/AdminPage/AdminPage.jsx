import React, { useState, useEffect } from "react";

import "./AdminPage.scss";
import exit from "../../assets/images/exit-svgrepo-com 1.svg";
import copy from "../../assets/images/copy.svg";
import add from "../../assets/images/addCourse.svg";
import addgroup from "../../assets/images/create_group.svg";
import data from "./data.json";
import ModalWindowAdmin from "../../Components/ModalWindowAdmin/ModalWindowAdmin";
import { useNavigate } from "react-router-dom";
import { getCourse } from "../../Common/Admin/postGroupData";

export default function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(null);
  const screenWidth = window.screen.width;
  const [isMobile, setIsMobile] = useState(screenWidth);

  const navigate = useNavigate();

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.screen.width);
    };
  }, []);

  const onHandleModalCourse = () => {
    if (isMobile <= 530) {
      navigate("/addnewcourse");
    } else if (isMobile > 530) {
      setIsModalOpen(!isModalOpen);
      setTypeModal("course");
      document.body.style.overflow = "hidden";
    }
  };

  const onHandleModalGroup = (e) => {
    const courseChosen = e.currentTarget.getAttribute("data-key");
    getCourse(courseChosen);
    if (isMobile <= 530) {
      navigate("/addnewgroup");
    } else if (isMobile > 530) {
      setIsModalOpen(!isModalOpen);
      setTypeModal("group");
      document.body.style.overflow = "hidden";
    }
  };

  const onHandleModal = (value) => {
    setIsModalOpen(value);
  };

  const copyToClipboard = async (e) => {
    const link = e.currentTarget.getAttribute("data-key");
    try {
      await navigator.clipboard.writeText(link);
      alert(link);
    } catch (err) {
      console.error("Ошибка при копировании текста:", err);
    }
  };

  return (
    <>
      {isModalOpen && (
        <ModalWindowAdmin type={typeModal} onClose={onHandleModal} />
      )}
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
              <div className="admin-container__course" key={item.id}>
                <p className="admin-container__course_title">
                  {item.moduleName}
                </p>
                <button
                  data-key={item.moduleName}
                  onClick={onHandleModalGroup}
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
                      {isMobile > 530 ? (
                        <button
                          data-key={group.link}
                          onClick={copyToClipboard}
                          className="admin-container__group_button"
                        >
                          Скопировать ссылку
                        </button>
                      ) : (
                        <button
                          data-key={group.link}
                          onClick={copyToClipboard}
                          className="admin-container__group_buttonmobile"
                        >
                          <img src={copy} alt="copy" />
                        </button>
                      )}
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
