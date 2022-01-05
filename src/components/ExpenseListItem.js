import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      Created at {moment(createdAt).format("MMMM Do, YYYY")}
      cost is {numeral(amount / 100).format("$0,0.00")}
    </p>
  </div>
);

export default ExpenseListItem;
