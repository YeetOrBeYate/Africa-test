const db = require("../../data/db-config.js");

const getlocations =(Lid)=>{
    return db('africa')
    .select('*')
    .from('location')
    .where("user_id", Lid)
}

const getAllusers = ()=>{
    return db('africa')
    .select("id","username")
    .from('users')
    .then(async(list)=>{
        return Promise.all(list.map(async(user)=>{
            const yeet = await getlocations(user.id)
            return {...user, locations:yeet}
        })) 
    })
}

const getUser = (id)=>{
    return db('africa')
    .select('id','username')
    .from('users')
    .where("id", id)
    .first()
    .then(async(user)=>{
        const yate = await getlocations(user.id)
        return {...user, locations: yate}
    })
}


const deleteUser = (id)=>{
    return db ('users')
    .where("id", id)
    .del()
}

const editUser = (id, body)=>{
    return db ('users')
    .where("id", id)
    .update(body, "id")
}

module.exports={
    getAllusers,
    getUser,
    deleteUser,
    editUser
}