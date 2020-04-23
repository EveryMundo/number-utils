# number-utils
Utility library with useful functions to deal with common number tasks

## Features
* [lib/boundaries](#lib-boundaries)
* [generators/int-matrix](docs/int-matrix)


### lib/boundaries
Whenever you want a variable numeric input to between 2 other values
and if it is lower than the minimum it returns the minimum but if it
is greater than the maximum it returns the maximum you can use this function

#### lib/boundaries Usage
```js
const boundaries = require('@everymundo/number-utils/lib/boundaries')

// Let's say you are trusting an environmental variable to set some setting
// but if it is not there you want it to have a default value

// boundaries(input, MIN, MAX, defaultNumber)
const SOME_NUMBER = boundaries(process.env.SOME_NUMBER, 10, 100, 50)
```
