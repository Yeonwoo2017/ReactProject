import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "홍길동",
  birthday: "980101",
  gender: "male",
  job: "programmer",
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;