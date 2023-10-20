import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const allData = [
    {
      "name": "Bulbasaur",
      "region": "Kanto",
      "type": "Grass/Poison",
      "nickname": "Seed Pokemon",
      "number": "0001",
      "id": 1
    },
    {
      "name": "Chikorita",
      "region": "Johto",
      "type": "Grass",
      "nickname": "Leaf Pokemon",
      "number": "0152",
      "id": 2
    },
    {
      "name": "Treecko",
      "region": "Hoen",
      "type": "Grass",
      "nickname": "Wood Gecko Pokemon",
      "number": "0252",
      "id": 3
    },
    {
      "name": "Turtwig",
      "region": "Sinnoh",
      "type": "Grass",
      "nickname": "Tiny Leaf Pokemon",
      "number": "0387",
       "id": 4
    }
  ]

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /List of Pokemon/i,
    })

    expect(heading).toBeInTheDocument()
});

it('renders a link', () => {
  render(<Home allData={allData} />);

  const aLink = screen.getByRole('link', {
    name: /Turtwig/i,
  });

  expect(aLink).toBeInTheDocument()
});
})