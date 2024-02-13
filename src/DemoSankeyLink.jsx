  import React, { Component } from "react";
  import { Layer } from "recharts";
  import {Link} from 'react-router-dom'

  export default class Demo extends Component {
    static displayName = "SankeyLinkDemo";

    render() {
      const {
        sourceX,
        targetX,
        sourceY,
        targetY,
        sourceControlX,
        targetControlX,
        linkWidth,
        index,
        colorGradients
      } = this.props;
      const gradientID = `linkGradient${index}`;

    
      return (
        <>
          
        <Layer key={`CustomLink${index}`}>
          <defs>
            <linearGradient id={gradientID}>
              <stop offset="20%" stopColor={colorGradients[index].sourceColor} />
              <stop offset="80%" stopColor={colorGradients[index].targetColor} />
            </linearGradient>
          </defs>
          <path
            d={`
              M${sourceX},${sourceY + linkWidth / 2}
              C${sourceControlX},${sourceY + linkWidth / 2}
                ${targetControlX},${targetY + linkWidth / 2}
                ${targetX},${targetY + linkWidth / 2}
              L${targetX},${targetY - linkWidth / 2}
              C${targetControlX},${targetY - linkWidth / 2}
                ${sourceControlX},${sourceY - linkWidth / 2}
                ${sourceX},${sourceY - linkWidth / 2}
              Z
            `}
            fill={`url(#${gradientID})`}
            strokeWidth="0"
            onMouseEnter={() => {
              this.setState({ fill: "rgba(0, 136, 254, 0.5)" });
            }}
            onMouseLeave={() => {
              this.setState({ fill: "url(#linkGradient)" });
            }}
            onClick={()=>{
              <Link href="https://www.youtube.com/"></Link>
            }}
          />
        </Layer>
        </>
      );
    }
  }
