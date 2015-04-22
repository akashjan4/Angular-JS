

var UploadController = function ($scope, fileReader) {
    console.log(fileReader)
    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function (result) {
                          $scope.imageSrc = result;
                      });
    };

    $scope.$on("fileProgress", function (e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
    $scope.up = function (elm) {
        var file = event.target.files[0];
        console.log(file);
        if (!file) return;      

        var xhr = new XMLHttpRequest(); 
        xhr.open('POST', '/uploadSomeWhere', true);
        xhr.onload = function(event){}

        xhr.send(file);
    };

};

app.directive("ngFileSelect", function () {

    return {
        link: function ($scope, el) {

            el.bind("change", function (e) {

                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
            })

        }

    }


})

