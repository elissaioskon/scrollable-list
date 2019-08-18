# `ScrollableElement`

ScrollableElement component should contain only one child which should be the container of the list item.
That child could be a React component or a html element. React.Fragment is not allowed as 
a child of ScrollableElement. 

ScrollableElement component should be inside a ScrollableView component.

## Usage

Using this library:
```jsx
import React from 'react'
import {ScrollView} from 'Scrollable-list';

const App = () => {
  
  return (
     <ScrollView>
       <div className="list-container">
          <ScrollableElement>
            <div>1</div>
          </ScrollableElement>
          
          <ScrollableElement>
             <div>2</div>       
          </ScrollableElement>
       </div>
    </ScrollView>
  )
}

```

