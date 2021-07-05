import s from "../styles/Dashboard.module.css";
import TitleWithButton from "./TitleWithButton";

const OrderReportTable = () => {
  return <div className={s.orderReportTable}>
    <TitleWithButton title="Order Report" icon="optionIcon" buttonName="Filter Order" />
    <div className={s.titleTableRow}>
      <p className={s.column1}>Customer</p>
      <p className={s.column2}>Menu</p>
      <p className={s.column3}>Total Payment</p>
      <p className={s.column4}>Status</p>
    </div>
    <div className={`${s.tableHolder}`}>
      <TableRow avatar="1" userName="Eren Jaegar" menu="Spicy seasoned seafood noodles"
        totalPayment="$125" status="Completed" statusClass={s.completed} />
      <TableRow avatar="2" userName="Reiner Braunn" menu="Salted Pasta with mushroom sauce"
        totalPayment="$145" status="Preparing" statusClass={s.preparing} />
      <TableRow avatar="3" userName="Levi Ackerman" menu="Beef dumpling in hot and sour soup"
        totalPayment="$105" status="Pending" statusClass={s.pending} />
      <TableRow avatar="4" userName="Historia Reiss" menu="Hot spicy fried rice with omelet"
        totalPayment="$45" status="Completed" statusClass={s.completed} />
      <TableRow avatar="5" userName="Hanji Zoe" menu="Hot spicy fried rice with omelet"
        totalPayment="$245" status="Completed" statusClass={s.completed} />
      <TableRow avatar="6" userName="Armin Arlert" menu="Hot spicy fried rice with omelet"
        totalPayment="$435" status="Completed" statusClass={s.completed} />
    </div>
  </div>
}

const TableRow = ({ avatar, userName, menu, totalPayment, status, statusClass }) => {
  return <div className={s.tableRow}>
    <div className={s.column1}>
      <img src={process.env.PUBLIC_URL + `/icons/avatar-${avatar}.svg`} alt="avatar" />
      <p className={s.userName}>{userName}</p>
    </div>
    <div className={`${s.column2} ${s.menu}`}>{menu}</div>
    <div className={s.column3}>{totalPayment}</div>
    <div className={`${s.column4}`}>
      <div className={`${s.column4} ${s.status} ${statusClass}`}>{status}</div>
    </div>
  </div>
}

export default OrderReportTable;