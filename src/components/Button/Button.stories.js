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

export const playground = () => (
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

export const kitchenSink = () => (
  <div className="button-example">
    <Button variant="text" color="primary">
      Button
    </Button>
    <Button variant="text" color="secondary">
      Button
    </Button>
    <Button variant="text" color="info">
      Button
    </Button>
    <Button variant="text" color="warning">
      Button
    </Button>
    <Button variant="text" color="danger">
      Button
    </Button>
    <br />
    <br />
    <Button variant="contained" color="primary">
      Button
    </Button>
    <Button variant="contained" color="secondary">
      Button
    </Button>
    <Button variant="contained" color="info">
      Button
    </Button>
    <Button variant="contained" color="warning">
      Button
    </Button>
    <Button variant="contained" color="danger">
      Button
    </Button>
    <br />
    <br />
    <Button variant="outlined" color="primary">
      Button
    </Button>
    <Button variant="outlined" color="secondary">
      Button
    </Button>
    <Button variant="outlined" color="info">
      Button
    </Button>
    <Button variant="outlined" color="warning">
      Button
    </Button>
    <Button variant="outlined" color="danger">
      Button
    </Button>
  </div>
);
