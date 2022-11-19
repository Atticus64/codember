import { describe, it } from 'node:test'
import assert from 'node:assert'

import { buildArrCodes, decodeMessage } from '../Challenge-02/app.js'

const secretMessage = '072101108108111 087111114108100033'

describe('Tests for challenge02 Ciber criminals 💻🕵️‍♀️', () => {
  it('The fn buildArrCodes be return an array of asciiCodes', () => {
    const ascii = buildArrCodes(secretMessage)
    const expectedAsciiCodes = [
      '072',
      '101',
      '108',
      '108',
      '111',
      ' 087',
      '111',
      '114',
      '108',
      '100'
    ]

    assert.deepEqual(ascii, expectedAsciiCodes)
  })

  it('The fn decodeMessage be return an string decoded', () => {
    const asciiCodes = buildArrCodes(secretMessage)
    const message = decodeMessage(asciiCodes)
    const realMessage = 'Hello World'

    assert.equal(message, realMessage)
  })

  it('The decodeMessage will decode examples', () => {
    const firstWordCodes = ['109', '105', '100', '117']
    const secondWordCodes = [
      '99',
      '111',
      '100',
      '101',
      '109',
      '98',
      '101',
      '114'
    ]

    const firstWord = decodeMessage(firstWordCodes)
    const secondWord = decodeMessage(secondWordCodes)

    assert.equal(firstWord, 'midu')
    assert.equal(secondWord, 'codember')
  })
})
