# Intro to Jest and Enzyme

## SWBAT
- Learn about different testing software classifications
- Define Jest and learn how it is used
  - test reducers
  - use snapshot testing
- Define and integrate enzyme
  - test if Child Components are rendering
  - test if Components are receiving and rendering props


## Classfications of Testing Software

1. Test Runners
- runs your tests
- Karma - creates a fake server to test your code in multiple browsers

2. Testing Frameworks
- creates a set of rules and tools to create test cases
- Mocha - uses the describe and it structure to allow users to write test cases

3. Assertion Libraries
- plugs into a framework to determine if a condition is valid or not
- Chai - uses conditions like toEqual or exist to test if code meets a the defined condition

4. Testing Plugins
- programs that can be installed to add an additional feature on existing test software
- Sinon plugin includes spies, stubs, and mocks
  spy - a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls
  stubs - functions (spies) with pre-programmed behavior
  mocks -  are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.

## Jest
- JS testing framework, runner, and assertion library by Facebook with a cool snapshot feature
- 'zero configuration' experience, ready to use as is
- already configured in create-react-app applications
- provides code coverage reports to determine how strongly tested your app is
- powerful library for mocking functions

- Docs: https://jestjs.io/docs/en/getting-started

## Enzyme
- JS testing plugin by AirBnB
- Provides higher levels tools to test React components
- Easy to render components (specifically shallow rendering)
- only render one level of components deep
- Uses adapter, requires some setup

- Docs: https://airbnb.io/enzyme/

## Configuration
### Jest
- navigate to your package.json and under the "scripts" section change the value next to "test": to be "jest"
- for snapshot testing you will need to run `npm i react-test-renderer`
and `import renderer from 'react-test-renderer'` into files where you you will be using snapshot testing
- jest looks to run files that end in ".test.js"

### Enzyme
- Run `npm i --save-dev enzyme enzyme-adapter-react-16`
- Navigate to your package.json and at the end incorporate a section that links to your enzyme setup
```
,
"jest": {
"setupFiles": [
  "./src/jestsetup.js"
]
}
```

- create a jestsetup.js in your source folder and paste in this code ```import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
<!-- // React 16 Enzyme adapter -->
Enzyme.configure({ adapter: new Adapter() });
<!-- // Make Enzyme functions available in all test files without importing -->
global.shallow = shallow;
global.render = render;
global.mount = mount;
```

- now you are set to write enzyme tests without having to import the adapter or methods
