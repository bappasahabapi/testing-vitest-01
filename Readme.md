### 01-Basic Setup

- Install a brand new project
    -` yarn init -y`
    -` yarn add vitest -D`
- To run the test case first write a script file in the **package json.**

```json
{
  "name": "Vitest-01",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "vitest": "^0.34.6"
  }
}


```
- To run the tests
    -`yarn test`

### 02-AAA Pattern

- Arrange the data
- Perform the action
- Evaluate the expectations