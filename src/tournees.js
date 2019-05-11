const d3 = require('d3');
const topojson = require('topojson');
import worldMap from '../data/worldMap.json';
import jsonData from '../data/meteorite.json';

const w = 960;
const h = 600;

const svg = d3.select(".map")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

let projection = d3.geoMercator()
    .translate([w/2, h/2])
    .scale(140);

const path = d3.geoPath()
    .projection(projection);

let tooltip = d3.select('body').append("div")
    .style('position', 'absolute')
    .style('text-align', 'center')
    .style('padding', '2px')
    .style('font', '12px sans-serif')
    .style('background', 'lightgrey')
    .style('border', '0px')
    .style('border-radius', '8px')
    .style('pointer-events', 'none')
    .style("opacity", 1);

Promise.all([worldMap, jsonData]).then(function(data) {

    // Display world map
    svg.append("g")
        .attr("class", "country")
        .selectAll("path")
        .data(topojson.feature(data[0], data[0].objects.countries).features)
        .enter().append("path")
        .attr("d", path);

    // display tour
    svg.selectAll(".tour")
        .data(data[1].features.filter(function(d) {
            return d.geometry;
        }) )
        .enter().append("circle")
        .attr("class", "tour")
        .attr("cx", (d) => {
            let coords = projection(d.geometry.coordinates);
            return coords[0];
        })
        .attr("cy", (d) => {
            let coords = projection(d.geometry.coordinates);
            return coords[1];
        })
        .attr("r", 6)
        .on("mouseover", function(d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html('Name: ' + d.properties.name + '<br/>' +
                'Year: ' + d.properties.year.substring(0,4) + '<br/>' +
                'Mass: ' + d.properties.mass + '<br/>' +
                'Class: ' + d.properties.recclass)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});

