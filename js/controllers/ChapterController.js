app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
	books.success(function(data) {
		$scope.book = data[$routeParams.bookId];
		$scope.chapters = data[$routeParams.bookId].chapters[$routeParams.chapterId];

		$scope.currentBookIndex = parseInt($routeParams.bookId);
		$scope.currentChapterIndex = parseInt($routeParams.chapterId);

		// If there no more chapters left, go back to the bookshelf view
	    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
	    	$scope.nextChapterIndex = "#";
    	} else {
    		$scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    	}

    	if($routeParams.chapterId <= 0) {
	    	$scope.previousChapterIndex = "#";
	    }
	    else {
	    	$scope.previousChapterIndex = $scope.currentChapterIndex - 1;
	    }
	});
}]);
