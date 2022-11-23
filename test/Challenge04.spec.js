import { describe, it } from 'node:test'
import assert from 'node:assert'
import { haveTwoFive, isAscending } from '../Challenge-04/app.js'

describe('Tests to solution of challenge04', () => {
  it('haveTwoFive only return true in a number with 2 fives', () => {
    assert.equal(haveTwoFive(12553), true)
    assert.equal(haveTwoFive(12345), false)
  })

  it('isAscending only return true in a number with ascending numbers', () => {
    assert.equal(isAscending(12345), true)
    assert.equal(isAscending(12435), false)
  })
})
