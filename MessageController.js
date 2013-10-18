app.controller('MessageController', function($scope, $http){

$http.get('http://localhost:8001').success(function(response){
	$scope.messages = response;
	console.log($scope.messages);
});


$http.post('http://localhost:8001',{'chat':$scope.messages}).success(function(response){
	$scope.messages = response;
	console.log($scope.messages);
});

function addMessage(
	$http.post('http://localhost:8001',{'chat':$scope.messages}).success(function(response){
	$scope.messages = response;
	console.log($scope.messages);
	});
);

});


