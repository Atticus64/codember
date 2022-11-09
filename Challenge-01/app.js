import fs from 'node:fs'

const input = fs.readFile('./Challenge-01/users.txt', 'utf-8', async (err, data) => {
    if ( err ) throw err
    getAnswer(data)
})

const getAnswer = (value) => {

    const users = value
                    .replaceAll('\n', ' ')
                    .split(' ')
    

    return filterUsers(users)
}


const filterUsers = ( users ) => {
    
    const realUsers = []
    let arr = []
    
    users
        .forEach(( u ) => {
            const arrUser = u.split()

            if( arrUser.includes('') ) {
                // console.log(arr)
                const newObject = Object.fromEntries(arr.map( u => u.split(':')))
                realUsers.push(newObject)
                arr = []
            } else {
                arr.push(...arrUser)
            }

            
        })


    let count = 0
    const res = realUsers.map( user => {
        if ( user.usr && user.psw && user.eme && user.age && user.loc && user.fll ){
            count++
            return user
        }
    })

    console.log(count)

    console.log(res.at(-1));
}