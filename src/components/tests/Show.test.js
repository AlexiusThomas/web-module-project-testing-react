import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const show = {
    image: '',
    name: 'Stranger Things',
    seasons: [{name: 'Season 1', episodes: [], id: 1}, {name: 'season 2', episodes: [], id: 1}],
    summary: 'This is a summary'
}

test('renders without errors', () => {
    render(<Show />)
 });

test('renders Loading component when prop show is null', async () => {
    render(<Show />)

    const test = await screen.findByText(/Fetching data.../i);

    expect(test).toBeTruthy();
 });

test('renders same number of options seasons are passed in', async () => {
    // render(<Show show={show}/>)

    // const test = await screen.findAllByTestId('season-option')

    // expect(test).toHaveLength(2);
 });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });