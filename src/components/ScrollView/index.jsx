import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext();

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
  scrollToPreviousItem = (currentIndex, cb) => {
    const previousIndex = currentIndex - 1;

    if (previousIndex <= 0) return;

    this.scrollToIndex(previousIndex);

    if (cb) {
      cb(previousIndex);
    }
  };

  scrollToNextItem = (currentIndex, cb) => {
    const nextIndex = currentIndex + 1;

    if (nextIndex > this.registeredElements.length) return;

    this.scrollToIndex(nextIndex);

    if (cb) {
      cb(nextIndex);
    }
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
