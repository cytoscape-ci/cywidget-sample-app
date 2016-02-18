import CytoFramework from 'cyto-framework'
import {graphReducer, CyNetworkWidget} from 'cywidget-network'
import {CyTableWidget, tableReducer} from 'cywidget-table'

require('./styles/app.scss');

console.log("************* IMPORTS");
console.log(CyTableWidget);

const cy = new CytoFramework({graphReducer, tableReducer});

let props = {
  networkLocation: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/94df1206-ce84-11e5-83ca-0251251672f9',
  width: '100%', // Width of Canvas
  height: '700px', // Height of Canvas
  background: '#FAFAFA' // Background Color of Canvas
};

cy.render(
  document.getElementById('widget-table'), // ID of the tag in the base HTML (build/index.html)
  CyTableWidget, // Widget container
  props
);

cy.render(
  document.getElementById('widget-network-1'), // ID of the tag in the base HTML (build/index.html)
  CyNetworkWidget, // Widget container
  props
);





