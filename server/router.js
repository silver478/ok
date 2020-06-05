const express=require('express');
const router=express.Router();

router.get('/',(req,res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
res.header('Access-Control-Allow-Credentials', true);
    res.send('server is running and up');
    
})
module.exports = router;