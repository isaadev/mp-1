let result = document.getElementById("result");

function getVals() {
  let n1 = Number(document.getElementById("first-num").value);
  let n2 = Number(document.getElementById("second-num").value);
  return [n1, n2];
}

function addition() {
  let n1 = getVals()[0];
  let n2 = getVals()[1];
  sum = n1 + n2;

  checkNegative(sum);
}

function subtraction() {
  let n1 = getVals()[0];
  let n2 = getVals()[1];
  diff = n1 - n2;
  checkNegative(diff);
}

function division() {
  let n1 = getVals()[0];
  let n2 = getVals()[1];
  res = n1 / n2;
  checkNegative(res);
}

function multiplication() {
  let n1 = getVals()[0];
  let n2 = getVals()[1];
  res = n1 * n2;
  checkNegative(res);
}

function power() {
  let n1 = getVals()[0];
  let n2 = getVals()[1];

  final = 1;
  
  
  for (let i = 0; i < n2; i++) {
    final = final * n1;
  }

  if (n2 < 0) {
    final = 1 / final;
  }
  
  checkNegative(final);
}

function checkNegative(res) {
  result.innerHTML = String(res);
  result.style.color = res < 0 ? "#FF0000" : "#FFFFFF";
}

function clearFields() {
  document.getElementById("first-num").value = "";
  document.getElementById("second-num").value = "";
  result.innerHTML = "";
}
