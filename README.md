# Scrollable List

<!---
[![CircleCI](https://img.shields.io/circleci/build/gh/elissaioskon/react-use-lifecycle-hooks/master)](https://circleci.com/gh/elissaioskon/lifecycle-hooks/tree/master)
[![Npm](https://img.shields.io/npm/v/react-use-lifecycle-hooks)](https://www.npmjs.com/package/react-use-lifecycle-hooks) 
[![Codecov](https://img.shields.io/codecov/c/github/elissaioskon/lifecycle-hooks)](https://codecov.io/gh/elissaioskon/lifecycle-hooks) 
[![Licence](https://img.shields.io/github/license/elissaioskon/lifecycle-hooks)](https://github.com/elissaioskon/lifecycle-hooks/blob/master/LICENSE)
-->  

> Scroll to an element within a list easily 😃

## Motivation

A common ui scenario is a list with some items. User should be able to move on next item in the list
on some keypress (e.g on down arrow click) and the scroll should move to that element too. 
In order to achieve that with react, a ref should be kept for every list item in order to move scroll 
to that item. This library makes this task easy to achieve. 

```jsx
import React, {useRef, useState} from 'react'

const carsList = [{name:'audi'},{name:'toyota'}, {name:'bmw'}]

const App = () => {
    const ref = useRef()
    const [currentScrollIndex, setCurrentScrollIndex] = useState(0)
    
    return (
      <>
          <ScrollView ref={ref}}>
              <div className="list-container">
                {carsList.map(({name}) => (
                   <ScrollableElement>
                      <div className="list-item">{name}</div>
                   </ScrollableElement>
                )}
              </div>
          </ScrollView>
          
         <button onClick = {()=> ref.current.scroll.toPreviousItem(currentScrollIndex, setCurrentScrollIndex)}>Scroll to Previous</button>
         <button onClick = {()=> ref.current.scroll.toNextItem(currentScrollIndex, setCurrentScrollIndex)}>Scroll to Next</button>
         <button onClick = {()=> ref.current.scroll.toIndex(5, setCurrentScrollIndex)}>Scroll to fifth Item</button>
      </>
    )
}
```

<br>

### Install

- Using yarn   
    yarn add @elissaioskon/scrollable-list
 
- Using npm   
    npm install @elissaioskon/scrollable-list 
 

### API

- [`ScrollView`](./docs/ScrollView.md) 
- [`ScrollableElement`](./docs/ScrollableElement.md) 

