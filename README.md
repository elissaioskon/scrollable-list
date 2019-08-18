# Scrollable List

<!---
[![CircleCI](https://img.shields.io/circleci/build/gh/elissaioskon/react-use-lifecycle-hooks/master)](https://circleci.com/gh/elissaioskon/lifecycle-hooks/tree/master)
[![Npm](https://img.shields.io/npm/v/react-use-lifecycle-hooks)](https://www.npmjs.com/package/react-use-lifecycle-hooks) 
[![Codecov](https://img.shields.io/codecov/c/github/elissaioskon/lifecycle-hooks)](https://codecov.io/gh/elissaioskon/lifecycle-hooks) 
[![Licence](https://img.shields.io/github/license/elissaioskon/lifecycle-hooks)](https://github.com/elissaioskon/lifecycle-hooks/blob/master/LICENSE)
-->

> Scroll to an element within a list easily

## Motivation

A common ui scenario is a list with some elements. User should be able to move on next element in the list
on some keypress (e.g down button) and the scroll should move to that element too. In order to achieve that with react
we should keep ref for every list item and move scroll to that ref on some event. This library makes this task 
easy to achieve. 

```jsx
import React from 'react'

const App = () => {
    const cars = [{name:'audi'},{name:'toyota'}, {name:'bmw'}]
    const ref = useRef()
    
    return (
      <React.Fragment>
          <ScrollView ref={ref}}>
            {cars.map(({name}) => (
               <ScrollableElement>
                  {name}
               </ScrollableElement>
            )}
          </ScrollView>
          
         <button onClick = {()=> ref.current.scroll.toNextItem()}></button>
         <button onClick = {()=> ref.current.scroll.toPreviousItem()}></button>
         <button onClick = {()=> ref.current.scroll.toIndex(5)}></button>
      </React.Fragment>
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


/*
TESTS
API README COMPONENTS
BADGES
TEST AGAIN IF IT WORKS, CODESANDBOX with emoticons, update readme with emoticons, publish


*/