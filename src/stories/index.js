import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import CurrentOrder from '../CurrentOrder';
import MenuItem from '../MenuItem';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('CurrentOrder', module)
  .add('Empty', () => (
    <CurrentOrder />
  ))
  .add('with some items added', () => (
    <CurrentOrder />
  )); 

storiesOf('MenuItem', module)
  .add('empty', () => (
    <MenuItem name="" allergens={[]}/>
  ))
  .add('singleItem', () => (
    <MenuItem name="Burger" allergens={["Wheat", "Dairy"]} />
  ));