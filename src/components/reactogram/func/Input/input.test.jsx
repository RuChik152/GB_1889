import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Input', () => {
  it('Render', () => {
    render(
      <Input
        text={'text'}
        author={'admin'}
        change={jest.fn()}
        click={jest.fn()}
      />
    );
  });

  it('is there an INPUT and BUTTON', () => {
    const onSearchMock = jest.fn();
    render(<Input change={onSearchMock} text={'1111'} />);
    expect(screen.getByPlaceholderText('Ваше сообщение')).toBeInTheDocument();
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });

  it('Snapshot', () => {
    const { asFragment } = render(
      <Input
        author={'admin'}
        text={'text'}
        change={jest.fn()}
        click={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('input value to string', () => {
    render(<Input change={jest.fn()} text={'text'} />);
    expect(screen.getByPlaceholderText('Ваше сообщение').value).toMatch(
      String()
    );
  });

  it('button 3 click', async () => {
    const func = jest.fn();
    render(<Input change={jest.fn()} text={'text'} click={func} />);
    await user.click(screen.getByTestId('test-id'));
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('returning data', () => {
    render(<Input />);
    const item = screen.getByTestId('test-id')
    item.value = 'test';
    expect(item.value).toBe('test');
  });
});
