import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Input', () => {
  it('Render', () => {
    render(<Input text={'text'} change={jest.fn()} click={jest.fn()}/>);
  });

  it('is there an INPUT and BUTTON', () => {
    const onSearchMock = jest.fn();
    render(<Input change={onSearchMock} text={'1111'} click={jest.fn()} />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toBeInTheDocument();
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });

  it('input value to string', () => {
    render(<Input text={'text'} change={jest.fn()} click={jest.fn()} />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toHaveValue('text');
  });

  it('button 3 click', async () => {
    const func = jest.fn();
    render(<Input change={jest.fn()} text={'text'} click={func} />);
    user.tripleClick(screen.getByTestId('test-id'));
    await waitFor(() => expect(func).toHaveBeenCalledTimes(3), {
      timeout: 1100,
    });
  });

  it('returning data', async () => {
    const funcClick = jest.fn();
    const funcChange = jest.fn(() => {
      return 'Строка';
    });
    render(<Input change={funcChange} text={'text'} click={funcClick} />);
    user.click(screen.getByTestId('test-id'));
    expect(funcChange()).toBeTruthy();
  });

  it('Snapshot', () => {
    const { asFragment } = render(<Input text={'text'} change={jest.fn()} click={jest.fn()}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
