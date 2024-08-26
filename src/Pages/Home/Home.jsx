import vector from "../../assets/images/vector1.svg";
import data from "../../front-end.js";
import "./Home.scss";

export default function Home() {
  const apps = data.apps;

  return (
    <div className="homePage">
      <div className="homePage__container">
        <div className="homePage__title">
          <h1>
            Куда мы перейдем?
            <img src={vector} alt="vector" />
          </h1>
        </div>
        <div className="homePage__subject-list">
          {apps.map((item, index) => (
            <div key={index} className="homePage__subject-item">
              <h2 className="homePage__subject-item-name">{item.name}</h2>
              <p className="homePage__subject-item-desc">{item.description}</p>
              <div className="homePage__subject-item-image">
                <img src={item.image} alt="cat" />
              </div>
              <button className="homePage__subject-item-btn">Перейти</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
