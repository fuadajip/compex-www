import React from 'react';
import {shallow, mount} from 'enzyme';
import {Breadcrumb, BreadcrumbItem} from '../index';

it('render breadcrumb without crashing', () => {
  shallow(<Breadcrumb />);
});

it('render breadcrumb with breadcrumb item', () => {
  const wrapper = mount(
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">Product</a>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  expect(wrapper.find('.compex-breadcrumb-link')).toHaveClassName(
    'compex-breadcrumb-link'
  );
  wrapper.unmount();
});

it('render breadcrumb with custom separator', () => {
  const wrapper = mount(
    <Breadcrumb separator=">">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">Product</a>
      </BreadcrumbItem>
    </Breadcrumb>
  );
  wrapper.find('.compex-breadcrumb').prop('separator');
});
