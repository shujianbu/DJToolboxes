'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import { TOPICS, ORGS, TYPES } from '../data/const';
import DJTheme from '../styles/theme';

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
    let stateObj = Object.assign({}, this.state);
    stateObj[filter] = value;
    stateObj['open'] = false;
    this.setState(stateObj);
    this.props.updateFilter(stateObj);
  }

  handleOpen() {
    let stateObj = Object.assign({}, this.state);
    stateObj['open'] = true;
    this.setState(stateObj);
  }

  handleClose() {
    let stateObj = Object.assign({}, this.state);
    stateObj['open'] = false;
    this.setState(stateObj);
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <Toolbar className = "nav-bar" style={{background:'#fafafa'}}>
        <ToolbarGroup key={0} float='left' className='dropdowns'>
          <DropDownMenu onChange={this.handleChange.bind(this, 'topic')} value={this.state.topic}>{this.topics}</DropDownMenu>
          <DropDownMenu onChange={this.handleChange.bind(this, 'org')} value={this.state.org}  >{this.orgs}</DropDownMenu>
          <DropDownMenu onChange={this.handleChange.bind(this, 'type')} value={this.state.type} >{this.types}</DropDownMenu>
        </ToolbarGroup>

        <ToolbarGroup key={1} float='right' className = 'about'>
          <FlatButton label="关于" style={{}} onTouchTap={this.handleOpen.bind(this)} />
          <Dialog
            className='aboutCont'
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose.bind(this)}
          >
            DJChina Toolboxes工具箱是配合<a href="http://djchina.org/" target="_blank">数据新闻网 2.0</a>上线推出的一个小平台，旨在收集数据新闻从业人员在日常工作中获取、清理、分析、可视数据的各种工具。<br/><br/>
            工欲善其事，必先利其器，这些工具中有新闻编辑室记者们的经验总结，也有数据工程师艺术家们贡献的源数据、设计模板，也有教程、案例等等，希望用户可以通过平台索引或学习，既快又好地解决项目中遇到的数据问题。<br/><br/>
            平台开发还在初始阶段，欢迎通过<a href="https://github.com/shujianbu/DJToolboxes/issues" target="_blank">Issues</a>提交建议和<a href="https://github.com/shujianbu/DJToolboxes/pulls" target="_blank">Pull Requests</a>补充更多的工具，活跃数据新闻社区。<br/>
          </Dialog>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

FiltersSection.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default FiltersSection;
