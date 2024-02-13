# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Sankey Flow Chart Project Documentation

This document provides an overview of the Sankey Flow Chart project, including its components, functionality, and usage.

## Overview

The Sankey Flow Chart project is a visualization tool built using React and Recharts. It displays a Sankey diagram, also known as a flow diagram, which represents the flow of data or values between nodes. Each node in the diagram can be customized with links, making it interactive and allowing users to navigate to different webpages.

## Components

The project consists of the following main components:

- **SankeyDemo**: The main component that renders the Sankey diagram.
- **DemoSankeyNode**: Component responsible for rendering individual nodes in the Sankey diagram.
- **DemoSankeyLink**: Component responsible for rendering links between nodes.

## Functionality

### Sankey Diagram

The Sankey diagram displays a flow of data between nodes. It consists of nodes and links connecting these nodes. The width of the links represents the flow quantity, and the color of the links can be customized based on the data.

### Node Customization

Nodes can be customized with different colors and sizes. Additionally, each node can act as a link, allowing users to navigate to different webpages by clicking on the nodes.

### Interaction

The diagram supports interaction features such as tooltips, which provide additional information when hovering over nodes or links.

## Usage

To use the Sankey Flow Chart project, follow these steps:

1. Clone the project repository from GitHub.
2. Install the required dependencies using npm or yarn.
3. Import the necessary components into your React application.
4. Customize the data and styling according to your requirements.
5. Render the SankeyDemo component within your application.

Here's an example of how you can render the SankeyDemo component:

```jsx
import React from 'react';
import SankeyDemo from './SankeyDemo';

function App() {
  return (
    <div className="App">
      <SankeyDemo />
    </div>
  );
}

export default App;
