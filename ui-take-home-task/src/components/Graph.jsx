import { useEffect, useRef } from "react";
import * as d3 from "d3";
import rawData from "../data/graphData.json"; // Store your JSON data in src/data

import "../styles/Graph.css"; // Import the CSS file for styling

const Graph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 1200, height = 700;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .classed("graph-container", true);

    const nodes = {};
    const links = [];

    const traverse = (node, parent = null) => {
      nodes[node.function] = nodes[node.function] || { id: node.function };
      if (parent) {
        links.push({ source: parent.function, target: node.function });
      }
      if (node.children) {
        node.children.forEach((child) => traverse(child, node));
      }
    };

    rawData.forEach((node) => traverse(node));

    const simulation = d3.forceSimulation(Object.values(nodes))
      .force("link", d3.forceLink(links).id((d) => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2));

    svg.selectAll("*").remove();

    // Create zooming and panning
    const zoom = d3.zoom().on("zoom", (event) => {
      svg.select("g").attr("transform", event.transform);
    });
    svg.call(zoom);

    const container = svg.append("g");

    const link = container.selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("class", "graph-link");

    const node = container.selectAll("circle")
      .data(Object.values(nodes))
      .enter().append("circle")
      .attr("class", "graph-node")
      .attr("r", 10)
      .call(
        d3.drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip");

    node.on("mouseover", (event, d) => {
      tooltip.style("visibility", "visible")
        .text(d.id)
        .style("top", `${event.pageY - 10}px`)
        .style("left", `${event.pageX + 10}px`);
    }).on("mouseout", () => {
      tooltip.style("visibility", "hidden");
    });

    const text = container.selectAll("text")
      .data(Object.values(nodes))
      .enter().append("text")
      .attr("class", "graph-label")
      .text((d) => d.id.split("/").pop());

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      text.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Graph;
