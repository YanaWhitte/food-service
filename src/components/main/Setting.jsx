import s from "../../styles/Setting.module.css";
import SettingsList from "../SettingsList";
import ProductManagement from "../ProductManagement";

const Setting = () => {
  return <div className={s.setting}>
    <h1 className={s.title}>Settings</h1>
    <div className={s.grid}>
      <div><SettingsList /></div>
      <div><ProductManagement /></div>
    </div>
  </div>
}

export default Setting;