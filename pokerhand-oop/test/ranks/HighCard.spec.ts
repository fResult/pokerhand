import { Hand } from '~/Hand'
import { Card, Face, Suit } from '~/Card'

describe('HighCard', () => {
  const h = new Hand([
    new Card(Face._2, Suit.SPADE),
    new Card(Face._7, Suit.CLUB),
    new Card(Face._4, Suit.SPADE),
    new Card(Face._6, Suit.SPADE),
    new Card(Face._8, Suit.SPADE)
  ])

  it('matches as a high card', () => {
    expect(h.rank.name).toEqual('High Card')
  })

  it('does not match straight', () => {
    const h = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._3, Suit.CLUB),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._6, Suit.SPADE)
    ])

    expect(h.rank.name).not.toEqual('High Card')
  })

  it('does not match flush', () => {
    const h = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._7, Suit.SPADE),
      new Card(Face._4, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._8, Suit.SPADE)
    ])

    expect(h.rank.name).not.toEqual('High Card')
  })

  describe('duel', () => {
    const h2 = new Hand([
      new Card(Face._2, Suit.SPADE),
      new Card(Face._7, Suit.CLUB),
      new Card(Face._5, Suit.SPADE),
      new Card(Face._6, Suit.SPADE),
      new Card(Face._8, Suit.SPADE)
    ])

    expect(h2.duel(h)).toEqual('You win: High Card with 5 > 4')
  })
})
