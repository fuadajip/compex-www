import React from 'react';
import {shallow, mount} from 'enzyme';
import Badge from '../index';

it('render badge without crashing', () => {
  shallow(<Badge />);
});

it('render default badge without crashing', () => {
  const wrapper = mount(<Badge>Default</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName('compex-badge-pill');
  wrapper.unmount();
});

it('render hoverable badge without crashing', () => {
  const wrapper = mount(<Badge hoverable>hoverable</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName(
    'compex-badge-hoverable'
  );
  wrapper.unmount();
});

it('render primary badge without crashing', () => {
  const wrapper = mount(<Badge type="primary">primary</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName('compex-badge-primary');
  wrapper.unmount();
});
it('render success badge without crashing', () => {
  const wrapper = mount(<Badge type="success">success</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName('compex-badge-success');
  wrapper.unmount();
});
it('render warning badge without crashing', () => {
  const wrapper = mount(<Badge type="warning">warning</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName('compex-badge-warning');
  wrapper.unmount();
});
it('render danger badge without crashing', () => {
  const wrapper = mount(<Badge type="danger">warning</Badge>);
  expect(wrapper.find('.compex-badge')).toHaveClassName('compex-badge-danger');
  wrapper.unmount();
});
