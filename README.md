# unq-arr

Simple package to remove duplicates elements in arrays

# Installation

## using npm

    npm i unq-arr

## using yarn

    yarn add unq-arr

# Usage

```javascript
const { unique } = require('unq-arr');
```

```javascript
const arr = unique([🍉,🍉,🍇,🍇,🍓])

console.log(arr)

//  🍉,🍇,🍓
```

### also in nested arrays

```javascript
const arr = unique([[🍉,🍉,🍇],[🍇,🍓,🫐,🍈],🍒])

console.log(arr)

//  🍉,🍇,🍓,🫐,🍈,🍒
```
