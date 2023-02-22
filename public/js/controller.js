var app = angular.module('app', []);
app.controller('control', function($scope, $http) {
    $http.get('api/product').then(function(res) {
        console.log(res)
        $scope.products = res.data
        console.log(res.data)
    });
});

app.controller('filter', function($scope) {
    $scope.dataFilter = ''
    $scope.filter = function(data) {
        $scope.dataFilter = data
        console.log(data)
    }
});

app.controller('control1', function($scope, $http) {
    $http.get('/api/cart').then(function(res) {
        $scope.cart = res.data;
        $scope.lenght = function() {
            var lenght = 0;
            (res.data).forEach(element => {
                lenght += 1
            });
            return lenght
        }

    });

});