import CytoFramework from 'cyto-framework'
import {graphReducer, CyNetworkWidget} from 'cywidget-network'

require("./styles/app.scss");

// 1. Create an instance of CytoFramework and pass reducers
var cy = new CytoFramework({graphReducer});

// 2. Prepare parameters for the widget
var props = {
  networkLocation: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/ef554e33-d059-11e5-bff3-0251251672f9',
  width: '100%',
  height: '700px',
  background: '#EFEFEF'
};

// 3. Render widget(s)
cy.render(
  document.getElementById('widget-network'),
  CyNetworkWidget,
  props
);
