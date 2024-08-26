import vector from "../../assets/images/vector1.svg";
import data from "../../front-end.js";
import "./Subjects.scss";

export default function Subjects() {
  const courses = data.courses;
  return (
    <div className="subjectsPage">
      <div className="subjectsPage__container">
        <div className="subjectsPage__title">
          <h1>
            Приветствуем тебя в <span>ITGIRLS!</span>
            <img src={vector} alt="vector" />
          </h1>
        </div>
        <div className="subjectsPage__subject-list">
          {courses.map((item, index) => (
            <div key={index} className="subjectsPage__subject-item">
              <h2 className="subjectsPage__subject-item-name">{item.title}</h2>
              <p className="subjectsPage__subject-item-desc">
                {item.description}
              </p>
              <button className="subjectsPage__subject-item-btn">
                Перейти
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
