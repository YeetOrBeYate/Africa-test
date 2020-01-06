const express = require('express');
const qs = require("./categoryModel.js");
const router = express.Router();

router.get("/", (req,res)=>{
    qs.getAll()
    .then(categories=>{
        res.status(200).json({categories})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.get("/:id", (req,res)=>{
    const id = req.params.id;

    qs.getById(id)
    .then(category=>{
        res.status(200).json({category})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    qs.editCategory(id, body)
    .then(category=>{
        res.status(200).json({category})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.post("/", (req,res)=>{
    const body = req.body
    qs.addCategory(body)
    .then(category=>{
        res.status(201).json({category})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.delete("/:id", (req,res)=>{
    const id = req.params.id;
    qs.deleteCategory(id)
    .then(status=>{
        if(status===1){
            status = "true"
        }else{
            status = "false"
        }
        res.status(200).json({status})
    })

    .catch(err=>{
        res.status(500).json({err})
    })
})

module.exports= router