import React from 'react';
import { render, waitFor,  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Question } from './question';
import userEvent from '@testing-library/user-event';

describe('Question', () => {
  it('Render', () => {
    render(<Question author={'test_name'} quest={jest.fn()} change={jest.fn()} />);
  });

  it('Find input field and button', () => {
    const { getByPlaceholderText, getByRole } = render(<Question author={'test_name'} quest={jest.fn()} change={jest.fn()} />);
    const inputText = getByPlaceholderText(/Ваше Имя/i);
    const btn = getByRole('button');
    expect(inputText).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Text in INPUT', () => {
    render(<Question author={'test_name'} quest={jest.fn()} change={jest.fn()} />);
    const link = screen.getByPlaceholderText(/Ваше Имя/i);
    expect(link).toHaveValue('test_name');
  });

  it('Click to button', async () => {
    const handelClick = jest.fn();
    const { getByRole } = render(<Question quest={handelClick} author={'test_name'} change={jest.fn()}/>);
    const btn = getByRole('button');
    userEvent.click(btn);
    await waitFor(() => expect(handelClick).toHaveBeenCalledTimes(1), {
      timeout: 1000,
    });
  });

  it('Snapshot', () => {
    const { asFragment } = render(<Question author={'test_name'} quest={jest.fn()} change={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
