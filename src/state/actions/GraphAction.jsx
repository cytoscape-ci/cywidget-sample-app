import {
  NODE_SELECTED,
  EDGE_SELECTED,
  RECEIVE_NETWORK,
  REQUEST_NETWORK
} from "./Actions.jsx"

import fetch from 'isomorphic-fetch';

// Cytoscape.js Constants
const NODES = 'nodes';
const EDGES = 'edges';


export function cyjsSelected(selected) {

  let objType = selected.group()

  if(objType === NODES) {
    return {
      type: NODE_SELECTED,
      selected: selected
    }
  } else if(objType === EDGES) {
    return {
      type: EDGE_SELECTED,
      selected: selected
    }
  }
}


function requestNetwork(networkUrl) {

  return {
    type: REQUEST_NETWORK,
    graphUrl: networkUrl
  }

}


function receiveNetwork(networkUrl, json) {
  return {
    type: RECEIVE_NETWORK,
    graphUrl: networkUrl,
    graph: json
  };
}


export function fetchNetwork(networkUrl) {

  return function (dispatch) {

    dispatch(requestNetwork(networkUrl));

    return fetch(networkUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveNetwork(networkUrl, json)));
  }
}

