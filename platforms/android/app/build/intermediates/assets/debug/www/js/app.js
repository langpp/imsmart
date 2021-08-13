// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
	theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
	root: '#app',
	theme: theme,
	routes: routes,
	panel: {
		swipe: 'left',
	},
	touch: {
		tapHold: true,
		fastClicks: true,
		materialRipple: true,
		activeState: true,
		disableContextMenu: false,
	},
});

var apiurl = "https://dev.abbauf.com/";
var imgnull = "./img/lainnya/notfound.jpg";
var iconurl = "./img/icon/";

app.root.addClass('color-theme-blue');

app.on('init', function (e) {
	if (localStorage.getItem("access_token")) {
		app.router.navigate("/dashboard/");
	} else {
		app.router.navigate('/auth/login/');
	}

	// function checkConnection() {
	// 	var networkState = navigator.connection.type;

	// 	var states = {};
	// 	states[Connection.UNKNOWN] = 'Unknown connection';
	// 	states[Connection.ETHERNET] = 'Ethernet connection';
	// 	states[Connection.WIFI] = 'WiFi connection';
	// 	states[Connection.CELL_2G] = 'Cell 2G connection';
	// 	states[Connection.CELL_3G] = 'Cell 3G connection';
	// 	states[Connection.CELL_4G] = 'Cell 4G connection';
	// 	states[Connection.CELL] = 'Cell generic connection';
	// 	states[Connection.NONE] = 'No network connection';

	// 	if (states[networkState] == 'No network connection') {
	// 		app.router.navigate('/offline/');
	// 	}
	// }

	// checkConnection();
	// document.addEventListener("offline", onOffline, false);

	// function onOffline() {
	// 	app.router.navigate('/offline/');
	// }

	app.request.setup({
		timeout: 100000
	});

	document.addEventListener('backbutton', function (event) {
		event.preventDefault();
		// if (app.views.main.router.url == '/dashboard') {
		// 	navigator.app.exitApp();
		// } else if (app.views.main.router.url == '/auth/login/') {
		// 	navigator.app.exitApp();
		// } else {
		// 	app.router.back();
		// }
	});
});

// datapage offlinepage
$(document).on('page:init', '.page[data-name="offline"]', function (e) {
	$("#checkconnection").click(function (event) {
		var networkState = navigator.connection.type;

		var states = {};
		states[Connection.UNKNOWN] = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI] = 'WiFi connection';
		states[Connection.CELL_2G] = 'Cell 2G connection';
		states[Connection.CELL_3G] = 'Cell 3G connection';
		states[Connection.CELL_4G] = 'Cell 4G connection';
		states[Connection.CELL] = 'Cell generic connection';
		states[Connection.NONE] = 'No network connection';

		if (states[networkState] != 'No network connection') {
			if (localStorage.getItem("access_token")) {
				app.router.navigate("/dashboard/");
			} else {
				app.router.navigate('/auth/login/');
			}
		} else {
			app.router.navigate('/offline/');
		}
	});
});