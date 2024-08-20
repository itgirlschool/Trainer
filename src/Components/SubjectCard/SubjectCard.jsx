import { useState } from "react";
import pausedModule from "../../assets/images/subjectCardPausedModule.svg";
import downloadStatus from "../../assets/images/downloadStatus.svg";
import "./SubjectCard.scss";

export default function SubjectCard({data}) {
  return (
    <div className="subjectCard">
      <p className="subjectCard__module">Модуль {data.id}</p>
      <h2 className="subjectCard__name">{data.name}</h2>
      <div className="subjectCard__progress">
        <p>Просмотрено:</p>{" "}
        <span className="subjectCard__progress-status">{data.progress}%</span>
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
