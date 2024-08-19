import SubjectCard from "../../Components/SubjectCard/SubjectCard";
import progressBar from "../../assets/images/subjectListProgressBar.svg";
import cat from "../../assets/images/subjectListCat.svg";
import "./subjectList.scss";

export default function SubjectList() {
  const subjects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="subjectList">
      <div className="subjectList__container">
        <div className="subjectList__subject">
          <div className="subjectList__subject-info">
            <h1 className="subjectList__subject-name">Основы JavaScript</h1>
            <div className="subjectList__subject-overallProgress">
              <div className="subjectList__subject-overallProgress-text">
                <p>Пройдено:</p> <span>0%</span>
              </div>
              <div className="subjectList__subject-overallProgress-rating">
                <p>Средняя оценка:</p>
              </div>
            </div>
            <div className="subjectList__subject-progressBar">
              <img src={progressBar} alt="progressBar" />
            </div>
          </div>
          <div className="subjectList__subject-image">
            <img src={cat} alt="cat" />
          </div>
        </div>
        <div className="subjectList__themes">
          {subjects.map((item, index) => (
            <SubjectCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
