import { DeleteIcon } from "./Icons";
import s from "./Order.module.css";

const Order = () => {
  return <div className={s.order}>
    <h2 className={s.orderNumber}>Orders #34562</h2>
    <div className={s.buttons}>
      <button className={`${s.btn} ${s.selected}`}>Dine In</button>
      <button className={s.btn}>To Go</button>
      <button className={s.btn}>Delivery</button>
    </div>
    {/* <div className={s.orderTable}> */}
    <div className={`${s.tableTitle} row`}>
      <div className={s.item}>Item</div>
      <div className={s.qty}>Qty</div>
      <div className={s.price}>Price</div>
    </div>
    <div className={'scroll'} style={{ flex: 1 }}><div className={`${s.orderList} `}>
      <OrderItem img="img-1" itemTitle="Spicy seasoned seafood noodles" price="2.29" quantity="2" totalItemPrice="4,58" />
      <OrderItem img="img-2" itemTitle="Salted Pasta with mushroom sauce" price="2.69" quantity="1" totalItemPrice="2.69" />
      <OrderItem img="img-6" itemTitle="Spicy instant noodle with special omelette" price="3.49" quantity="3" totalItemPrice="10,47" />
      <OrderItem img="img-5" itemTitle="Hot spicy fried rice with omelet" price="3.29" quantity="1" totalItemPrice="3.29" />
    </div></div>
    <div className={`${s.discountRow} row`}>
      <p className={s.discount}>Discount</p>
      <p className={s.discountPrice}>$0</p>
    </div>
    <div className={`${s.totalRow} row`}>
      <p className={s.subTotal}>Sub total</p>
      <p className={s.totalPrice}>$ 21,03</p>
    </div>
    {/* </div> */}
    <button type="submit" className={s.paymentBtn}>Continue to Payment</button>
  </div>
}

const OrderItem = ({ img, itemTitle, price, quantity, totalItemPrice }) => {
  return <div className={s.orderItem}>
    <div className={s.row}>
      <div className={s.flex1}>
        <img src={`${process.env.PUBLIC_URL}img/${img}.png`} alt="item image" className={s.itemImage} />
        <div className={`${s.column} ${"column"}`}>
          <h3 className={s.itemTitle}>{itemTitle}</h3>
          <p className={s.itemPrice}>$ {price}</p>
        </div>
      </div>
      <input type="number" min="1" max="90" placeholder="1" className={s.quantity} />
      <p className={s.totalItemPrice}>$ {totalItemPrice}</p>
    </div>
    <div className={`${s.row} ${s.noteRow}`}>
      <input type="text" placeholder="Order Note..." className={s.note} />
      <DeleteIcon />
    </div>
  </div>
}

export default Order;