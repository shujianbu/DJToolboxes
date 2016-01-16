'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
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
            if(ORGS[i].label.indexOf(name) !== -1) {
                return './img/logo/' + ORGS[i].value + '.png';
            }
        }
        return './img/logo/default.png';
    }

    parseData(data) {
        var ret = {};
        ret.title = data['Title'];
        ret.url = data['URL'];
        ret.orgen = data['Organization'];
        ret.orgcn = data['Organization_CN'];
        ret.cat = data['Topic'];
        ret.element = data['Type'];
        ret.img = data['Images'];
        ret.logo = this.getLogo(ret.orgen);
        return ret;
    }

    render() {

        return (

            <Card initiallyExpanded={true} className='storyBoard'>
                <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander={true}
                avatar={<Avatar style={{color: 'red'}}>A</Avatar>}
                showExpandableButton={true} />

                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>

                <CardActions expandable={true}>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>

                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>

        );
    }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
