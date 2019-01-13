import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from '../index';

it('render button without crashing', () => {
  shallow(<Button />);
});

it('render default without crashing', () => {
  const wrapper = mount(<Button>Default</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn');
  wrapper.unmount();
});

it('render primary button without crashing', () => {
  const wrapper = mount(<Button type="primary">Primary</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-primary');
  wrapper.unmount();
});

it('render success button without crashing', () => {
  const wrapper = mount(<Button type="success">Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-success');
  wrapper.unmount();
});

it('render warning button without crashing', () => {
  const wrapper = mount(<Button type="warning">Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-warning');
  wrapper.unmount();
});

it('render danger button without crashing', () => {
  const wrapper = mount(<Button type="danger">Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-danger');
  wrapper.unmount();
});

it('render large button without crashing', () => {
  const wrapper = mount(<Button size="large">Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-lg');
  wrapper.unmount();
});

it('render small button without crashing', () => {
  const wrapper = mount(<Button size="small">Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-sm');
  wrapper.unmount();
});

it('render icon and icon position in button without crashing', () => {
  const wrapper = mount(
    <Button icon="A" iconPosition="left">
      Button
    </Button>
  );
  expect(wrapper.find('.compex-btn-icon-left')).toHaveClassName(
    'compex-btn-icon-left'
  );
  wrapper.unmount();
});

it('render block button without crashing', () => {
  const wrapper = mount(<Button block>Button</Button>);
  expect(wrapper.find('.compex-btn')).toHaveClassName('compex-btn-block');
  wrapper.unmount();
});

it('button click ', () => {
  const mockClick = jest.fn();
  const wrapper = shallow(<Button onClick={mockClick}>Button Click</Button>);
  wrapper.find('.compex-btn').simulate('click');
  expect(mockClick).toHaveBeenCalled();
});

it('render disabled button', () => {
  const wrapper = shallow(<Button disabled>Button Click</Button>);
  wrapper.find('.compex-btn').prop('disabled');
});
