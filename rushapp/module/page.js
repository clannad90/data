var app=angular.module("page",[]);
	app.controller("pagecon",function($scope,$stateParams,getdata){
		var n=$stateParams.id;
		var str="<header>";
		getdata.then(function(data){
			str+="<h4 class='animated swing'>"+data.data[n].title+"</header>";
			str+="<div class='content'>"+"<img src="+data.data[n].src+">";
			str+="<h3>"+data.data[n].h3+"</h3>";
			str+="<p>"+data.data[n].p+"</p>";
			str+="<h5>"+"<span>￥"+data.data[n].price+"</span><a>立即购买</a></h5></div>";
			console.log(data.data);
			$("#box").html(str);
		})
	})
app.factory('getdata',function($q){
	var defer = $q.defer();
	$.ajax({
		method:'get',
		url:"index.json"
	}).then(function(data){
		defer.resolve(data);
	});
	return defer.promise;
})