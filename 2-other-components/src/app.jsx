/**
 * Sample Web Application to Display Cytoscape.js Network
 */

// 0-1. Import the Framework
import CytoFramework from 'cyto-framework'

// 0-2. Import reducer and container of the Widget
import {graphReducer, CyNetworkWidget} from 'cywidget-network'

// 0-3. Import SCSS style file for this application
require("./styles/app.scss");

// 1. Create an instance of CytoFramework and pass reducers
var cy = new CytoFramework({graphReducer});

// 2. Prepare parameters for the widget
var props = {
  // Location of the Cytoscape.js network (SHOULD BE ACCESSIBLE VIA CORS)
  networkLocation: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/94df1206-ce84-11e5-83ca-0251251672f9',
  width: '100%', // Width of Canvas
  height: '750px', // Height of Canvas
  background: '#FAFAFA' // Background Color of Canvas
};

// 3. Render widget
cy.render(
  document.getElementById('widget-network-1'), // ID of the tag in the base HTML (build/index.html)
  CyNetworkWidget, // Widget container
  props
);
