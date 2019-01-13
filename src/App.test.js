import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('render paragraph in App', () => {
  const wrapper = shallow(<App />);
  const paragraph = (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
  expect(wrapper.contains(paragraph)).toEqual(true);
});

it('render paragraph in App 2', () => {
  const wrapper = shallow(<App />);
  const paragraph = (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
  expect(wrapper).toContainReact(paragraph);
});
