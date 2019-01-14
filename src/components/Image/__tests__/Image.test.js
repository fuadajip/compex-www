import React from 'react';
import {shallow, mount} from 'enzyme';
import Image from '../index';

it('render image without crashing', () => {
  shallow(<Image />);
});

it('render default image without crashing', () => {
  const wrapper = mount(
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
    />
  );
  expect(wrapper.find('.compex-image')).toHaveClassName('compex-image');
  wrapper.unmount();
});

it('render circle image without crashing', () => {
  const wrapper = mount(
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      type="circle"
    />
  );
  expect(wrapper.find('.compex-image')).toHaveClassName('compex-image-circle');
  wrapper.unmount();
});
it('render square image without crashing', () => {
  const wrapper = mount(
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      type="square"
    />
  );
  expect(wrapper.find('.compex-image')).toHaveClassName('compex-image-square');
  wrapper.unmount();
});

it('render square image without crashing', () => {
  const wrapper = mount(
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      size={[480, 480]}
    />
  );
  expect(wrapper.find('.compex-image').prop('size'));
  wrapper.unmount();
});
