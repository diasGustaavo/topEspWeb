function myFunction() {
  let firstNum = document.getElementById("fnumber").value;

  if (firstNum <= 954.00) {
    var aumento = 0.15
  } else if (firstNum > 954.00 && firstNum <= 1903.98) {
    var aumento = 0.10
  } else if (firstNum > 1903.98 && firstNum <= 2826.65) {
    var aumento = 0.75
  } else {
    var aumento = 0.5
  }

  const myMain = document.querySelector("#myMain");
  const newParagraph1 = document.createElement("p");
  newParagraph1.textContent = `Salario antes do reajuste: ${firstNum} reais`;
  myMain.appendChild(newParagraph1);

  const newParagraph2 = document.createElement("p");
  newParagraph2.textContent = `Percentual aplicado: ${aumento * 100}%`;
  myMain.appendChild(newParagraph2);

  const newParagraph3 = document.createElement("p");
  newParagraph3.textContent = `Valor do aumento: ${aumento * firstNum} reais`;
  myMain.appendChild(newParagraph3);

  const newParagraph4 = document.createElement("p");
  newParagraph4.textContent = `Novo salario, apos o aumento: ${(aumento * firstNum) + parseInt(firstNum)} reais`;
  myMain.appendChild(newParagraph4);
}