import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, LogoIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../Icons"

const Sidebar = () => {
  return <aside>
    <LogoIcon />
    <NavLink to="/home" activeClassName={s.active}><HomeIcon selected /></NavLink>
    <DiscountIcon />
    <NavLink to="/dashboard" activeClassName={s.active}><DashboardIcon /></NavLink>
    <MessageIcon />
    <NotificationIcon />
    <NavLink to="/setting" activeClassName={s.active}><SettingIcon /></NavLink>
    <LogoutIcon />
  </aside>
}

export default Sidebar;