import s from "../styles/Header.module.css";

const Header = ({ title, withSearch }) => {
  const date = new Date();
  const getMonth = () => new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date());
  const getDay = () => new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

  return <header className={s.header}>
    <div className="column">
      <h1 className={s.title}>{title}</h1>
      <div className={s.date}>
        <span>{getDay()}, </span>
        <span>{date.getDate()} </span>
        <span>{getMonth()} </span>
        <span>{date.getFullYear()}</span>
      </div>
    </div>
    {withSearch && <label className={s.search}>
      <img src={process.env.PUBLIC_URL + "/icons/search.svg"} alt="search" className={s.searchIcon} />
      <input type="text" placeholder="Search for food, coffe, etc.." />
    </label>}
  </header>
}

export default Header;