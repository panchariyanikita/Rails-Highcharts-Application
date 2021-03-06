'use strict';
// Angular module
var myapp = angular.module('myapp', ["highcharts-ng"]);

//New controller
myapp.controller('myctrl', function ($scope) {

  //Chart options
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line',
		zoomType: 'x'

      },
      plotOptions: {
        column: {
                    stacking: 'normal',
										animation: {
											duration: 0
										}
                },
        line: {
              zIndex: 2,
							animation: {
								duration: 0
							},
              marker: {
                radius: 3,
                lineColor: '#D9D9D9',
                lineWidth: 1
              },
          }
      },
      title: {
        text: 'Shop Sales'
      }
    },
    xAxis: {
            categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    },
    yAxis:
          [{
            },
            {
            opposite: true,
            min: 0
          }],
    tooltip: {
        shared: true
      },
    series: [
          {
                  name: 'Shipping Fees',
                  color: '#AA4643',
                  type: 'column',
                  data: [ 60,75,58,74,60,42,39,70,90,50,30,100 ]
          },
          {
            name: 'Discounted Prices',
            color: '#4572A7',
            type: 'column',
            data: [ 150,250,400,200,600,150,100,650,250,140,290,500 ]

          },
          {
            name: 'Unique Visitors',
            color: '#000000',
            data: [ 100,50,98,144,200,49,73,77,90,100,200,100 ]
          },
          {
            name: 'Order count',
            color: '#89A54E',
            yAxis: 1,
            data: [ 10,5,8,4,20,24,3,7,9,10,20,10 ]
          }
        ],
    loading: false,
    size: {}
  },

  $scope.chartConfig1 =
  {
    options: {
          chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'Shop Sales for today'
              }
            },
           tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                  name: "Value",
                  colorByPoint: true,
                  data: [{
                      name: "Sales after discounts",
                      y: 70
                  }, {
                      name: "Shipping fees",
                      y: 20,
                      sliced: true,
                      selected: true
                  }, {
                      name: "Payment fees",
                      y: 10
                  }]
              }],
              legend: {
                  enabled: true,
                  floating: true
              }
    }
  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };
});
