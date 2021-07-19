import s from "../../styles/Sidebar2.module.css";
import { NavLink } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, LogoIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../Icons";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [, set] = useState(0);
  const forceUpdate = () => set((x) => x + 1);

  useEffect(() => {
    const t = setTimeout(forceUpdate, 100);
    return () => clearTimeout(t);
  }, []);

  const pathname = window.location.pathname;

  const isHome = pathname === "/home";
  const isDashboard = pathname === "/dashboard";
  const isSetting = pathname === "/setting";

  return (
    <aside>
      <div className={s.fixed}>
        <div className={s.sidebar}>
          <Item path="/home" className={s.morePadding} forceUpdate={forceUpdate} active={false} prev={isHome} component={LogoIcon} />
          <Item path="/home" forceUpdate={forceUpdate} active={isHome} component={HomeIcon} />
          <Item path="/dashboard" disabled forceUpdate={forceUpdate} active={false} next={isHome} prev={isDashboard} component={DiscountIcon} />
          <Item path="/dashboard" forceUpdate={forceUpdate} active={isDashboard} component={DashboardIcon} />
          <Item path="/dashboard" disabled forceUpdate={forceUpdate} active={false} next={isDashboard} component={MessageIcon} />
          <Item path="/setting" disabled forceUpdate={forceUpdate} active={false} prev={isSetting} component={NotificationIcon} />
          <Item path="/setting" forceUpdate={forceUpdate} active={isSetting} component={SettingIcon} />
        </div>
        <div className={s.logoutSection}>
          <div className={s.linkHolder}>
            <LogoutIcon />
          </div>
        </div>
      </div>
    </aside>
  );
};

const Item = ({ active, disabled, forceUpdate, component, path, prev, next, className: externalClass }) => {
  const TheIcon = component;
  const addClass = prev ? s.holderPrev : next ? s.holderNext : undefined;
  const className = active ? `${s.linkHolder} ${s.activeHolder}` : s.linkHolder;
  return (
    <div className={`${addClass ? `${className} ${addClass}` : className} ${externalClass ?? ""} ${disabled ? s.disabled : ""}`}>
      <NavLink
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
          forceUpdate();
        }}
        to={path}
        activeClassName={s.active}
      >
        <TheIcon selected={active} />
      </NavLink>
    </div>
  );
};

export default Sidebar;
