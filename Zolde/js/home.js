var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 3000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
	if (controle.className == 'pause') {
		clearInterval(timer);
		controle.className = 'play';
	} else {
		timer = setInterval(trocaBanner, 4000);
		controle.className = 'pause';
	}

	return false;
};

$('.novidades').addClass('painel-compacto');

$('.novidades button').click(function() {
  $('.novidades').removeClass('painel-compacto');
});

$('.mais-vendidos').addClass('painel-compacto');

$('.mais-vendidos button').click(function() {
  $('.mais-vendidos').removeClass('painel-compacto');
});

// Define the product list with their corresponding prices
var cars1 = [
	{name: "2003 Chevrolet SSR", price: 59900},
	{name: "1973 Volkswagen Thing", price: 49900},
	{name: "1974 Vanguard-Sebring CitiCar", price: 39900},
	{name: "1973 Reliant Robin", price: 199900},
	{name: "2013 Pontiac Aztek", price: 13900},
	{name: "2011 Nissan Murano CrossCabriolet", price: 10900},
	{name: "1961 Amphicar Model 770", price: 79900},
	{name: "1935 Bugatti Type 57SC Atlantic", price: 40500000}
];

const cars2 = [
	{name: "1962 Invader GT", price: 129900},
	{name: "1981 Gurgel X-15", price: 13900},
	{name: "1991 Gurgel BR-800", price: 18900},
	{name: "1975 Gurgel Itaipu", price: 25900},
	{name: "1990 Gurgel Patrol", price: 599900},
	{name: "1956 BMW Isetta", price: 129900},
	{name: "2003 Chevrolet SSR", price: 59900},
	{name: "1973 Volkswagen Thing", price: 49900}
];  

// Get all the product elements
var novidades = $('.painel.novidades li');

// Update the prices for each product
novidades.each(function(index) {
	var product = cars1[index];
	$(this).find('figcaption').text(product.name + " por $" + product.price);
});

// painel mais-vendidos
var maisVendidos = $('.painel.mais-vendidos li');

// Update the prices for each product
maisVendidos.each(function(index) {
	var product = cars1[index];
	$(this).find('figcaption').text(product.name + " por $" + product.price);
});