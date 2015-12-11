(function() {
  'use strict';

angular
  .module('strava.directives', [])
  .directive('d3Bars', ['$window', '$timeout', 'd3', d3Bars]);

  function d3Bars ($window, $timeout, d3) {
    return {
      restrict: 'EA',
      scope: {
        data: '=' // bi-directional data-binding
      },
      link: function (scope, ele, attrs) {
        d3.d3()
          .then(function (d3) {

            var margin = parseInt(attrs.margin) || 20;
            var barHeight = parseInt(attrs.barHeight) || 20;
            var barPadding = parseInt(attrs.barPadding) || 5;

            var svg = d3.select(ele[0])
                        .append("svg")
                        .style('width', '100%');


            $window.onresize = function () {
              scope.$apply();
            };

            // Watch for resize event
            scope.$watch(function () {
              return angular.element($window)[0].innerWidth;
            }, function () {
              scope.render(scope.data);
            });

            // Watch for data changes and re-render
            scope.$watch('data', function(newVals, oldVals) {
              return scope.render(newVals);
            }, true);

            scope.render = function (data) {
              // remove all previous items before render
              svg.selectAll('*').remove();

              // If we don't pass any data, return out of the element
              if (!data) return;

              var width = d3.select(ele[0]).node().offsetWidth - margin;
              var height = scope.data.length * (barHeight + barPadding);
              // Use the category20() scale function for multicolor support
              var color = d3.scale.category20();
              var xScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d) {
                  return d.distance;
                })])
                .range([0, width]);

            svg.attr('height', height);

            svg.selectAll('rect')
              .data(data).enter()
                .append('rect')
                .attr('height', barHeight)
                .attr('width', 140)
                .attr('x', Math.round(margin/2))
                .attr('y', function(d,i) {
                  return i * (barHeight + barPadding);
                })
                .attr('fill', function(d) {
                  return color(d.distance);
                })
                .transition()
                  .duration(1000)
                  .attr('width', function(d) {
                    return xScale(d.distance);
                  });
              svg.selectAll('text')
                .data(data)
                .enter()
                  .append('text')
                  .attr('fill', '#fff')
                  .attr('y', function(d,i) {
                    return i * (barHeight + barPadding) + 15;
                  })
                  .attr('x', 15)
                  .text(function(d) {
                    return d.activity + " distance: (" + d.distance + ")";
                  });
            };
          });
      }
    };
  };
})();