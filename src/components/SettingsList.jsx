import s from "../styles/SettingsList.module.css";
import { AppereanceIcon, RestaurantIcon, ManagementIcon, NotificationsIcon, SecurityIcon, AboutUsIcon } from "./Icons";

const SettingsList = () => {
  return <div className={s.settingsList}>
    <SettingsItem icon={<AppereanceIcon />} title="Appereance" description="Dark and Light mode, Font size" />
    <SettingsItem icon={<RestaurantIcon />} title="Your Restaurant" description="Dark and Light mode, Font size" />
    <SettingsItem icon={<ManagementIcon />} title="Products Management" description="Manage your product, pricing, etc" activeClass />
    <SettingsItem icon={<NotificationsIcon />} title="Notifications" description="Customize your notifications" />
    <SettingsItem icon={<SecurityIcon />} title="Security" description="Configure Password, PIN, etc" />
    <SettingsItem icon={<AppereanceIcon />} title="Appereance" description="Dark and Light mode, Font size" />
    <SettingsItem icon={<AboutUsIcon />} title="About Us" description="Find out more about Posly" />
  </div>
}

const SettingsItem = ({ icon, title, description, activeClass }) => {
  return <div className={`${s.settingsItem} ${activeClass ? s.active : ""}`}>
    {icon}
    <div className={s.titleRow}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </div>
  </div>
}

export default SettingsList;