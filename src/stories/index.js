import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

// import {Button, Welcome} from '@storybook/react/demo';
import Card from '../components/Card';
import Button from '../components/Button';
import {Breadcrumb, BreadcrumbItem} from '../components/Breadcrumb';

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
