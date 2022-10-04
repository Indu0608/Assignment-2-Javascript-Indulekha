let item1Amt = 10;
let item2Amt = 12.78;
let item3Amt = 8.17;
let item4Amt = 3.99;
let item5Amt = 7.99;

let item1Qty = 0;
let item2Qty = 0;
let item3Qty = 0;
let item4Qty = 0;
let item5Qty = 0;

let subTotal = 0;
let tax = 0;
let total = 0;

function CalculateAmt() {

  document.getElementById("result").innerHTML = '';
  //Fetch Input amounts from table
  let item1Qty = document.getElementById("item1").value;
  let item2Qty = document.getElementById("item2").value;
  let item3Qty = document.getElementById("item3").value;
  let item4Qty = document.getElementById("item4").value;
  let item5Qty = document.getElementById("item5").value;

  //Take the total
  //let positiveNumRegex = /^[1-9][0-9]?$/;

  let myOutput = "";
  let totalAmt =
    item1Qty * item1Amt +
    item2Qty * item2Amt +
    item3Qty * item3Amt +
    item4Qty * item4Amt +
    item4Qty * item4Amt;

    subTotal = totalAmt;
  tax = totalAmt * 0.13;
  total = subTotal + tax;
if(total > 10){
    myOutput += `Sub total:$${subTotal.toFixed(2)}<br> GST: $${tax.toFixed(2)} <br> Total: $${total.toFixed(2)}`;
    document.getElementById("result").innerHTML = myOutput;
    document.getElementById('secondScreen').setAttribute('class', '');
}
else{
    document.getElementById("result").innerHTML = "The minimum purchase amount should be 10$"
}
  
  return false;
}

function ValidateUserInfo() {
  let customerName = document.getElementById("CustName").value;
  let customerPhone = document.getElementById("CustPhone").value;
  let customerCredit = document.getElementById("CustCredit").value;
  let customerCrMnth = document.getElementById("CustCrMnth").value;
  let customerCrYr = document.getElementById("CustCrYear").value;

  console.log(customerName);

  customerName = customerName.trim();
  customerPhone = customerPhone.trim();
  customerCredit = customerCredit.trim();
  customerCrMnth = customerCrMnth.trim();
  customerCrYr = customerCrYr.trim();

  let errors = "";
  document.getElementById("error").innerHTML = "";
  let positiveNumRegex = /^[\d]{10}$/;
  let cardRegEx = /^[\d]{4}[\-][\d]{4}[\-][\d]{4}[\-][\d]{4}$/;
  let expMonthRegEx = /^[0-9]{2}$/;
  let expYearRegEx = /^[\d]{4}$/;

  if (customerName == "") {
    errors += `Please enter your name <br>`;
  }
  if (!positiveNumRegex.test(customerPhone)) {
    errors += "Please enter a valid phone number <br>";
  }
  if (!cardRegEx.test(customerCredit)) {
    errors += "Please enter a valid Credit card number <br>";
  }
  if (!expMonthRegEx.test(customerCrMnth)) {
    errors += "Please enter a valid expiry month <br>";
  }
  if (!(expYearRegEx.test(customerCrYr) && customerCrYr > "2021")) {
    errors += "Please enter a valid expiry year <br>";
  }
  if (errors != "") {
    document.getElementById("error").innerHTML = errors;
  } else {
    document.getElementById('invoice').setAttribute('class', '');
    GenerateInvoice(); 
  }
  return false;
}

function GenerateInvoice() {
    document.getElementById("CustomerName").innerHTML = document.getElementById("CustName").value;
    document.getElementById("CustomerPhone").innerHTML = document.getElementById("CustPhone").value;
    document.getElementById("subtotal").innerHTML = `$${subTotal.toFixed(2)}`;
    document.getElementById("gst").innerHTML = `$${tax.toFixed(2)}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
}