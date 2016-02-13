import React from "react";
import { connect } from 'react-redux';

import CytoscapeRenderer from "../components/CytoscapeRenderer.jsx"
import { fetchNetwork, cyjsSelected } from "../state/actions/GraphAction.jsx"


class NetworkWidget extends React.Component {

  componentDidMount() {
    // Fetch Cytoscape.js JSON from remote resource.
    this.props.fetchNetwork(this.props.networkLocation);
  }

  render() {
    const {cyjsSelected, selected, graph, width, height, background, ...props} = this.props;

    const style = {
      width: width,
      height: height,
      background: background
    }

    return (
      <div>
        <CytoscapeRenderer
          graph={graph}
          style={style}
          selected={selected}
          cyjsSelected={cyjsSelected}
        />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    cyjsSelected: (selected) => dispatch(cyjsSelected(selected)),
    fetchNetwork: (networkLocation) => dispatch(fetchNetwork(networkLocation))
  }
}

function mapStateToProps(state) {

  console.log("888888 Style")
  console.log(state)
  return {
    graph: state.networkWidget.graph,
    //style: state.networkWidget.style,
    selected: state.networkWidget.selected,
    graphUrl: state.networkWidget.graphUrl
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkWidget)
