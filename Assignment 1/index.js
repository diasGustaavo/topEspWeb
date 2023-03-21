function myFunction() {
  var firstNum = document.getElementById("fnumber").value;
  var secondNum = document.getElementById("snumber").value;
  var table = document.getElementById("myTable");

  // Primeira coluna
  table.rows[1].cells[0].textContent = `${firstNum} + ${secondNum}`;
  table.rows[2].cells[0].textContent = `${firstNum} * ${secondNum}`;
  table.rows[3].cells[0].textContent = `${firstNum} / ${secondNum}`;
  table.rows[4].cells[0].textContent = `${firstNum} % ${secondNum}`;

  // Segunda coluna
  table.rows[1].cells[1].textContent = `${parseInt(firstNum) + parseInt(secondNum)}`;
  table.rows[2].cells[1].textContent = `${parseInt(firstNum * secondNum)}`;
  table.rows[3].cells[1].textContent = `${parseInt(firstNum / secondNum)}`;
  table.rows[4].cells[1].textContent = `${parseInt(firstNum % secondNum)}`;
}