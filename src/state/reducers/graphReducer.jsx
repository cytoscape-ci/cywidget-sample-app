import {
  NODE_SELECTED,
  EDGE_SELECTED,
  RECEIVE_NETWORK,
  REQUEST_NETWORK
} from "../actions/Actions.jsx"

let EMPTY_GRAPH = {
  elements: []
};


let INITIAL_STATE = {
  graph: EMPTY_GRAPH,
  selected: null,
  graphUrl: '',
  isFetching: false
};


export default function graph(state = INITIAL_STATE, action) {

  switch (action.type) {

    case REQUEST_NETWORK:
      return Object.assign({}, state, {
        graphUrl: action.graphUrl,
        isFetching: true
      });
    case RECEIVE_NETWORK:
      return Object.assign({}, state, {
        graph: action.graph,
        isFetching: false
      })

    case NODE_SELECTED:
    case EDGE_SELECTED:
      return Object.assign(state, {
        selected: action.selected
      })

    default:
      return state;
  }
}
