import { it, describe } from 'node:test'
import assert from 'node:assert'
import { convertToObjectUsers, usersWithFields } from '../Challenge-01/app.js'

describe('Tests to challenge01 Fix Twitter 💾🔥', () => {
  it('convertToObjectUsers must return array of objects', () => {
    const usuarios = [
      'fll:111',
      'eme:yrfa@gmail.com',
      'usr:@codember',
      'age:21',
      'loc:World',
      '',
      'usr:@midudev',
      'eme:mi@gmail.com',
      'psw:123456',
      'age:38',
      'loc:bcn',
      'fll:82'
    ]

    const arrUsers = convertToObjectUsers(usuarios)

    const validUser = [
      {
        fll: '111',
        eme: 'yrfa@gmail.com',
        usr: '@codember',
        age: '21',
        loc: 'World'
      }
    ]

    assert.deepEqual(arrUsers, validUser)
  })

  it('haveFields must return only the users with correct fields', () => {
    const users = [
      'fll:111',
      'eme:yrfa@gmail.com',
      'usr:@codember',
      'age:21',
      'loc:World',
      '',
      'usr:@midudev',
      'eme:mi@gmail.com',
      'psw:123456',
      'age:38',
      'loc:bcn',
      'fll:82',
      '',
      'usr:@jona',
      'eme:example@gmail.com',
      'psw:123765',
      'age:21',
      'loc:arg',
      'fll:7',
      '',
      'usr:@fer',
      'eme:fer@gmail.com',
      'psw:1234',
      'age:25',
      'loc:usa',
      'fll:200'
    ]

    const parsedUsers = convertToObjectUsers(users)

    const usersValidated = usersWithFields(parsedUsers)

    console.log(usersValidated)

    const correctUsers = [
      [
        {
          usr: '@midudev',
          eme: 'mi@gmail.com',
          psw: '123456',
          age: '38',
          loc: 'bcn',
          fll: '82'
        },
        {
          usr: '@jona',
          eme: 'example@gmail.com',
          psw: '123765',
          age: '21',
          loc: 'arg',
          fll: '7'
        }
      ],
      2
    ]

    assert.deepEqual(usersValidated[0], correctUsers[0])
  })
})
