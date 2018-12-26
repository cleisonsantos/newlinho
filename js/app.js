/*
    1 - Identificar quando o usuario utilizar o scroll
    2 - Calcular a distância entre o topo da página e o scroll
    3 - Iniciar a animação apartir do scroll onde termina o elemento nav
    
*/

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var reduceNavbar = function() {
    if ($("#mainNav").offset().top > 50) {
        $("#mainNav").addClass("reduce"), $("#logo").addClass("reduce-img");
        
        console.log("log")
    } else {
        $("#mainNav").removeClass("reduce");
        $("#logo").removeClass("reduce-img")
    }
}

reduceNavbar();

debounce($(window).scroll(reduceNavbar),300);

