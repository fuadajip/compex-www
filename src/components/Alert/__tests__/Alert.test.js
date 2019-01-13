import React from 'react';
import {shallow, mount} from 'enzyme';
import Alert from '../index';

it('render breadcrumb without crashing', () => {
  shallow(<Alert>My alert</Alert>);
});

it('render alert type success', () => {
  const wrapper = mount(<Alert type="success">My Alert</Alert>);
  expect(wrapper.find('.compex-alert')).toHaveClassName('compex-alert-success');
  wrapper.unmount();
});

it('render alert type primary', () => {
  const wrapper = mount(<Alert type="primary">My Alert</Alert>);
  expect(wrapper.find('.compex-alert')).toHaveClassName('compex-alert-primary');
  wrapper.unmount();
});

it('render alert type warning', () => {
  const wrapper = mount(<Alert type="warning">My Alert</Alert>);
  expect(wrapper.find('.compex-alert')).toHaveClassName('compex-alert-warning');
  wrapper.unmount();
});

it('render alert type danger', () => {
  const wrapper = mount(<Alert type="danger">My Alert</Alert>);
  expect(wrapper.find('.compex-alert')).toHaveClassName('compex-alert-danger');
  wrapper.unmount();
});

it('render alert with closeIcon prop', () => {
  const wrapper = mount(<Alert closeIcon>My Alert</Alert>);
  expect(wrapper.find('.compex-close-icon')).toHaveClassName(
    'compex-close-icon'
  );
  wrapper.unmount();
});

it('render alert an action onClose', () => {
  const mockClick = jest.fn();
  const wrapper = shallow(
    <Alert closeIcon onClose={mockClick}>
      Alert click
    </Alert>
  );
  wrapper.find('.compex-close-icon').simulate('click');
  expect(mockClick).toHaveBeenCalled();
});
