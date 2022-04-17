import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavChatItem} from "./navChatItem";


describe('NavChatItem', () => {
    it('Render', ()=> {
        render(<NavChatItem link={'#'} title={'Название'} key={1} />)
    })

    it('Is Element', () => {
        render(<NavChatItem link={'#'} title={'Название'} key={1} />)
        const link = screen.getByText('Название');
        expect(link).toBeInTheDocument();
    })

    it('Snapshot', () => {
        const {asFragment} = render(<NavChatItem link={'#'} title={'Название'} key={1} />)
        expect(asFragment()).toMatchSnapshot();
    })
})