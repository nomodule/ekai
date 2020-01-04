import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Button from './';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

const colors = {
  Primary: 'primary',
  Secondary: 'secondary',
  Info: 'info',
  Warning: 'warning',
  Danger: 'danger'
};

const variant = {
  Text: 'text',
  Outlined: 'outlined',
  Contained: 'contained'
};

export const overview = () => (
  <>
    <Button
      variant={radios('Variant', variant, 'Text')}
      color={radios('Color', colors, 'Primary')}
      onClick={action('click')}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'Text Button')}
    </Button>
  </>
);
