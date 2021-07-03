import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, LogoIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../Icons"

const Sidebar = () => {
  return <aside>
    <NavLink to="/home" activeClassName={s.active}><LogoIcon /></NavLink>
    <NavLink to="/home" activeClassName={s.active}><HomeIcon selected /></NavLink>
    <NavLink to="/dashboard" activeClassName={s.active}><DiscountIcon /></NavLink>
    <NavLink to="/dashboard" activeClassName={s.active}><DashboardIcon /></NavLink>
    <NavLink to="/dashboard" activeClassName={s.active}><MessageIcon /></NavLink>
    <NavLink to="/setting" activeClassName={s.active}><NotificationIcon /></NavLink>
    <NavLink to="/setting" activeClassName={s.active}><SettingIcon /></NavLink>
    <LogoutIcon />
  </aside>
}

export default Sidebar;