(function loadCss(url) {
	"use strict";
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
})('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css');


requirejs.config({
	"baseUrl": "js/lib",
	"paths": {
		"app": "../app",
		"jquery": "//code.jquery.com/jquery.min",
		"bootstrap": "//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min"
	}
});

//requirejs(["app/main"]);