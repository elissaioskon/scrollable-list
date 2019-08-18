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

describe('Scrollable-list library', () => {
  // ScrollIntoView is not implemented in JSdom so we need to mock it.
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  it('should scroll to appropriate list item and should call cb when scroll.toIndex is called', () => {
    const scrollViewRef = React.createRef();
    const cb = jest.fn();

    const indexToScroll = 2;

    render(<App ref={scrollViewRef} />);
    scrollViewRef.current.scroll.toIndex(indexToScroll, cb);

    expect(
      scrollViewRef.current.registeredElements[indexToScroll].scrollIntoView
    ).toHaveBeenCalledTimes(1);

    expect(cb).toHaveBeenNthCalledWith(1, indexToScroll);
  });

  it('should scroll to next list item and should call cb when scroll.toNextItem is called', () => {
    const scrollViewRef = React.createRef();
    const cb = jest.fn();

    render(<App ref={scrollViewRef} />);
    scrollViewRef.current.scroll.toNextItem(0, cb);

    expect(
      scrollViewRef.current.registeredElements[1].scrollIntoView
    ).toHaveBeenCalledTimes(1);

    expect(cb).toHaveBeenNthCalledWith(1, 1);
  });

  it("should not scroll when scroll.toNextItem is called with first argument the last item's index", () => {
    const scrollViewRef = React.createRef();
    const cb = jest.fn();

    render(<App ref={scrollViewRef} />);

    const lastElementIndex = items.length - 1;
    scrollViewRef.current.scroll.toNextItem(lastElementIndex, cb);

    expect(
      scrollViewRef.current.registeredElements[lastElementIndex].scrollIntoView
    ).not.toHaveBeenCalled();

    expect(cb).not.toHaveBeenCalled();
  });

  it('should scroll to previous list item and should not call cb when scroll.toNextItem is called', () => {
    const scrollViewRef = React.createRef();
    const cb = jest.fn();

    render(<App ref={scrollViewRef} />);
    scrollViewRef.current.scroll.toPreviousItem(1, cb);

    expect(
      scrollViewRef.current.registeredElements[0].scrollIntoView
    ).toHaveBeenCalledTimes(1);

    expect(cb).toHaveBeenNthCalledWith(1, 0);
  });

  it('should not scroll and should not call cb when scroll.toPreviousItem is called with first argument 0', () => {
    const scrollViewRef = React.createRef();
    const cb = jest.fn();

    render(<App ref={scrollViewRef} />);

    scrollViewRef.current.scroll.toPreviousItem(0, cb);

    expect(
      scrollViewRef.current.registeredElements[0].scrollIntoView
    ).not.toHaveBeenCalled();

    expect(cb).not.toHaveBeenCalled();
  });
});
