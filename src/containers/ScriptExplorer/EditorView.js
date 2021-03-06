/**
 * Created by kgrube on 2/9/2018
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tab} from 'semantic-ui-react';
import {connect} from 'react-redux';
import EditorXML from './EditorXML';
import EditorJSON from './EditorJSON';
import EditorScript from './EditorScript';
import {changeTab} from '../../redux/script';

@connect(state => ({activeIndex: state.script.activeIndex, scriptXML: state.script.scriptXML}), {changeTab})
class EditorView extends Component {
  handleTabChange = (event, {activeIndex}) => {
    this.props.changeTab({activeIndex});
  };

  render() {
    const panes = [{
      menuItem: 'Script XML', render: () => <Tab.Pane><EditorXML/></Tab.Pane>,
    }, {
      menuItem: 'Script JSON', render: () => <Tab.Pane><EditorJSON/></Tab.Pane>,
    }, {
      menuItem: 'Script View', render: () => <Tab.Pane><EditorScript/></Tab.Pane>,
    }];

    return (
      <Tab
        panes={panes}
        activeIndex={this.props.activeIndex}
        onTabChange={this.handleTabChange}
      />
    );
  }
}

EditorView.propTypes = {
  changeTab: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default EditorView;
