import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, LogoIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../Icons"

const Sidebar = () => {
  return <aside>
    <NavLink to="/home" id="id1" activeClassName={s.active}><LogoIcon /></NavLink>
    <NavLink to="/home" id="id2" activeClassName={s.active}><HomeIcon selected /></NavLink>
    <NavLink to="/dashboard" id="id3" activeClassName={s.active}><DiscountIcon /></NavLink>
    <NavLink to="/dashboard" id="id4" activeClassName={s.active}><DashboardIcon /></NavLink>
    <NavLink to="/dashboard" id="id5" activeClassName={s.active}><MessageIcon /></NavLink>
    <NavLink to="/setting" id="id6" activeClassName={s.active}><NotificationIcon /></NavLink>
    <NavLink to="/setting" id="id7" activeClassName={s.active}><SettingIcon /></NavLink>
    <LogoutIcon />
  </aside>
}

export default Sidebar;