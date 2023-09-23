import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  // eslint-disable-next-line
  // console.log(order);
  if (!order) {
    return <p>Loading...</p>;
  }
  const { name, address, id, items } = order;
  function calculateTotalPrice() {
    if (!items) {
      return 0;
    }

    return items.reduce(
      (total, item) => total + item.item.price * item.quantity,
      0
    );
  }

  const totalPrice = calculateTotalPrice().toFixed(2);

  return (
    <div className={styles.container}>
      <h2>Thank you for your order!!</h2>
      <hr className={styles.hr} />
      <p className={styles.customerDetails}>Customer&apos;s Name: {name}</p>
      <p className={styles.customerDetails}>
        Customer&apos;s Address: {address}
      </p>
      <hr className={styles.hr} />
      <p>Items Ordered:</p>
      <ul>
        <hr className={styles.hr} />
        {items.map((item) => (
          <li key={item.item.id}>
            <p>
              <strong className={styles.itemsList}>Menu Item:</strong>{" "}
              {item.item.name}
            </p>
            <p>
              <strong className={styles.itemsList}>Quantity:</strong>{" "}
              {item.quantity}
            </p>
            <p>
              <strong className={styles.itemsList}>Price:</strong> $
              {item.item.price}
            </p>
            <hr className={styles.hr} />
          </li>
        ))}
      </ul>

      <p className={styles.subTotal}>Subtotal: ${totalPrice}</p>
      <hr className={styles.hr} />
      <p className={styles.orderId}>Order ID: {id}</p>
    </div>
  );
}
export default OrderConfirmation;
