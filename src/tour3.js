const d3 = require('d3');
const topojson = require('topojson');

// ---------- IMPORT JSON FILES ----------
import worldMap from '../data/worldMap.json';
import tour3 from '../data/tour3.json';

// ---------- VARIABLES ----------
const w = 960;
const h = 600;

const svg = d3.select(".graph-tour3")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

const g = svg.append('g');

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

// zoom and pan
const zoom = d3.zoom()
    .on('zoom', () => {
        g.style('stroke-width', `${1.5 / d3.event.transform.k}px`)
        g.attr('transform', d3.event.transform) // updated for d3 v4
    })

svg.call(zoom)

Promise.all([worldMap, tour3]).then(function(data) {

    // Display world map
    g.attr("class", "country")
        .selectAll("path")
        .data(topojson.feature(data[0], data[0].objects.countries).features)
        .enter().append("path")
        .attr("d", path);

    // display tour
    g.selectAll(".tour")
        .data(data[1].features.filter(function(d) {
            return d.geometry;
        }) )
        .enter().append("circle")
        .attr("class", "tour")
        .attr("fill", "black")
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
            tooltip.html('Étape: ' + d.properties.step + '<br/>' +
                'Date: ' + d.properties.date + '<br/>' +
                'Ville: ' + d.properties.city + '<br/>' +
                'Salle: ' + d.properties.room)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});

