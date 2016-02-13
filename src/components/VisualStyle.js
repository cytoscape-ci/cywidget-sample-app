export const DEF_VISUAL_STYLE = [
  {
    selector: 'node',
    style: {
      'background-color': 'lightgreen',
      'label': 'data(name)'

    }
  },
  {
    selector: 'edge',
    style: {
      'line-color': '#aaaaaa',
      'width': 2
    }
  },
  {
    selector: 'node:selected',
    style: {
      'background-color': 'red'
    }
  },
  {
    selector: 'edge:selected',
    style: {
      'line-color': 'red',
      'width': 6
    }
  }
];
