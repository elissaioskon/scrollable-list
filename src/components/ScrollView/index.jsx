import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext();

const noop = () => {};

export default class ScrollView extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  /* eslint-disable-next-line react/sort-comp */
  scrollToIndex = (index, cb) => {
    this.registeredElements[index].scrollIntoView();

    if (cb) {
      cb(index);
    }
  };

  /* eslint-disable-next-line react/sort-comp */
  scrollToPreviousItem = (currentIndex, cb = noop) => {
    const previousIndex = currentIndex - 1;

    if (previousIndex < 0) return;

    this.scrollToIndex(previousIndex);

    cb(previousIndex);
  };

  scrollToNextItem = (currentIndex, cb = noop) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex > this.registeredElements.length - 1) return;

    this.scrollToIndex(nextIndex);

    cb(nextIndex);
  };

  scroll = {
    toIndex: this.scrollToIndex,
    toNextItem: this.scrollToNextItem,
    toPreviousItem: this.scrollToPreviousItem
  };

  registeredElements = [];

  unregister = index => {
    delete this.registeredElements[index];
  };

  register = (index, elementRef) => {
    this.registeredElements[index] = elementRef;
  };

  scrollContextValue = {
    scroll: {
      register: this.register,
      unregister: this.unregister
    }
  };

  render() {
    return (
      <ScrollContext.Provider value={this.scrollContextValue}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

ScrollContext.Provider.propTypes = {
  value: PropTypes.shape({
    scroll: PropTypes.shape({
      register: PropTypes.func.isRequired,
      unregister: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};
