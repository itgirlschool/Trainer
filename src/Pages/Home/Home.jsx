import vector from "../../assets/images/vector1.svg";
import data from "../../front-end.js";
import "./Home.scss";

export default function Home() {
  const courses = data.courses;
  
  return (
    <div className="homePage">
      <div className="homePage__container">
        <div className="homePage__title">
          <h1>
            Приветствуем тебя в <span>ITGIRLS!</span>
            <img src={vector} alt="vector" />
          </h1>
        </div>
        <div className="homePage__subject-list">
          {courses.map((item, index) => (
            <div key={index} className="homePage__subject-item">
              <h2 className="homePage__subject-item-name">{item.title}</h2>
              <p className="homePage__subject-item-desc">{item.description}</p>
              <button className="homePage__subject-item-btn">Перейти</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
