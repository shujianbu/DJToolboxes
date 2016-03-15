
import React from 'react';
import StoryBoard from './StoryBoard';
import {TOPICS, ORGS, TYPES} from '../data/const';

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyBoards : this.props.data.sort(function(a,b) {return a['repo'].toLowerCase().charCodeAt(0) - b['repo'].toLowerCase().charCodeAt(0);}),
      filteredStoryBoards: this.props.data.sort(function(a,b) {return a['repo'].toLowerCase().charCodeAt(0) - b['repo'].toLowerCase().charCodeAt(0);})
    };
  }

  componentWillReceiveProps(nextProps) {
    var self = this;
    if(JSON.stringify(self.props.filter) !== JSON.stringify(nextProps.filter) || nextProps.search !== self.props.search) {
      var filter = nextProps.filter;
      var temp = [];
      self.state.storyBoards.forEach(function(sb) {
        var topic = sb['notes'];
        var org   = sb['user'];
        var type  = sb['language'];
        var title = sb['repo'];
        var flag  = true;

        if(filter !== null && filter.topic !== '0' && topic.indexOf(TOPICS[filter.topic].label) === -1) {
          flag = false;
        }
        if(flag && filter !== null && filter.org !== '0' && ORGS[filter.org].id !== org) {
          flag = false;
        }
        if(flag && filter !== null && filter.type !== '0' && type.indexOf(TYPES[filter.type].label) === -1) {
          flag = false;
        }

        if(flag) {
          temp.push(sb);
        }
      });

      this.setState({filteredStoryBoards: temp.sort(function(a,b) {return a['repo'].toLowerCase().charCodeAt(0) - b['repo'].toLowerCase().charCodeAt(0);})});
    }
  }

  render() {
    return (
      <div>
      {this.state.filteredStoryBoards.map(function(story, ind) {
        return <StoryBoard key={ind} data={story} />;
      })}
      </div>
    );
  }
}

export default BoardContainer;