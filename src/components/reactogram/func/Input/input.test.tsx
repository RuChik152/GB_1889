import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Input', () => {
  it('Render', () => {
    render(<Input />);
  });

  it('is there an INPUT and BUTTON', () => {
    render(<Input />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toBeInTheDocument();
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });

  it('input value to string', () => {
    render(<Input />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toHaveValue('text');
  });

  it('button 3 click', async () => {
    const func = jest.fn();
    render(<Input />);
    await user.tripleClick(screen.getByTestId('test-id'));
    await expect(func).toHaveBeenCalledTimes(3)
  });


  it('Snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
