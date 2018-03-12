import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CurrentOrder from '../CurrentOrder';

storiesOf('CurrentOrder', module)
  .add('Empty', () => (
    <CurrentOrder />
  ))
  .add('with some items added', () => (
    <CurrentOrder />
  )); 