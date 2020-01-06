const db = require("../../data/db-config.js");

const getAll = ()=>{
    return db ('africa')
    .select("*")
    .from('location')
}

const getbyId = (id)=>{
    return db ('africa')
    .select("*")
    .from('location')
    .where('id', id)
    .first()
}

const addLocation = (body)=>{
    return db ('location')
    .insert(body, 'id')
}

const editLocation = (id, body)=>{
    return db ('location')
    .where('id', id)
    .update(body, 'id')
}

const deleteLocation = (id)=>{
    return db ('location')
    .where('id', id)
    .del()
}

module.exports={
    getAll,
    getbyId,
    addLocation,
    editLocation,
    deleteLocation

}