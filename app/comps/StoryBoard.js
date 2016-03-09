'use strict';

import React from 'react';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import styles from 'material-ui/lib/styles';

import {ORGS} from '../data/const';
import DJTheme from '../styles/theme';

const colorsArr = [styles.Colors.amber500, styles.Colors.brown400, styles.Colors.blueGrey500, styles.Colors.pink400, styles.Colors.green500,
  styles.Colors.teal500, styles.Colors.blue300, styles.Colors.indigo400, styles.Colors.purple500, styles.Colors.red500];
const greyCol = styles.Colors.grey200;

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

  getStyleName(name) {
    var style = 'langicon ';
    switch (name) {
      case 'JavaScript':
        style += 'js'
        break;
      case 'Objective-C':
        style += 'objc'
        break;
      case 'HTML':
        style += 'html'
        break;
      case 'Python':
        style += 'python';
        break;
      case 'Go':
        style += 'go';
        break;
      case 'Ruby':
        style += 'ruby';
        break;
      case 'Jupyter Notebook':
        style += 'jup';
        break;
      case 'R':
        style += 'r';
        break;
      case 'Clojure':
        style += 'clj';
        break;
      case 'CoffeeScript':
        style += 'coffee';
        break;
      case 'Shell':
        style += 'shell';
        break;
      case 'C#':
        style += 'cs';
        break;
      case 'PHP':
        style += 'php';
        break;
      case 'Java':
        style += 'java';
        break;
      case 'Scala':
        style += 'scala';
        break;
      default:
        break;
    }

    return style;
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
      if(ORGS[i].label.toLowerCase() === name.toLowerCase()) {
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
    ret.language = data['language'];
    ret.tags = data['notes'];
    ret.style = this.getStyleName(data['language']);
    ret.logo = this.getLogo(ret.user);
    ret.name = this.getOrg(ret.user);
    return ret;
  }

  // <CardText className='desc'>{this.state.data.desc}</CardText>


  render() {
    return (
      <Card className='storyBoard'>
        <CardHeader
        title=<a href={'https://github.com/' + this.state.data.user + '/' + this.state.data.title} target='_blank'>{this.state.data.title}</a>
        subtitle=<a href={'https://github.com/' + this.state.data.user} target='_blank'>{this.state.data.name}</a>
        avatar={this.state.data.logo}
        showExpandableButton={false} />

        <CardActions className='numSec'>

          <div className='octSec lang'>
            <span className={this.state.data.style}></span>
            <span className='num'>{this.state.data.language}</span>
          </div>

          <div className='octSec'>
            <svg className='octicon octicon-eye' height='16' viewBox='0 0 16 16' width='16'>
              <path d='M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z'></path>
            </svg>
            <span className='num'>{this.state.data.watch}</span>
          </div>

          <div className='octSec'>
            <svg className='octicon octicon-star' height='16' viewBox='0 0 14 16' width='14'>
              <path d='M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z'></path>
            </svg>
            <span className='num'>{this.state.data.star}</span>
          </div>

          <div className='octSec'>
            <svg className='octicon octicon-repo-forked' height='16' viewBox='0 0 10 16' width='10'>
              <path d='M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z'></path>
            </svg>
            <span className='num'>{this.state.data.forks}</span>
          </div>

          <div className='octSec tags'>
            <svg className='octicon octicon-tag' height='16' viewBox='0 0 14 16' width='14'>
              <path d='M6.73 2.73c-0.47-0.47-1.11-0.73-1.77-0.73H2.5C1.13 2 0 3.13 0 4.5v2.47c0 0.66 0.27 1.3 0.73 1.77l6.06 6.06c0.39 0.39 1.02 0.39 1.41 0l4.59-4.59c0.39-0.39 0.39-1.02 0-1.41L6.73 2.73zM1.38 8.09c-0.31-0.3-0.47-0.7-0.47-1.13V4.5c0-0.88 0.72-1.59 1.59-1.59h2.47c0.42 0 0.83 0.16 1.13 0.47l6.14 6.13-4.73 4.73L1.38 8.09z m0.63-4.09h2v2H2V4z'></path>
            </svg>
            <span className='num'>{this.state.data.tags}</span>
          </div>

        </CardActions>

      </Card>
    );
  }
}

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
