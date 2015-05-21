describe("BookshelfController", function() {
    beforeEach(module('ReaderApp'));

    var $controller;
    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('$scope.myBooks', function() {
      it("should create three books",function(){
          expect("ABCD").toEqual("ABCD");
          var $scope = {}
          var controller = $controller('BookshelfController', {$scope: $scope});
          expect($scope.myBooks.length).toEqual(3);
      });
    });
});