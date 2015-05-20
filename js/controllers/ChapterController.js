app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
	books.success(function(data) {
		$scope.book = data[$routeParams.bookId];
		$scope.currentBookIndex = $routeParams.bookId;
		$scope.nextChapterIndex = (parseInt($routeParams.chapterId) + 1) % data[$routeParams.bookId].chapters.length;
		$scope.chapters = data[$routeParams.bookId].chapters[$routeParams.chapterId];
	});
}]);