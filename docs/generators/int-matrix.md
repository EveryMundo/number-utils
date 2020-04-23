# int-matrix

# The problem
Have you ever had to do 2 for loops like this:
```js
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    doSomethingWith(someArray[i][j])
  }
}
```

What about 3 dimensions like this
```js
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 5; y++) {
    for (let z = 0; z < 15; z++) {
      doSomethingWith(someArray[x][y][z])
    }
  }
}
```



What if you need more dimensions? Will you write this for loop hell as many times as you need?

What if you need a dynamic number of dimensions? will you write all the possible combinations for your use case?

# The Solution
You can use ```@everymundo/number-utils/int-matrix-asc``` and simplify the the *i* *j* example by doing this:
```js
const intMatrixAsc = requrie('@everymundo/number-utils/int-matrix-asc')

for (const [i, j] of intMatrixAsc([10,5])) {
  doSomethingWith(someArray[i][j])
}
```

And you can simplify the the *x* *y* *z* example by doing this:
```js
const intMatrixAsc = requrie('@everymundo/number-utils/int-matrix-asc')

for (const [x,y,z] of intMatrixAsc([10,5,15])) {
  doSomethingWith(someArray[x][y][z])
}
```

If you run the following code
```js
const intMatrixAsc = requrie('@everymundo/number-utils/int-matrix-asc')

for (const [x,y,z] of intMatrixAsc([0,1,2])) {
  console.log({ x, y, z })
}
```

That will produce
```json
{ x: 0, y: 0, z: 0 }
{ x: 0, y: 0, z: 1 }
{ x: 0, y: 0, z: 2 }
{ x: 0, y: 1, z: 0 }
{ x: 0, y: 1, z: 1 }
{ x: 0, y: 1, z: 2 }
```


## Generating Matrices of Numbers

### CAUTION
These generators do not store the whole variable in memory which gives you the ability to iterate over a huge number of dimensions, but if you try to generate an Array with too many dimensions of high number you'll probably run out of memory

## Arrays Usage

Because it is a generator you could create arrays like this
```js
const intMatrixAsc = requrie('@everymundo/number-utils/int-matrix-asc')

const arr = Array.from(intMatrixAsc([0,1,2]))
console.log(arr)
```

That would produce
```json
[
  [ 0, 0, 0 ],
  [ 0, 0, 1 ],
  [ 0, 0, 2 ],
  [ 0, 1, 0 ],
  [ 0, 1, 1 ],
  [ 0, 1, 2 ]
]
```


And if you want it in the opposite order
```
const intMatrixDesc = requrie('@everymundo/number-utils/int-matrix-desc')

const arrDesc = Array.from(intMatrixDesc([0,1,2]))
console.log(arrDesc)
```

The output will be this:
```json
[
  [ 0, 1, 2 ],
  [ 0, 1, 1 ],
  [ 0, 1, 0 ],
  [ 0, 0, 2 ],
  [ 0, 0, 1 ],
  [ 0, 0, 0 ]
]
```