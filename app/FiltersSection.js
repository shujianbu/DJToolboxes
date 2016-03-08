'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AutoComplete from 'material-ui/lib/auto-complete';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import { TOPICS, ORGS, TYPES } from './const';
import DJTheme from './theme';

injectTapEventPlugin();

class FiltersSection extends React.Component {

  constructor(props) {
    super(props);

    this.topics = populateMenus(TOPICS);
    this.orgs   = populateMenus(ORGS);
    this.types  = populateMenus(TYPES);

    function populateMenus(data) {
      let ret = [];
      for (let i = 0; i < data.length; i++ ) {
        ret.push(<MenuItem value={data[i].value} key={i} primaryText={data[i].label} />);
      }
      return ret;
    }

    this.state = {
      open  : false,
      topic : '0',
      org   : '0',
      type  : '0'
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DJTheme)
    };
  }

  handleChange(filter, e, index, value) {
    // set state
    let stateObj = Object.assign({}, this.state);
    stateObj[filter] = value;
    this.setState(stateObj); // TODO: need to add open

    // ropogate to parent
    this.props.updateFilter(stateObj);
  }

  handleSearch(str) {
    this.props.updateSearch(str.toLocaleLowerCase());
  }

  clearSearch(str) {
    if(str.length === 0)
      this.props.updateSearch('');
  }

  handleOpen() {
    // TODO: pass new state
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Contribute"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
      <Toolbar style={{background:'#fafafa'}}>
        <ToolbarGroup key={0} float='left' className='dropdowns'>
          <DropDownMenu onChange={this.handleChange.bind(this, 'topic')} value={this.state.topic}>{this.topics}</DropDownMenu>
          <DropDownMenu onChange={this.handleChange.bind(this, 'org')} value={this.state.org}  >{this.orgs}</DropDownMenu>
          <DropDownMenu onChange={this.handleChange.bind(this, 'type')} value={this.state.type} >{this.types}</DropDownMenu>
        </ToolbarGroup>

        <ToolbarGroup key={1} float='left' className='searchbar'>
          <AutoComplete hintText='搜索工具库' filter={AutoComplete.caseInsensitiveFilter} dataSource={this.props.autoCompleteData} onNewRequest={this.handleSearch.bind(this)} onUpdateInput={this.clearSearch.bind(this)} />
        </ToolbarGroup>

        <ToolbarGroup key={2} float='right'>
          <FlatButton label="关于" style={{}} onTouchTap={this.handleOpen.bind(this)} />
          <Dialog
            title='案例库'
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose.bind(this)}
          > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus quis quam finibus feugiat vitae ut tortor. Mauris feugiat enim quis turpis pharetra fringilla. Donec libero nulla, ullamcorper sit amet blandit quis, porta vitae enim. Phasellus a ullamcorper massa. Sed bibendum ut justo eget ultrices. Sed rutrum quis tellus sodales elementum. Cras vitae tellus ipsum. Nullam eget ex leo. Maecenas tempor risus a tempor varius. Vivamus faucibus, urna vitae commodo pharetra, nulla magna tincidunt mauris, ut aliquam dolor felis sit amet tellus. Praesent sollicitudin eros sed leo congue posuere. Sed nec mi sed odio porttitor bibendum nec eget nibh.
          </Dialog>

        </ToolbarGroup>

      </Toolbar>
    );
  }
};

FiltersSection.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default FiltersSection;
