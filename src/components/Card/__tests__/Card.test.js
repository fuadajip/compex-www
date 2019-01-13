import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../index';

it('render card without crashing', () => {
  shallow(<Card />);
});

it('render card with title', () => {
  const title = 'Lorem ipsum';
  const wrapper = mount(<Card title={title} />);
  expect(wrapper.find('.compex-card-head-title')).toHaveLength(1);
  wrapper.unmount();
});

it('render card with title and extra', () => {
  const title = 'Lorem ipsum';
  const extra = (
    <a href="/" id="extra">
      More
    </a>
  );
  const wrapper = mount(<Card title={title} extra={extra} />);
  expect(wrapper.find('.compex-card-head-title')).toHaveLength(1);
  expect(wrapper.find('.compex-card-head-action')).toHaveLength(1);
  wrapper.unmount();
});

it('render card with small size', () => {
  const size = 'small';
  const wrapper = mount(<Card size={size}>Body</Card>);
  expect(wrapper.find('.compex-card')).toHaveClassName('compex-card-small');
  wrapper.unmount();
});

it('render card with custom style', () => {
  const style = {width: '240px'};
  const wrapper = mount(<Card style={style}>Body</Card>);
  expect(wrapper.find('.compex-card')).toHaveStyle(style);
  wrapper.unmount();
});

it('render card with body', () => {
  const wrapper = mount(<Card>Body</Card>);
  expect(wrapper.find('.compex-card-body')).toHaveClassName('compex-card-body');
  wrapper.unmount();
});

it('render card with image cover', () => {
  const cover = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
  const wrapper = mount(<Card cover={cover}>Body</Card>);
  expect(wrapper.find('.compex-card-cover')).toHaveClassName(
    'compex-card-cover'
  );
  wrapper.unmount();
});

it('render hoverable card', () => {
  const wrapper = mount(<Card hoverable>Body</Card>);
  expect(wrapper.find('.compex-card')).toHaveClassName('compex-card-hover');
  wrapper.unmount();
});

it('render card with footer', () => {
  const wrapper = mount(<Card footer={'My Footer'}>Body</Card>);
  expect(wrapper.find('.compex-card-footer')).toHaveClassName(
    'compex-card-footer'
  );
  wrapper.unmount();
});
