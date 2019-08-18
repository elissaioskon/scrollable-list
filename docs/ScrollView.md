# `ScrollView`

ScrollView component should contain only one child which should be the container of the list.
That child could be a React component or a html element. React.Fragment is not allowed as 
a child of ScrollView. 

ScrollView child should contain one or more ScrollableElement children

Keeping a ref for ScrollView Component provides access to 3 instance methods

- scroll.toIndex(indexToScroll, cb)
- scroll.toNextItem(currentScrollIndex, cb)
- scroll.toPreviousItem(currentScrollIndex, cb)

## Usage

Using this library:
```jsx
import React, {useRef} from 'react'
import {ScrollView} from 'Scrollable-list';

const App = () => {
  const ref = useRef()
  
  return (
     <ScrollView ref={useRef}>
       <div className="list-container">
          ...
       </div>
    </ScrollView>
  )
}

```

