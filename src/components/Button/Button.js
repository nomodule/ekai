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
    border: '1px solid transparent',
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
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.light
    }
  },
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  textSuccess: {
    color: theme.palette.success.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.success.light
    }
  },
  textWarning: {
    color: theme.palette.warning.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.warning.light
    }
  },
  textDanger: {
    color: theme.palette.danger.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.danger.light
    }
  },
  textInfo: {
    color: theme.palette.info.main,
    '&:hover, &:focus': {
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
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.light
    }
  },
  outlinedSecondary: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  outlinedSuccess: {
    border: `1px solid ${theme.palette.success.main}`,
    color: theme.palette.success.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.success.light
    }
  },
  outlinedWarning: {
    border: `1px solid ${theme.palette.warning.main}`,
    color: theme.palette.warning.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.warning.light
    }
  },
  outlinedDanger: {
    border: `1px solid ${theme.palette.danger.main}`,
    color: theme.palette.danger.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.danger.light
    }
  },
  outlinedInfo: {
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.info.light
    }
  },
  /* styles appiled to `variant="contained"` buttons */
  contained: {
    padding: '4px 8px'
  },
  containedPrimary: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.primary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  containedSecondary: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.secondary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  containedSuccess: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.success.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  containedWarning: {
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.warning.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  containedDanger: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.danger.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.danger.dark
    }
  },
  containedInfo: {
    color: theme.palette.text.light,
    backgroundColor: theme.palette.info.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.info.dark
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
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default Button;
