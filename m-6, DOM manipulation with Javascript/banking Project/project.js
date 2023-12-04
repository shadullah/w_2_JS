function handleDeposit() {
  var inputVal = document.getElementById("deposit-input").value;
  var convertInput = getConvertval("deposit-input", "value");

  var depositAmount = document.getElementById("deposit-amount").innerText;
  var convertAmount = getConvertval("deposit-amount", "innerText");

  var sum = convertInput + convertAmount;
  //   var sum = parseFloat(inputVal) + parseFloat(depositAmount);
  //   document.getElementById("deposit-amount").innerText = sum;
  setInnerText("deposit-amount", sum);

  var total = document.getElementById("total-amount").innerText;
  var cnverttl = getConvertval("total-amount", "innerText");

  var finalTtl = convertInput + cnverttl;
  //   var finalTtl = parseFloat(total) + sum;
  setInnerText("total-amount", finalTtl);

  document.getElementById("deposit-input").value = "";
}

function handleWithdraw() {
  var InptWithdrw = document.getElementById("withdraw-input").value;
  var withdwAM = document.getElementById("withdraw-amount").innerText;
  var withdrawSum = parseFloat(InptWithdrw) + parseFloat(withdwAM);
  //   document.getElementById("withdraw-amount").innerText = withdrawSum;
  setInnerText("withdraw-amount", withdrawSum);
  var total = document.getElementById("total-amount").innerText;
  var finalttl = total - withdrawSum;
  setInnerText("total-amount", finalttl);
  document.getElementById("withdraw-input").value = "";
}

function getConvertval(id, element) {
  if (element == "innerText") {
    var value = document.getElementById(id).innerText;
    return parseFloat(value);
  } else {
    var value = document.getElementById(id).value;
    return parseFloat(value);
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
