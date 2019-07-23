import React from 'react';

import { render } from '@testing-library/react';

import { ScrollView, ScrollableElement } from '../..';

/* eslint-disable-next-line react/prop-types */
const ListContainer = ({ children }) => (
  <div style={{ height: '300px', overflow: 'auto' }}>{children}</div>
);

/* eslint-disable-next-line react/prop-types */
const ListItem = ({ children }) => (
  <div style={{ height: '150px' }}>{children}</div>
);

const items = [0, 1, 2, 3, 4, 5, 6, 7];

const App = React.forwardRef((props, ref) => (
  <ScrollView ref={ref}>
    <ListContainer>
      {items.map(item => (
        <ScrollableElement index={item} key={item}>
          <ListItem>
            Item:
            {item}
          </ListItem>
        </ScrollableElement>
      ))}
    </ListContainer>
  </ScrollView>
));

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Scrollable-list library', () => {
  // ScrollIntoView is not implemented in JSdom so we need to mock it.
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  it('should scroll to appropriate list item when scroll.toIndex is called', () => {
    const scrollViewRef = React.createRef();

    const scrollToLastElement = () =>
      scrollViewRef.current.scroll.toIndex(items.length - 1);

    render(<App ref={scrollViewRef} />);
    scrollToLastElement();

    expect(
      scrollViewRef.current.registeredElements[items.length - 1].scrollIntoView
    ).toHaveBeenCalledTimes(1);
  });

  it('should scroll to next list item when scroll.toNextItem is called', () => {
    const scrollViewRef = React.createRef();

    render(<App ref={scrollViewRef} />);
    scrollViewRef.current.scroll.toIndex(0);

    expect(
      scrollViewRef.current.registeredElements[1].scrollIntoView
    ).toHaveBeenCalledTimes(1);
  });

  it('should scroll to previous list item when scroll.toNextItem is called', () => {
    const scrollViewRef = React.createRef();

    render(<App ref={scrollViewRef} />);
    scrollViewRef.current.scroll.toIndex(1);

    expect(
      scrollViewRef.current.registeredElements[0].scrollIntoView
    ).toHaveBeenCalledTimes(1);
  });
});
