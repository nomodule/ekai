import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

describe('<Button />', () => {
  it('should render button without crashing', () => {
    const { getByRole } = render(<Button>Hello world</Button>);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should render disabled button', () => {
    const { getByRole } = render(<Button disabled>Text Button</Button>);
    expect(getByRole('button')).toBeDisabled();
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  it('matches snapshop', () => {
    const { asFragment } = render(<Button>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
