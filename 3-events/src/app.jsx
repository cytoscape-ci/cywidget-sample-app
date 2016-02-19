import CytoFramework from 'cyto-framework'
import {graphReducer, CyNetworkWidget} from 'cywidget-network'
import {tableReducer, CyPropTableWidget} from 'cywidget-prop-table'

require('./styles/app.scss');

// Register BOTH reducers
const cy = new CytoFramework({graphReducer, tableReducer});

// Property for Network Widget
let props = {
  networkLocation: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/94df1206-ce84-11e5-83ca-0251251672f9',
  width: '100%', // Width of Canvas
  height: '700px', // Height of Canvas
  background: '#FAFAFA' // Background Color of Canvas
};

// Render widgets
cy.render(document.getElementById('widget-table'), CyPropTableWidget);
cy.render(document.getElementById('widget-network'), CyNetworkWidget, props);
