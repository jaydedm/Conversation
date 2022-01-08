//Requirements
const express = require("express");
const app = express();
const cors= require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Create new restaurant entry
app.post("/restaurant/create", async (req, res) =>{
    try{
        const { restaurant_name }= req.body;
        const newEntry= await pool.query(
            "INSERT INTO restaurant (restaurant_name) VALUES($1) RETURNING *",
            [restaurant_name]
            );
        res.json(newEntry);
        console.log("POST was sucessful.");

    } catch(err){
        console.error(err.message)
    }
});

//create new menu entry
app.post("/menu/create",async (req,res) =>{
    try{
        const { restaurant_uid, menu_name }= req.body;
        const newEntry= await pool.query(
            "INSERT INTO menu (restaurant_uid, menu_name) VALUES ($1,$2) RETURNING *", [restaurant_uid,menu_name]
        );
        res.json(newEntry);
        console.log("POST was sucessful.");

    } catch(err){
        console.error(err.message);
    }
});

// create new menu_item entry
app.post("/menu_items/create", async (req,res) => {
    try {
        const { restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5 }=req.body;
        const newEntry= await pool.query(
            "INSERT INTO menu_items (restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
            [restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5]
        );
        res.json(newEntry);
        console.log("Post was successful");
    } catch(err){
        console.error(err.message)
    }
});

// get all

//SELECT * FROM restaurants

app.get("/restaurant/select", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM restaurant");
        res.json(allEntries.rows);
        console.log("GET request was successful.")
    } catch(err){
        console.error(err.message);
    }
});

//SELECT * FROM menu

app.get("/menu/select", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM menu");
        res.json(allEntries.rows);
        console.log("GET request was successful.")
    } catch(err){
        console.error(err.message);
    }
});

//SELECT * FROM menu_items

app.get("/menu_items/select", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM menu_items");
        res.json(allEntries.rows);
        console.log("GET request was successful.")
    } catch(err){
        console.error(err.message);
    }
});


//get an entry

// update entry

// delete entry

app.listen(4000,() => {
    console.log("server has started.")
});