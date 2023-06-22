import React, { useState } from 'react';

const PizzaStore = () => {
  const [totalBill, setTotalBill] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    const sizeRadios = document.getElementsByName('size');
    const withRadios = document.getElementsByName('with');
    const deepPanCheckbox = document.getElementById('ch');
    const homeDeliveryCheckbox = document.getElementById('ch1');

    if (sizeRadios[0].checked) total += 99;
    if (sizeRadios[1].checked) total += 199;
    if (sizeRadios[2].checked) total += 299;
    if (deepPanCheckbox.checked) total += 20;
    if (withRadios[0].checked) total += 15;
    if (withRadios[1].checked) total += 10;
    if (withRadios[2].checked) total += 30;
    if (withRadios[3].checked) total += 20;
    if (homeDeliveryCheckbox.checked) total += 25;

    setTotalBill(total);
  };

  return (
    <div className="container">
      <h2>PIZZ STORE</h2>
      <input type="radio" id="small" name="size" /> Small ₹99<br />
      <input type="radio" id="medium" name="size" /> Medium ₹199<br />
      <input type="radio" id="large" name="size" /> Large ₹299<br /><br />
      <input type="checkbox" id="ch" /> <b>For deep pan ₹20</b><br /><br />
      <label><b>Extra toppings:</b></label><br /><br />
      <input type="radio" id="mushrooms" name="with" /> Mushrooms ₹15<br />
      <input type="radio" id="olives" name="with" /> Olives ₹10<br />
      <input type="radio" id="fingernail" name="with" /> Fingernail ₹30<br />
      <input type="radio" id="spicyBeef" name="with" /> Spicy beef ₹20<br /><br />
      <input type="checkbox" id="ch1" /> <b>For home delivery ₹25</b><br /><br />
      <input type="button" onClick={calculateTotal} value="ORDER NOW" /><br /><br />
      <label><b>Total Bill:</b></label>
      <input value={totalBill} readOnly />
    </div>
  );
};

export default PizzaStore;
