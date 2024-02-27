import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
