import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import theme from '../../System/styles/theme';

export const useStyles = createUseStyles({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    width: '100%',
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.gray[700],
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    border: `1px solid ${theme.colors.gray[300]}`
  }
});

export function Input() {
  const classes = useStyles();
  return <input className={clsx(classes.root)} />;
}

export default Input;
