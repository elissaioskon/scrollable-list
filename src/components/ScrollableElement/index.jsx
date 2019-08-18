import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

import { ScrollContext } from '../ScrollView';

export default class ScrollElement extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    index: PropTypes.number.isRequired
  };

  static contextType = ScrollContext;

  componentDidMount() {
    const node = findDOMNode(this);
    this.context.scroll.register(this.props.index, node);
  }

  componentWillUnmount() {
    this.context.scroll.unregister(this.props.index);
  }

  render() {
    return this.props.children;
  }
}
