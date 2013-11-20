define(["jquery"], function($) {
	"use strict";
	$(function() {
		console.log("jQuery js loaded");

		//requirejs(["app/main"]);

		require(['bootstrap'], function() {
			console.log("Bootstrap js loaded");
		});

	});
});