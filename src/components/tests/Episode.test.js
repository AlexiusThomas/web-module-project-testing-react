import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    name: "",
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1
}

const testEpisodeNoImage = {
    id: 1,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={testEpisode} />)
    const summary = screen.queryByText(/test summary/i)
    expect(summary).toBeInTheDocument()
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent("test summary")
});

test("renders default image when image is not defined", () => { 
    render(<Episode episode={testEpisodeNoImage} />)
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(image).toBeInTheDocument()
});