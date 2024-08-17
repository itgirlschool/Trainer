import burger_icon from "../../../assets/images/burger_icon.svg"
import burger_close_icon from "../../../assets/images/burger_close_icon.svg"
import "./MenuButton.scss";

export const MenuButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu-button
        ${isActive === true ? "active" : ""}
        ${isActive === false ? "unactive" : ""}
      `}
    >
      {isActive ? (<img src={burger_close_icon} alt="burger_close_icon" />) : (<img src={burger_icon} alt="burger_icon" />)}
    </button>
  );
};