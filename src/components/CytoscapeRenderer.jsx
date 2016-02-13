import React from "react"
import cytoscape from "cytoscape"

import {DEF_VISUAL_STYLE} from "./VisualStyle"


// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';
const DEF_LAYOUT = 'preset';
const CYJS_SELECT = 'select';


/**
 *
 * Simple Network Viewer Component
 */
class CytoscapeRenderer extends React.Component {

  constructor(props) {
    super(props);
  }

  updateCyjs() {

    console.log('########## Cytoscape JS renderer Called ############');
    console.log(this.props)
    let visualStyle = this.props.graph.style;

    this.cy = cytoscape({

      container: document.getElementById(CYTOSCAPE_TAG),
      elements: this.props.graph.elements,
      style: visualStyle,
      layout: {
        name: DEF_LAYOUT
      }

    })

    this.setEventListener()

  }

  setEventListener() {
    this.cy.on('data select unselect add remove', (ev) => {
        console.log(ev)

        if (ev.originalEvent.type === CYJS_SELECT) {
          let selected = ev.cyTarget;
          this.handleSelect(selected)
        }
      }
    )
  }

  handleSelect(selected) {
    this.props.cyjsSelected(selected)
  }

  /**
   * Once "cy" is ready, draw network calling raw Cytoscape.js API.
   */
  componentDidUpdate() {
    this.updateCyjs();
  }

  render() {
    return (
      <div class="network-widget">
        <div id="cy" style={this.props.style}></div>
      </div>
    )
  }
}

export default CytoscapeRenderer
