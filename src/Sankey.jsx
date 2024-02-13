import React from "react";
import { Sankey, Tooltip } from "recharts";
import DemoSankeyNode from "./DemoSankeyNode";
import DemoSankeyLink from "./DemoSankeyLink";
import './App.css'
const data = {
  nodes: [
    { name: " ", isMain: true }, // Main node
    { name: "Home" },
    { name: "About" },
    { name: "Work Experience" },
    { name: "" },
    { name: "R5" },
    { name: "R6" },
    { name: "R7" },
    { name: "R8" },
    { name: "R9" }
  ],
  links: [
    { source: 0, target: 1, value: 1, }, // Main node connected to other nodes
    { source: 0, target: 2, value: 1 },
    { source: 0, target: 3, value: 1 },
    { source: 0, target: 4, value: 1 },
    { source: 0, target: 5, value: 1 },
    { source: 0, target: 6, value: 1 },
    { source: 0, target: 7, value: 1 },
    { source: 0, target: 8, value: 1 },
    { source: 0, target: 9, value: 1 }
  ],

};

const colors = [
  "#F9DB6D",
  "#40F99B",
  "#AFC2D5",
  "#FF8360",
  "#EC9192"
];

function SankeyDemo() {
  const numColors = colors.length;

  const colorGradients = data.links.map((link) => {
    return {
      sourceColor: colors[link.source % numColors],
      targetColor: colors[link.target % numColors]
    };
  });

  return (
    <div className="sankey-charts">
      <div>
        <Sankey
          width={850}
          height={700}
          margin={{ top: 10, bottom: 0 }}
          data={data}
          nodeWidth={50}
          nodePadding={60}
          linkCurvature={0.51}
          iterations={0}
          link={<DemoSankeyLink colorGradients={colorGradients} />}
          node={<DemoSankeyNode containerWidth={960} colors={colors} />}
        >
          <Tooltip />
        </Sankey>
      </div>
      <br />
    </div>
  );
}

export default SankeyDemo;
