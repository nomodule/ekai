import { addParameters, configure } from '@storybook/react';
import './styles.css';
addParameters({
	options: {
		showPanel: true
	}
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
