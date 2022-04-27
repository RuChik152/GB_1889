import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Input', () => {
  it('Render', () => {
    render(<Input change={jest.fn()} />);
  });

  it('is there an INPUT and BUTTON', () => {
    const onSearchMock = jest.fn();
    render(<Input change={onSearchMock} />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toBeInTheDocument();
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });

  it('input value to string', () => {
    render(<Input  change={jest.fn()} />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toHaveValue('text');
  });

  it('button 3 click', async () => {
    const func = jest.fn();
    render(<Input change={jest.fn()} />);
    user.tripleClick(screen.getByTestId('test-id'));
    await waitFor(() => expect(func).toHaveBeenCalledTimes(3), {
      timeout: 1100,
    });
  });


  it('Snapshot', () => {
    const { asFragment } = render(<Input change={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
