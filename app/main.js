'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FiltersSection from './comps/FiltersSection';
import BoardContainer from './comps/BoardContainer';
import data from './data/data.csv';
import css from './styles/base.css';

class APP extends React.Component {
  constructor() {
    super()
    this.state = {filter: null};
  }

  handleFilterUpdate(obj) {
    this.setState({filter: obj});
  }

  render() {
    return (
      <div>
        <FiltersSection updateFilter={this.handleFilterUpdate.bind(this)} />
        <BoardContainer data={data} filter={this.state.filter} />
      </div>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('body'));