import { useState } from "react";
import pausedModule from "../../assets/images/subjectCardPausedModule.svg";
import downloadStatus from "../../assets/images/downloadStatus.svg";
import "./SubjectCard.scss";

export default function SubjectCard() {
  const [moduleProgress, setModuleProgress] = useState(0);
  const [homeworkStatus, setHomeworkStatus] = useState("");
  const [moduleRating, setModuleRating] = useState(0);
  const [isModulePassed, setIsModulePassed] = useState(false);
  return (
    <div className="subjectCard">
      <p className="subjectCard__module">Модуль 1</p>
      <h2 className="subjectCard__name">Переменные и типы данных</h2>
      <div className="subjectCard__progress">
        <p>Просмотрено:</p>{" "}
        <span className="subjectCard__progress-status">0%</span>
      </div>
      <div className="subjectCard__homework">
        <p>Домашняя работа:</p>{" "}
        <div className="subjectCard__homework-status">
          <span className="subjectCard__homework-status-text">загрузить</span>
          <img src={downloadStatus} alt="homeworkStatus" />
        </div>
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
