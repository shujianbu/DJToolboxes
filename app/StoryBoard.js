'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import IconButton from 'material-ui/lib/icon-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import {ORGS} from './const';
import DJTheme from './theme';

injectTapEventPlugin();

class StoryBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.parseData(this.props.data)
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DJTheme)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: this.parseData(nextProps.data)});
  }

  getLogo(name) {
    for(let i = 1; i < ORGS.length; i++) {
      if(ORGS[i].label.toLowerCase() == name.toLowerCase()) {
        return './img/logo/' + ORGS[i].value + '.png';
      }
    }
    return './img/logo/default.png';
  }

  getOrg(name) {
    for(let i = 1; i < ORGS.length; i++) {
      if(ORGS[i].label.toLowerCase() == name.toLowerCase()) {
        return ORGS[i].en;
      }
    }
    return name;
  }

  parseData(data) {
    var ret = {};
    ret.title = data['repo'];
    ret.url = data['html_url'];
    ret.user = data['user'];
    ret.desc = data['description'];
    ret.watch = data['watch'];
    ret.star = data['star'];
    ret.forks = data['forks'];
    ret.logo = this.getLogo(ret.user);
    ret.name = this.getOrg(ret.user);
    return ret;
  }

  render() {
    return (
      <Card initiallyExpanded={false} className='storyBoard'>
        <CardHeader
        title= {this.state.data.title}
        subtitle={this.state.data.name}
        actAsExpander={true}
        avatar={this.state.data.logo}
        showExpandableButton={true} />

        <CardText expandable={true}>{this.state.data.desc}</CardText>

        <CardActions expandable={true}>
          <IconButton iconClassName="material-icons">visibility</IconButton><span>{this.state.data.watch}</span>
          <IconButton iconClassName="material-icons">star</IconButton><span>{this.state.data.star}</span>
          <IconButton iconClassName="material-icons">call_merge</IconButton><span>{this.state.data.forks}</span>
        </CardActions>

      </Card>
    );
  }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
