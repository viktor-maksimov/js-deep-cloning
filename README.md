# Javascript Deep Cloning

Javascript deep cloning, so pointers are lost.

<br />

<a href="https://www.npmjs.com/package/js-deep-cloning">
  <img src="https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" />
</a>

<a href="https://www.npmjs.com/package/js-deep-cloning">
  <img src="https://camo.githubusercontent.com/cf80a63dc680fa3e0d2f6b729fea1a0a14ae5a1e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f7665726167652d3130302532352d627269676874677265656e2e737667" />
</a>

<a href="https://www.npmjs.com/package/js-deep-cloning">
  <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
</a>

## Usage

### Install the package

package.json
```
{
  "dependencies": {
    "js-deep-cloning": "latest"
  }
}
```

After that (with Yarn):
```
yarn install
```

Or with NPM:
```
npm install
```

And finally you can use it in your project:
```
import { deepClone } from "js-deep-cloning"

const student = {
  id: 1,
  name: "Jack",
  items: ["pen", "rubber", "textbook", "tablet"],
  examDate: new Date(),
  classmates: [
    {
      id: 2,
      name: "John",
      items: null,
      examDate: new Date()
    },
    {
      id: 2,
      name: "James",
      items: ["pencil", "laptop"],
      exams: [new Date(), new Date()]
    }
  ],
  university: null
}

const studentData = deepClone(student)
```

## Contribution

Everybody can contribute

### Useful commands (examples with yarn)

Build your code:
```
yarn build
```

Run tests:
```
yarn test
```

Generate test coverage:
```
yarn test:coverage
```

Run ESLint:
```
yarn lint
```

### Important

Please before opening a PR for this package - run tests and eslint and fix the errors in your code.

## License

MIT