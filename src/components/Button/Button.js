import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import theme from '../../System/styles/theme';
import { capitalize, hexToRgba } from '../utils/';

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
    borderRadius: 3,
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
  disabled: {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'default',
    opacity: 0.4
  },
  /* styles appiled to `variant="text"` buttons */
  text: {
    padding: '4px 8px'
  },
  textPrimary: {
    color: theme.colors.blue[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.blue[200], 0.5)
    }
  },
  textSecondary: {
    color: theme.colors.gray[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.gray[200], 0.5)
    }
  },
  textSuccess: {
    color: theme.colors.green[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.green[200], 0.5)
    }
  },
  textWarning: {
    color: theme.colors.orange[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.orange[200], 0.5)
    }
  },
  textDanger: {
    color: theme.colors.red[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.red[200], 0.5)
    }
  },
  textInfo: {
    color: theme.colors.teal[500],
    '&:hover, &:focus': {
      backgroundColor: hexToRgba(theme.colors.teal[200], 0.5)
    }
  },
  /* styles appiled to `variant="outlined"` buttons */
  outlined: {
    padding: '4px 8px'
  },
  outlinedPrimary: {
    border: `1px solid ${theme.colors.blue[500]}`,
    color: theme.colors.blue[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.blue[100]
    }
  },
  outlinedSecondary: {
    border: `1px solid ${theme.colors.gray[500]}`,
    color: theme.colors.gray[700],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[100]
    }
  },
  outlinedSuccess: {
    border: `1px solid ${theme.colors.green[500]}`,
    color: theme.colors.green[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.green[100]
    }
  },
  outlinedWarning: {
    border: `1px solid ${theme.colors.orange[500]}`,
    color: theme.colors.orange[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.orange[100]
    }
  },

  outlinedDanger: {
    border: `1px solid ${theme.colors.red[500]}`,
    color: theme.colors.red[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.red[100]
    }
  },
  outlinedInfo: {
    border: `1px solid ${theme.colors.teal[500]}`,
    color: theme.colors.teal[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.teal[100]
    }
  },
  /* styles appiled to `variant="contained"` buttons */
  contained: {
    padding: '4px 8px'
  },
  containedPrimary: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.blue[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.blue[700]
    }
  },
  containedSecondary: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.gray[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[700]
    }
  },
  containedSuccess: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.green[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.green[700]
    }
  },
  containedWarning: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.orange[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.orange[700]
    }
  },
  containedDanger: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.red[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.red[700]
    }
  },
  containedInfo: {
    color: theme.colors.gray[100],
    backgroundColor: theme.colors.teal[500],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.teal[700]
    }
  }
  /* Pseudo-class applied to the root element if keyboard focused. */
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
