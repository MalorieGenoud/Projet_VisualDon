const d3 = require('d3');
import data from '../data/sales.json';

const text = "";

const width = 260;
const height = 260;
const thickness = 40;
const duration = 750;

const radius = Math.min(width, height) / 2;
const color = d3.scaleOrdinal(["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff"]);

const svg = d3.select(".graph-sales")
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);

const g = svg.append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

const arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);

const pie = d3.pie()
    .value(function (d) {
        return d.value;
    })
    .sort(null);

const path = g.selectAll('path')
    .data(pie(data))
    .enter()
    .append("g")
    .on("mouseover", function (d) {
        let g = d3.select(this)
            .style("cursor", "pointer")
            .style("fill", "black")
            .append("g")
            .attr("class", "text-group");

        g.append("text")
            .attr("class", "name-text")
            .text(`${d.data.name}`)
            .attr('text-anchor', 'middle')
            .attr('dy', '-1.2em');

        g.append("text")
            .attr("class", "value-text")
            .text(`${d.data.value}`)
            .attr('text-anchor', 'middle')
            .attr('dy', '.6em');
    })
    .on("mouseout", function (d) {
        d3.select(this)
            .style("cursor", "none")
            .style("fill", color(this._current))
            .select(".text-group").remove();
    })
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i))
    .on("mouseover", function (d) {
        d3.select(this)
            .style("cursor", "pointer")
            .style("fill", "darkgrey");
    })
    .on("mouseout", function (d) {
        d3.select(this)
            .style("cursor", "none")
            .style("fill", color(this._current));
    })
    .each(function (d, i) {
        this._current = i;
    });


g.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .text(text);
