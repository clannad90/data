var app=angular.module("app",["ui.router","page"]);
//app.directive("header",function(){
//	return {
//		templateUrl:"view/header.html",
//		restrict:"EA",
//		replace:true
//	}
//})
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("one");
	$stateProvider.state({
		name:"one",
		url:'/one',
		templateUrl:"view/pageone.html",
	}).state({
		name:"two",
		url:"/two",
		templateUrl:"view/pagetwo.html"
	}).state({
		name:"three",
		url:"/three",
		templateUrl:"view/pagethree.html"
	}).state({
		name:"four",
		url:"/four",
		templateUrl:"view/pagefour.html"
	}).state({
		name:"page",
		url:"/page/:id",
		templateUrl:"view/page.html",
		controller:"pagecon"
	})
})
