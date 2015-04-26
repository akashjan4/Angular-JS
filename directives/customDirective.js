angular.module('customD', [])
.directive('Cname', function () {
	return {
		scope: {},
		restrict: 'C',
		link: function (scope, e, attribuite) {
			scope.fullName = attribuite.first +" "+ attribuite.last;
		},
		
		template: "{{fullName}}"
	}
});