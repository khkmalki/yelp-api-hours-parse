var app = angular.module('Myapp', [])

app.filter('convTime', ['$filter', function($filter) {
  return function(time) {
    var rightime;
    var strtime = time.toString();
    var firstTwo = strtime.substring(0, 2);
    var rightmint = strtime.substring(2, 4);
    if (parseInt(firstTwo) == 00) {
      return rightime = 12 + ":" + rightmint.toString() + ' AM';
    } else if (parseInt(firstTwo) == 12) {
      return rightime = 12 + ":" + rightmint.toString() + ' PM';
    }
    (parseInt(firstTwo) > 12) ? rightime = (parseInt(firstTwo) % 12).toString() + ":" + rightmint.toString() + ' PM': rightime = (parseInt(firstTwo) % 12).toString() + ":" + rightmint.toString() + ' AM'

    return rightime;
  }
}]);
app.filter('handelHr', ['$filter', 'convTimeFilter', function($filter, convTimeFilter) {
  return function(times) {
    var itemPos = 0; // position of element in the array.
    // Yelp api days are 0:6 Monday to Sunday;
    var today = new Date().getDay();
    (today == 0) ? today = 6: today -= 1
    /*  ////////////////////////////////
I know the code is a little bit messy
I am busy with a project once I finish I'll try to make it more professional. /:)
////////////////////////////////////
    */
    var firsTime, secondTime;
    //for (var i in times) {
    for(var i=0;i<= times.length;i++){
      console.log(i +" "+ times[i]['day']);
      if (times[i]['day'] == today) {
        firsTime = convTimeFilter(times[i]['start']) + ", " + convTimeFilter(times[i]['end']);
        itemPos = parseInt(i);
        itemPos +=1;
        break;
      }
    };
    if (times[itemPos] !== undefined && times[itemPos].day == today) {
      secondTime = convTimeFilter(times[itemPos]['start']) + ", " + convTimeFilter(times[itemPos]['end']);
      return firsTime + " " + secondTime;
    } else {
      return firsTime;
    }
  }
}]);

app.controller('bodY', ['$scope', '$filter', function($scope, $filter) {

  $scope.data = [{
    "is_open_now": true,
    "hours_type": "REGULAR",
    "open": [{"day": 0, "is_overnight": false, "end": "1600", "start": "1000"}, {"day": 1, "is_overnight": false, "end": "1600", "start": "1000"}, {"day": 2, "is_overnight": false, "end": "1600", "start": "1000"}, {"day": 3, "is_overnight": false, "end": "1600", "start": "1000"}, {"day": 4, "is_overnight": false, "end": "1600", "start": "1000"}, {"day": 5, "is_overnight": false, "end": "1500", "start": "1100"}]
  }];

}])
