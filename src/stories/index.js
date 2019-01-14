import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

// import {Button, Welcome} from '@storybook/react/demo';
import Card from '../components/Card';
import Button from '../components/Button';
import {Breadcrumb, BreadcrumbItem} from '../components/Breadcrumb';
import Alert from '../components/Alert';
import Badge from '../components/Badge';
import Image from '../components/Image';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Card', module).add('compex card', () => (
  <Card
    title={'My Header Is Super Awesome And Fabolous'}
    hoverable
    // size="small"
    extra={
      <a href="/" id="extra">
        More
      </a>
    }
    cover="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    // style={{width: '240px'}}
    footer={'My Footer'}>
    Content body
  </Card>
));

storiesOf('Button', module)
  .add('default', () => (
    <div style={{width: '360px'}}>
      <Button
        onClick={e => {
          console.log('clicked');
        }}>
        Default button
      </Button>
    </div>
  ))
  .add('disabled', () => (
    <div style={{width: '360px'}}>
      <Button disabled>Disabled button</Button>
    </div>
  ))
  .add('primary', () => (
    <div style={{width: '360px'}}>
      <Button type="primary" icon="A" iconPosition="left" size="large" block>
        Primary button
      </Button>
    </div>
  ))
  .add('success', () => (
    <div style={{width: '360px'}}>
      <Button type="success" icon="A" iconPosition="right">
        Success button
      </Button>
    </div>
  ))
  .add('warning', () => (
    <div style={{width: '360px'}}>
      <Button type="warning" icon="A" iconPosition="right">
        Warning button
      </Button>
    </div>
  ))
  .add('danger', () => (
    <div style={{width: '360px'}}>
      <Button type="danger" icon="A" iconPosition="left" size="small" block>
        Danger button
      </Button>
    </div>
  ));

storiesOf('Breadcrumb', module)
  .add('default', () => (
    <div style={{width: '240px'}}>
      <Breadcrumb>
        <BreadcrumbItem>Story</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Book 2</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Awesome</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ))
  .add('custom separator', () => (
    <div style={{width: '240px'}}>
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <a href="/">Story</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Book 2</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Awesome</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ));

storiesOf('Alert', module)
  .add('default', () => <Alert title={'My Alert Title'}>Alert body</Alert>)
  .add('primary', () => (
    <Alert title={'My Alert Title'} type="primary">
      Alert body
    </Alert>
  ))
  .add('success', () => (
    <Alert title={'My Alert Title'} type="success">
      Alert body
    </Alert>
  ))
  .add('warning', () => (
    <Alert title={'My Alert Title'} type="warning">
      Alert body
    </Alert>
  ))
  .add('danger', () => (
    <Alert title={'My Alert Title'} type="danger">
      Alert body
    </Alert>
  ))
  .add('onClose', () => (
    <Alert
      title={'My Alert Title'}
      closeIcon
      onClose={e => {
        console.log('on close alert');
      }}>
      Alert body onClose
    </Alert>
  ));

storiesOf('Badge', module)
  .add('default', () => <Badge hoverable>Default badge</Badge>)
  .add('not hoverable', () => <Badge>not hoverable</Badge>)
  .add('primary', () => (
    <Badge type="primary" hoverable>
      primary
    </Badge>
  ))
  .add('success', () => <Badge type="success">success</Badge>)
  .add('warning', () => <Badge type="warning">warning</Badge>)
  .add('danger', () => <Badge type="danger">warning</Badge>);
storiesOf('Image', module)
  .add('default', () => (
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
    />
  ))
  .add('circle', () => (
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      type="circle"
    />
  ))
  .add('square', () => (
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      type="square"
    />
  ))
  .add('custom size', () => (
    <Image
      src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
      alt="my-image"
      type="square"
      size={[320, 320]}
    />
  ));
