import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li
        className={transaction.amount < 0 ? "minus" : "plus"}
        key={transaction.id}
      >
        {transaction.text}{" "}
        <span>
          {" "}
          {sign}${Math.abs(transaction.amount)}{" "}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
