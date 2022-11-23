import { describe, it } from 'node:test'
import assert from 'node:assert'
import { filterColors } from '../Challenge-03/app.js'

describe('Tests to challenge03 solution', () => {
  it('The function filterColor must return zebraLenght and lastColor', () => {
    const colorsList1 = ['blue', 'red', 'blue', 'green', 'red', 'green', 'red']
    const expectedObj1 = {
      maxZebraColor: 'red',
      maxZebraCount: 4
    }

    assert.equal(
      filterColors(colorsList1).maxZebraCount,
      expectedObj1.maxZebraCount
    )

    assert.equal(
      filterColors(colorsList1).maxZebraColor,
      expectedObj1.maxZebraColor
    )
  })
})
