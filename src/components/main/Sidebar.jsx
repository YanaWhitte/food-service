import s from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, LogoIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../Icons"

const Sidebar = () => {
  return <aside>
    <div className={s.sidebar}>
      <div className={s.linkHolder}><NavLink to="/home" activeClassName={s.active}><LogoIcon /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/home" activeClassName={s.active}><HomeIcon selected /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/dashboard" activeClassName={s.active}><DiscountIcon /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/dashboard" activeClassName={s.active}><DashboardIcon /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/dashboard" activeClassName={s.active}><MessageIcon /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/setting" activeClassName={s.active}><NotificationIcon /></NavLink></div>
      <div className={s.linkHolder}><NavLink to="/setting" activeClassName={s.active}><SettingIcon /></NavLink></div>
      <div className={s.linkHolder}><LogoutIcon /></div>
    </div>
  </aside>
}

export default Sidebar;