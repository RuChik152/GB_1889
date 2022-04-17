import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Reactogram } from './main';

describe('Main', () => {
  it('Render', () => {
    render(<Reactogram data={'TEST_NAME'} />);
  });

  it('Render input and button', () => {
    const { getByPlaceholderText, getByTestId } = render(<Reactogram data={'TEST_NAME'} />);
    const inputText = getByPlaceholderText('Ваше сообщение');
    const btn = getByTestId('test-id');
    expect(inputText).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('render chat', () => {
    const { getByTestId } = render(<Reactogram data={'TEST_NAME'} />);
    const el = getByTestId('chat-test');
    expect(el).toBeInTheDocument();
  });

  it('Snapshot', () => {
    const { asFragment } = render(<Reactogram data={'TEST_NAME'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
