import { useState } from "react";
import pausedModule from "../../assets/images/subjectCardPausedModule.svg";
import downloadStatus from "../../assets/images/downloadStatus.svg";
import "./SubjectCard.scss";

export default function SubjectCard({data}) {
  return (
    <div className="subjectCard">
      <p className="subjectCard__module">Модуль {data}</p>
      <h2 className="subjectCard__name">Переменные и типы данных</h2>
      <div className="subjectCard__progress">
        <p>Просмотрено:</p>{" "}
        <span className="subjectCard__progress-status">0%</span>
      </div>
      <div className="subjectCard__rating">
        <p>Оценка:</p>
      </div>
      <div className="subjectCard__status">
        <img src={pausedModule} alt="moduleStatus" />
      </div>
    </div>
  );
}
