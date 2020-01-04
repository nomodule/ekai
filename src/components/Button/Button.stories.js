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
	Outlined: 'outlined'
};

export const overview = () => (
	<>
		<Button
			variant={radios('Variant', variant, 'Text')}
			color={radios('Color', colors, 'Primary')}
			onClick={action('click')}
			disabled={boolean('Disabled', false)}
		>
			{text('Label', 'Button')}
		</Button>
	</>
);

// export const defaultButton = () => (
//   <Button onClick={action('clicked')}>Hello Button</Button>
// );

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
