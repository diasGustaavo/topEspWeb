let precoDolar = 0;
let precoReal = 0;

fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  .then(response => response.json())
  .then(data => {
    precoDolar = parseFloat(data["USDBRL"]["ask"]);
    precoReal = 1 / precoDolar
  })
  .catch(error => {
    console.error('Error fetching API:', error);
  });

// Get the button element by its ID
const button = document.getElementById('moedaButton');

let brlPrice = true
// Add a click event listener to the button
button.addEventListener('click', function() {
    console.log("button clicked!")
    brlPrice = !brlPrice
    
    // Get all the figcaption elements
    let figcaptions = document.getElementsByTagName("figcaption");

    // Loop through each figcaption and cut off text after "$" sign
    for (let i = 0; i < figcaptions.length; i++) {
        let figcaption = figcaptions[i];
        let index = figcaption.textContent.indexOf("$");

        if (index > -1) {
            let contentAfterDollar = parseFloat(figcaption.textContent.substring(index + 1));

            if (brlPrice) {
                console.log("entrou aqui talkey")
                figcaption.textContent = figcaption.textContent.substring(0, index + 1) + parseInt(contentAfterDollar * precoReal);
                figcaption.textContent = figcaption.textContent.replace(/R\$/g, "$");

            } else {
                console.log("entrou aqui companheiro")
                figcaption.textContent = figcaption.textContent.substring(0, index + 1) + parseInt(contentAfterDollar * precoDolar);
                figcaption.textContent = figcaption.textContent.replace(/\$/g, "R$");
            }
            console.log("Content after $: " + contentAfterDollar);
        }
    }
});
