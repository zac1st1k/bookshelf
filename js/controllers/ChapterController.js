app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
	books.success(function(data) {
		$scope.book = data[$routeParams.bookId];
		$scope.chapters = data[$routeParams.bookId].chapters[$routeParams.chapterId];
	});
}]);