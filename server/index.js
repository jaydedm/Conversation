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
app.post("/restaurant", async (req, res) =>{
    try{
        const { restaurant_name }= req.body;
        const newEntry= await pool.query(
            "INSERT INTO restaurant (restaurant_name) VALUES($1) RETURNING *",
            [restaurant_name]
            );
        res.json(newEntry);
        console.log("POST was sucessful.");

    } catch(err){
        console.error(err.message);
    }
});

//create new menu entry
app.post("/menu",async (req,res) =>{
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
app.post("/menu_item", async (req,res) => {
    try {
        const { restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5 }=req.body;
        const newEntry= await pool.query(
            "INSERT INTO menu_items (restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
            [restaurant_uid,menu_uid,name,price,img,description,ingredients,allergen_1,allergen_2,allergen_3,allergen_4,allergen_5]
        );
        res.json(newEntry);
        console.log("POST was successful");
    } catch(err){
        console.error(err.message);
    }
});

// get all

// get all restaurants
app.get("/restaurants", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM restaurant");
        res.json(allEntries.rows);
        console.log("GET request was successful.");
    } catch(err){
        console.error(err.message);
    }
});

//get all menus

app.get("/menus", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM menu");
        res.json(allEntries.rows);
        console.log("GET request was successful.");
    } catch(err){
        console.error(err.message);
    }
});

//get all menu_items

app.get("/menu_items", async(req,res) =>{
    try{
        const allEntries= await pool.query("SELECT * FROM menu_items");
        res.json(allEntries.rows);
        console.log("GET request was successful.");
    } catch(err){
        console.error(err.message);
    }
});


//get an entry

//get a restaurant
app.get("/restaurant/:restaurant_uid", async (req,res) =>{
    try{
        
        const { restaurant_uid }=req.params;
        const entry= await pool.query("SELECT * FROM restaurant WHERE restaurant_uid=$1",[restaurant_uid]);
        res.json(entry.rows);
        console.log("GET request was successful.");

    } catch(err){
        console.error(err.message);
    }
});

//get a menu

app.get("/menu/:menu_uid", async(req,res) =>{
    try{
        const { menu_uid }=req.params;
        const entry= await pool.query("SELECT * FROM menu WHERE menu_uid=$1",[menu_uid]);
        res.json(entry.rows);
        console.log("GET request was successful.");

    }catch(err){
        console.error(err.message);
    }
});

//get a menu_item
app.get("/menu_item/:item_uid", async (req,res) =>{
    try{
        const { item_uid }=req.params;
        const entry= await pool.query("SELECT * FROM menu_items WHERE item_uid=$1",[item_uid]);
        res.json(entry.rows);
        console.log("GET request was successful.");

    } catch(err){
        console.error(err.message);
    }
});

// update entry

// update restaurant name
app.put("/restaurant/:restaurant_uid",async (req,res) =>{
    try{
        const { restaurant_uid }=req.params;
        const { restaurant_name}= req.body;
        const updateRestaurant= await pool.query("UPDATE restaurant SET restaurant_name= $1 WHERE restaurant_uid = $2",[restaurant_name,restaurant_uid]);
        //for testing purposes
        res.json("Table was updated.");
        console.log("Table was updated.");
    } catch(err){
        console.error(err.message);
    }
});

//update menu name
app.put("/menu/:menu_uid", async (req,res) =>{
    try{
        const { menu_uid }=req.params;
        const { menu_name }=req.body;
        updateMenu= await pool.query("UPDATE menu SET menu_name=$1 WHERE menu_uid=$2",[menu_name,menu_uid]);
        //for testing purposes
        res.json("Update was Successful.");
        console.log("Update was successful.");

    } catch(err){
        console.error(err.message);
    }
});

//update menu_uid
app.put("/menu_item/menu_uid/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { menu_uid } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET menu_uid=$1 WHERE item_uid=$2",[menu_uid,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update item name

app.put("/menu_item/name/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { name } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET name=$1 WHERE item_uid=$2",[name,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update item price

app.put("/menu_item/price/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { price } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET price=$1 WHERE item_uid=$2",[price,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update item img url

app.put("/menu_item/img/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { img } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET img=$1 WHERE item_uid=$2",[img,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

// update item description

app.put("/menu_item/description/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { description } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET description=$1 WHERE item_uid=$2",[description,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

// update ingredients

app.put("/menu_item/ingredients/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { ingredients } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET ingredients=$1 WHERE item_uid=$2",[ingredients,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update allergen_1

app.put("/menu_item/allergen_1/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { allergen_1 } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET allergen_1=$1 WHERE item_uid=$2",[allergen_1,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update allergen_2

app.put("/menu_item/allergen_2/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { allergen_2 } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET allergen_2=$1 WHERE item_uid=$2",[allergen_2,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

//update allergen_3

app.put("/menu_item/allergen_3/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { allergen_3 } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET allergen_3=$1 WHERE item_uid=$2",[allergen_3,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

// update allergen_4

app.put("/menu_item/allergen_4/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { allergen_4 } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET allergen_4=$1 WHERE item_uid=$2",[allergen_4,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

// Update allergen_5

app.put("/menu_item/allergen_5/:item_uid", async (req,res) =>{
    try {
        const { item_uid } = req.params;
        const { allergen_5 } = req.body;
        const updateItem= await pool.query("UPDATE menu_items SET allergen_5=$1 WHERE item_uid=$2",[allergen_5,item_uid]);
        //for testing purposes
        res.json("Update was successful");
        console.log("Update was successful");

    } catch(err){
        console.error(err.message);
    }
});

// delete entry

//delete entry from restaurant
app.delete("/restaurant/:restaurant_uid",async (req,res) =>{
    try{
        const { restaurant_uid }=req.params
        const deleteMenuItem= await pool.query("DELETE FROM menu_items WHERE restaurant_uid=$1",[restaurant_uid]);
        const deleteMenu= await pool.query("DELETE FROM menu WHERE restaurant_uid=$1",[restaurant_uid]);
        const deleteRestaurant= await pool.query("DELETE FROM restaurant WHERE restaurant_uid=$1",[restaurant_uid]);
        //for testing purposes
        res.json("DELETE was successful.");
        console.log("DELETE was successful.");

    } catch(err){
        console.error(err.message);
    }
});

//delete entry from menu
app.delete("/menu/:menu_uid", async (req,res) =>{
    try{
        const { menu_uid }=req.params
        const deleteMenuItems= await pool.query("DELETE FROM menu_items WHERE menu_uid=$1",[menu_uid]);
        const deleteMenu= await pool.query("DELETE FROM menu WHERE menu_uid=$1",[menu_uid]);
        //for testing purposes
        res.json("DELETE was successful");
        console.log("DELETE was successful");
    } catch(err){
        console.error(err.message);
    }
});

// Delete item from menu items
app.delete("/menu_item/:item_uid", async (req,res) => {
    try{
        const { item_uid }=req.params;
        const deleteItem= await pool.query("DELETE FROM menu_items WHERE item_uid=$1",[item_uid]);
        //for testing purposes
        res.json("DELETE was successful.");
        console.log("DELETE was successful.");

    } catch(err){
        console.error(err.message);
    }
});

app.listen(4000,() => {
    console.log("server has started.");
});