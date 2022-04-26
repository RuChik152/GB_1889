import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Question } from './question';
import userEvent from '@testing-library/user-event';

describe('Question', () => {
  it('Render', () => {
    render(<Question />);
  });

  it('Find input field and button', () => {
    const { getByPlaceholderText, getByRole } = render(<Question />);
    const inputText = getByPlaceholderText(/Ваше Имя/i);
    const btn = getByRole('button');
    expect(inputText).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Text in INPUT', () => {
    const { getByPlaceholderText } = render(
      <Question author={'test_name'} quest={jest.fn()} change={jest.fn()} />
    );
    const inputText = getByPlaceholderText(/Ваше Имя/i);
    expect(inputText.value).toMatch(String());
  });

  it('Click to button', async () => {
    const handelClick = jest.fn();
    const { getByRole } = render(<Question quest={handelClick} />);
    const btn = getByRole('button');
    await userEvent.click(btn);
    expect(handelClick).toHaveBeenCalledTimes(1);
  });

  it('Snapshot', () => {
    const { asFragment } = render(<Question />);
    expect(asFragment()).toMatchSnapshot();
  });
});
