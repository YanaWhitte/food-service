import s from "../styles/Header.module.css";

const Header = ({ title, date, withSearch }) => {
  return <header className={s.header}>
    <div className="column">
      <h1 className={s.title}>{title}</h1>
      <p className={s.date}>{date}</p>
    </div>
    {withSearch && <div className={s.search}>
      <img src={process.env.PUBLIC_URL + "/icons/search.svg"} alt="search" className={s.searchIcon} />
      <input type="text" placeholder="Search for food, coffe, etc.." />
    </div>}
  </header>
}

export default Header;