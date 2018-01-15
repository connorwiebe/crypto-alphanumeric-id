# crypto-alphanumeric-id

Generate cryptographic, alphanumeric, base62 strings of a given length.

## Installation
`npm i crypto-alphanumeric-id`

## Usage
```javascript
const id = require('crypto-alphanumeric-id')

;(async () => {
  await id(32) //pX3GFDeGYR7tohSVYRBpftRXdcXovuA8
})()
```