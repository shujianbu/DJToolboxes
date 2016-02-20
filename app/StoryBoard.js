'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import styles from 'material-ui/lib/styles';

import {ORGS} from './const';
import DJTheme from './theme';

const colorsArr = [styles.Colors.amber500, styles.Colors.brown400, styles.Colors.blueGrey500, styles.Colors.pink400, styles.Colors.green500,
  styles.Colors.teal500, styles.Colors.blue300, styles.Colors.indigo400, styles.Colors.purple500, styles.Colors.red500];
const greyCol = styles.Colors.grey200;

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

    var cap = name.charAt(0).toUpperCase();
    var num = Math.floor(Math.random() * 10);
    return <Avatar color={greyCol} backgroundColor={colorsArr[num]} >{cap}</Avatar>;
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
      <Card className='storyBoard'>
        <CardHeader
        title= {this.state.data.title}
        subtitle={this.state.data.name}
        avatar={this.state.data.logo}
        showExpandableButton={false} />

        <CardText className='desc'>{this.state.data.desc}</CardText>

        <CardActions>
          <svg className='octicon octicon-eye' height='16' viewBox='0 0 16 16' width='16'>
            <path d='M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z'></path>
          </svg>
          <span className='num'>{this.state.data.watch}</span>

          <svg className='octicon octicon-star' height='16' viewBox='0 0 14 16' width='14'>
            <path d='M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z'></path>
          </svg>
          <span className='num'>{this.state.data.star}</span>

          <svg className='octicon octicon-repo-forked' height='16' viewBox='0 0 10 16' width='10'>
            <path d='M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z'></path>
          </svg>
          <span className='num'>{this.state.data.forks}</span>
        </CardActions>

      </Card>
    );
  }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
