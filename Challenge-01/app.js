import fs from 'node:fs'

const main = () => {
  fs.readFile('./Challenge-01/users.txt', 'utf-8', async (err, data) => {
    if (err) throw err
    getAnswer(data)
  })
}

export const getAnswer = (value) => {
  const users = value.replaceAll('\n', ' ').split(' ')
  filterUsers(users)
}

export const filterUsers = (users) => {
  const realUsers = convertToObjectUsers(users)

  const [res, count] = usersWithFields(realUsers)

  console.log(count, res.at(-1))

  return [count, res.at(-1)]
}

export const convertToObjectUsers = (users) => {
  const realUsers = []
  let arr = []

  users.forEach((u) => {
    const arrUser = u.split()

    if (arrUser.includes('') || arrUser.includes('\r')) {
      const newObject = Object.fromEntries(arr.map((u) => u.split(':')))
      realUsers.push(newObject)
      arr = []
    } else {
      arr.push(...arrUser)
    }
  })

  return realUsers
}

export const usersWithFields = (users) => {
  let count = 0
  let res = users.map((user) => {
    if (user.usr && user.psw && user.eme && user.age && user.loc && user.fll) {
      count++
      return user
    }
    return false
  })

  res = res.filter(Boolean)

  return [res, count]
}

main()
