import "./Header.scss";

import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/icons/search.svg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" alt="Brainflix logo" src={logo}></img>
      <img
        className="header__logo header__logo--tablet"
        alt="Brainflix logo"
        src={logo}
      ></img>
      <div className="header__container">
        <div className="search">
          <img
            className="search__icon"
            alt="search icon"
            src={searchIcon}
          ></img>
          <input className="search__input" placeholder="Search"></input>
        </div>
        <button type="submit" className="button button--tablet">
          <img
            className="button__icon"
            alt="upload icon"
            src={uploadIcon}
          ></img>
          upload
        </button>
        <img className="header__avatar" alt="avatar" src={avatar}></img>
      </div>
      <button type="submit" className="button">
        <img className="button__icon" alt="upload icon" src={uploadIcon}></img>
        upload
      </button>
    </section>
  );
}
export default Header;
