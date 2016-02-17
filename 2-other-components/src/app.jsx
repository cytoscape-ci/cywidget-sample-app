/**
 * More realistic example: Connect to other components
 */
import CytoFramework from 'cyto-framework'
import {graphReducer, CyNetworkWidget} from 'cywidget-network'
import 'material-design-lite'

require('./styles/app.scss');
require('material-design-lite/material.min.css');

const ENDPOINT = 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/';

const cy = new CytoFramework({graphReducer});

// If user click the
document.getElementById('visualize')
  .addEventListener("click", (evt) => {
    'use strict';
    let ndexId = document.getElementById('ndexId').value;
    if (ndexId !== null && ndexId !== undefined && ndexId !== '') {
      document.getElementById('networkId').innerHTML = "NDEx ID: " + ndexId;
      renderNetwork(ndexId);
    }
  });


function renderNetwork(ndexId) {
  let props = {
    networkLocation: ENDPOINT + ndexId,
    width: '100%', // Width of Canvas
    height: '700px', // Height of Canvas
    background: '#FAFAFA' // Background Color of Canvas
  };

  cy.render(
    document.getElementById('widget-network-1'), // ID of the tag in the base HTML (build/index.html)
    CyNetworkWidget, // Widget container
    props
  );
}




