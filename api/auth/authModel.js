const db = require("../../data/db-config.js")



const addUser=(person)=>{

    return db('users')
    .insert(person, "id")
        
}

const Login = (user)=>{
    return db
    .select("username", "password", "id")
    .from('users')
    .where({username:user.username})
    .first()
}


module.exports={
    addUser,
    Login
}