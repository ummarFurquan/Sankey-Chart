import React from "react";
import { Rectangle, Layer } from "recharts";

export default function DemoSankeyNode({
  x,
  y,
  width,
  height,
  index,
  payload,
  containerWidth,
  colors
}) {
  const isMainNode = payload.isMain || false;
  const mainNodeWidth = 100;
  const mainNodeHeight = 500;
  const nodeWidth = 300; // Adjust the width of sub nodes
  const nodePadding = 40; // Adjust the padding between sub nodes

  // Define URLs for each node
  const nodeURLs = [
    "",
    "https://www.youtube.com/1", // 1st link
    "https://www.google.com/",   //Second Link
    
  ];

  // Get URL for the current node
  const nodeURL = nodeURLs[index] || "";

  if (isMainNode) {
    // Main node rendering
    return (
      <Layer key={`CustomNode${index}`}>
        <a href={nodeURL} target="_blank">
          <Rectangle
            x={x - mainNodeWidth / 2} // Center the rectangle horizontally
            y={y - mainNodeHeight / 2} // Center the rectangle vertically
            width={mainNodeWidth}
            height={mainNodeHeight}
            fill={colors[index % colors.length]}
            fillOpacity="1"
          />
          <text
            textAnchor="middle"
            x={x} // Center the text horizontally
            y={y}
            fontSize="14"
            stroke="#ggg"
          >
            {payload.name}
          </text>
        </a>
      </Layer>
    );
  } else {
    // Other nodes rendering
    const isOut = x + width + 6 > containerWidth;
    return (
      <Layer key={`CustomNode${index}`}>
        <a href={nodeURL}>
          <Rectangle
            x={x - nodeWidth / 12} // Center the sub nodes horizontally
            y={y}
            width={nodeWidth}
            height={height}
            fill={colors[index % colors.length]}
            fillOpacity="1"
          />
          <text
            textAnchor="middle"
            x={x} // Center the text horizontally
            y={y + height / 2 + 4}
            fontSize="10"
            stroke="#333"
            strokeOpacity="0.5"
          >
            {payload.name}
          </text>
        </a>
      </Layer>
    );
  }
}
