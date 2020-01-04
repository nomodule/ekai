import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import theme from '../../System/styles/theme';
import capitalize from '../utils/capitalize';

export const useStyles = createUseStyles({
	root: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		// Remove grey highlight
		WebkitTapHighlightColor: 'transparent',
		backgroundColor: 'transparent', // Reset default value
		// We disable the focus ring for mouse, touch and keyboard users.
		outline: 0,
		border: 0,
		margin: 0, // Remove the margin in Safari
		borderRadius: 0,
		padding: 0, // Remove the padding in Firefox
		cursor: 'pointer',
		userSelect: 'none',
		verticalAlign: 'middle',
		'-moz-appearance': 'none', // Reset
		'-webkit-appearance': 'none', // Reset
		textDecoration: 'none',
		// So we take precedent over the style of a native <a /> element.
		color: 'inherit',
		'&::-moz-focus-inner': {
			borderStyle: 'none' // Remove Firefox dotted outline.
		},
		'&$disabled': {}
	},
	/* styles applied to text only buttons */
	text: {
		padding: '4px 8px'
	},
	disabled: {
		pointerEvents: 'none', // Disable link interactions
		cursor: 'default',
		opacity: 0.4
	},
	/* styles appiled to `variant="text"` buttons */
	textPrimary: {
		color: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		}
	},
	textSecondary: {
		color: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	textSuccess: {
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: theme.palette.success.light
		}
	},
	textWarning: {
		color: theme.palette.warning.main,
		'&:hover': {
			backgroundColor: theme.palette.warning.light
		}
	},
	textDanger: {
		color: theme.palette.danger.main,
		'&:hover': {
			backgroundColor: theme.palette.danger.light
		}
	},
	textInfo: {
		color: theme.palette.info.main,
		'&:hover': {
			backgroundColor: theme.palette.info.light
		}
	},
	/* styles appiled to `variant="outlined"` buttons */
	outlined: {
		padding: '4px 8px'
	},
	outlinedPrimary: {
		border: `1px solid ${theme.palette.primary.main}`,
		color: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		}
	},
	outlinedSecondary: {
		border: `1px solid ${theme.palette.secondary.main}`,
		color: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	outlinedSuccess: {
		border: `1px solid ${theme.palette.success.main}`,
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: theme.palette.success.light
		}
	},
	outlinedWarning: {
		border: `1px solid ${theme.palette.warning.main}`,
		color: theme.palette.warning.main,
		'&:hover': {
			backgroundColor: theme.palette.warning.light
		}
	},
	outlinedDanger: {
		border: `1px solid ${theme.palette.danger.main}`,
		color: theme.palette.danger.main,
		'&:hover': {
			backgroundColor: theme.palette.danger.light
		}
	},
	outlinedInfo: {
		border: `1px solid ${theme.palette.info.main}`,
		color: theme.palette.info.main,
		'&:hover': {
			backgroundColor: theme.palette.info.light
		}
	},
	/* styles appiled to `variant="contained"` buttons */
	containedPrimary: {
		color: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		}
	},
	containedSecondary: {
		color: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	containedSuccess: {
		color: theme.palette.success.main,
		'&:hover': {
			backgroundColor: theme.palette.success.light
		}
	},
	containedWarning: {
		color: theme.palette.warning.main,
		'&:hover': {
			backgroundColor: theme.palette.warning.light
		}
	},
	containedDanger: {
		color: theme.palette.danger.main,
		'&:hover': {
			backgroundColor: theme.palette.danger.light
		}
	},
	containedInfo: {
		color: theme.palette.info.main,
		'&:hover': {
			backgroundColor: theme.palette.info.light
		}
	},
	/* Pseudo-class applied to the root element if keyboard focused. */
	focusVisible: {}
});

export function Button(props) {
	const classes = useStyles();
	const { children, color = 'secondary', onClick, variant = 'text', disabled } = props;

	return (
		<button
			className={clsx(classes.root, classes[color], {
				[classes.disabled]: disabled,
				[classes[variant]]: variant,
				[classes[`${variant}${capitalize(color)}`]]: variant && color
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	variant: PropTypes.string,
	disabled: PropTypes.bool,
	color: PropTypes.string
};

export default Button;
