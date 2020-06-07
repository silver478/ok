const mysql=require("mysql");
const cors=require("cors");
const jwt=require("jsonwebtoken");
const express=require("express");
const app=express();
const bodypar=require("body-parser");
const multer = require('multer');
app.use(cors())
app.use(bodypar.json({limit:'5mb'})); 

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
console.log(file)
    cb(null, '../public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
 
  limits: { fileSize: 1024*1024*5 },
  fileFilter: fileFilter}).single('file')

  

var mysqlconnec=mysql.createConnection({
    host:'127.0.0.1',
    user:'saadat',
    password:'octaslash',
    database:'kar',
    multipleStatements:true
})
mysqlconnec.connect((err)=>{
if(!err){
    console.log("connected successfully");
} else{
    console.log("errorr"+JSON.stringify(err,undefined,2));
}

})
app.listen(4000,()=>{console.log("express server is running !!!11")});

app.put('/edit',verifyToken,(req,res) => {
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            console.log(err)
        }else{

            let emp = req.body
            console.log(emp.fullname)
            console.log(emp.email)
            console.log(emp.password)
            mysqlconnec.query(`UPDATE users 
            SET 
                fullname = case when ? <> '' then ? else password end,
                email = case when ? <> '' then ? else email end, 
                password = case when ? <> '' then ? else password end
            WHERE userid = ?;`,[emp.fullname,emp.fullname,emp.email,emp.email,emp.password,emp.password,authData.user.id],(err,row,fields)=>{
                if(!err){
                    console.log("updated successfully")
        }else{
            console.log(err)
        }
    })
}
})
})

app.put('/pics',verifyToken,function(req, res) {
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            console.log(err)

        } else{
    upload(req, res, function (err) {
        

           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
        console.log(req.file.path)
        new_path='.'+req.file.path.substring(9)
        console.log(new_path)
        let emp=req.body;
        var sql="UPDATE users set prof_pic=? WHERE userid=?;"; 
        mysqlconnec.query(sql,[new_path,authData.user.id],(err,row,fields)=>{
            if(!err){
                res.send('success')
            } else{
                console.log(err);
            }
        })
      

    })
    

    }})})
      

  
app.get("/currentrides/:id",(req,res)=>{
mysqlconnec.query("SELECT * FROM rides where userid=? ",[req.params.id],(err,res,fields)=>{
    if(!err){
        res.send(res);
    } else{
        console.log(err);
    }
})

})
app.post("/verifytok",verifyToken,(req,res)=>{
    
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){   
            res.send('Forbidden');

        } else{
            res.send('Authorized')
           }})})


           app.get("/userdetails",verifyToken,(req,res)=>{
    
            jwt.verify(req.token,'secretkey',(err,authData)=>{
                if(err){
                    res.send('Error');
        
                } else{
                    mysqlconnec.query("SELECT * FROM users WHERE userid=?",[authData.user.id],(err,row,fields)=>{
                        if(!err){
                            const user={
                                name:row[0].fullname,
                                email:row[0].email,
                                Gender:row[0].Gender,
                                contact:row[0].contactno,
                                date:row[0].dateofbirth,
                                pf_url:row[0].prof_pic,
                                password:row[0].password
                                    }
                            res.send(user);
                        } else{
                            console.log(err);
                        }})
                
                   }})})
   
    app.post("/loginauth",(req,res)=>{
        let emp=req.body;
         mysqlconnec.query("SELECT * FROM users WHERE email=? AND password=?",[emp.email,emp.password],(err,row,fields)=>{
            if(row.length>0){
                if(row[0].usertypeid==1){
                console.log(row)
                const user={
                    id:row[0].userid,
                    email:emp.email,
                    name:row[0].fullname}
                    jwt.sign({user},'secretkey',(err,token)=>
                    { var status1="customer";
                        res.json({token,status1});

                    }
                    )
            } else if(row[0].usertypeid==2){
                console.log(row)
                const user={
                    id:row[0].userid,
                    email:emp.email,
                    name:row[0].fullname}
                    jwt.sign({user},'adminkey',(err,token)=>
                    { var status1="Admin";
                        res.json({token,status1});

                    }
                    )
                 
            }
        
        
        } else{
            console.log(emp.email)
            console.log(emp.password)
                var status1="false";
                res.json(status1);
            }
        })});
    app.delete("/employees/:id",(req,res)=>{
        mysqlconnec.query("DELETE FROM usertypes WHERE usertype=?",[req.params.id],(err,row,fields)=>{
            if(!err){
                res.send("DELETED SUCCESSFULLY");
            } else{
                console.log(err);
            }
        })})
        app.post("/carregister",(req,res)=>{
            let emp=req.body;
            var sql="INSERT INTO userregistcar(cartypeid,car_name,userid,userregistcarno) VALUES(?,?,?,?);"; 
            mysqlconnec.query(sql,[emp.cartypeid,emp.car_name,emp.userid,emp.userregistcarno],(err,row,fields)=>{
                if(!err){
                    res.send(row);
                } else{
                    console.log(err);
                }
            })})
        app.post("/signup",cors(),(req,res)=>{
            let emp=req.body;
            var sql="INSERT INTO users(fullname,Gender,contactno,email,usertypeid,password,dateofbirth) VALUES(?,?,?,?,?,?,?);"; 
            mysqlconnec.query(sql,[emp.fullname,emp.Gender,emp.contactno,emp.email,emp.usertypeid,emp.password,emp.dateofbirth],(err,row,fields)=>{
                if(!err){
                    console.log(row)
                    const user={
                        id:row.insertId,
                        email:emp.email,
                        name:emp.fullname}
                        jwt.sign({user},'secretkey',(err,token)=>
                        { var status1="success";
                            res.json({token,status1});
    
                        })
                } else{
                    console.log(err);
                }
            })})
            app.post("/addride",verifyToken,(req,res)=>{
                let emp=req.body;
                var sql="INSERT INTO rides(userid,userregistcarid,startlat,startlng,endlat,endlng,Starting_address,End_adrress) VALUES(?,?,?,?,?,?,?,?);"; 
                jwt.verify(req.token,'secretkey',(err,authData)=>{
                    if(err){
                        res.sendStatus(403);

                    } else{
                        mysqlconnec.query(sql,[authData.user.id,emp.userregistcarid,emp.startlat,emp.startlng,emp.endlat,emp.endlng,emp.Starting_address,emp.End_adrress],(err,row,fields)=>{
                            if(!err){
                                res.json({row:row,authData:authData});
                            } else{
                                console.log(err);
                            }
                        })}})})
                        app.post("/bringrides",verifyToken,(req,res)=>{
                            let emp=req.body;
                            var sql="SELECT * FROM rides,users WHERE rides.End_adrress=? and rides.userid=users.userid;"; 
                            jwt.verify(req.token,'secretkey',(err,authData)=>{
                                if(err){
                                    res.sendStatus(403);
            
                                } else{
                                    mysqlconnec.query(sql,[emp.End_adrress],(err,row,fields)=>{
                                        if(!err){
                                            res.send(row);
                                        } else{
                                            console.log(err);
                                        }
                                    })}})})
              app.post("/addride",verifyToken,(req,res)=>{
                let emp=req.body;
                var sql="INSERT INTO rides(userid,userregistcarid,startlat,startlng,endlat,endlng,Starting_address,End_adrress) VALUES(?,?,?,?,?,?,?,?);"; 
                jwt.verify(req.token,'secretkey',(err,authData)=>{
                    if(err){
                        res.sendStatus(403);

                    } else{
                        mysqlconnec.query(sql,[authData.user.id,emp.userregistcarid,emp.startlat,emp.startlng,emp.endlat,emp.endlng,emp.Starting_address,emp.End_adrress],(err,row,fields)=>{
                            if(!err){
                                res.json({row:row,authData:authData});
                            } else{
                                console.log(err);
                            }
                        })}})})
                        app.post("/bringrides",verifyToken,(req,res)=>{
                            let emp=req.body;
                            var sql="SELECT * FROM rides,users WHERE rides.End_adrress=? and rides.userid=users.userid;"; 
                            jwt.verify(req.token,'secretkey',(err,authData)=>{
                                if(err){
                                    res.sendStatus(403);
            
                                } else{
                                    mysqlconnec.query(sql,[emp.End_adrress],(err,row,fields)=>{
                                        if(!err){
                                            res.send(row);
                                        } else{
                                            console.log(err);
                                        }
                                    })}})})   
                                    app.get("/bringbookings",verifyToken,(req,res)=>{
                                        let emp=req.body;
                                        var sql="SELECT * FROM BOOKINGS where book_user_id=?;"; 
                                        jwt.verify(req.token,'secretkey',(err,authData)=>{
                                            if(err){
                                                console.log('error')
                                                res.sendStatus(403);
                        
                                            } else{
                                                mysqlconnec.query(sql,[authData.user.id],(err,row,fields)=>{
                                                    if(!err){
                                                        console.log('success')
                                                        res.send(row);
                                                    } else{
                                                        console.log('musqlerror')
                                                        console.log(err);
                                                    }
                                                })}})})   
            

                                    app.post("/bookride",verifyToken,(req,res)=>{
                                        let emp=req.body;
                                        var sql="INSERT INTO Bookings(rideid,book_user_id,Starting_address,End_address,statuss,rider_name) VALUES(?,?,?,?,?,?);"; 
                                        jwt.verify(req.token,'secretkey',(err,authData)=>{
                                            if(err){
                                                console.log('error')
                                                res.sendStatus(403);
                        
                                            } else{
                                                mysqlconnec.query(sql,[emp.rideid,authData.user.id,emp.Starting_address,emp.End_adrress,,emp.fullname],(err,row,fields)=>{
                                                    if(!err){
                                                        console.log('success')
                                                        res.json({row:row,authData:authData});
                                                    } else{
                                                        console.log(err);
                                                    }
                                                })}})})                     
               
                                                app.get("/bringride",verifyToken,(req,res)=>{
                                                    let emp=req.body;
                                                    var sql="SELECT * FROM rides where userid=?;"; 
                                                    jwt.verify(req.token,'secretkey',(err,authData)=>{
                                                        if(err){
                                                            console.log('error')
                                                            res.sendStatus(403);
                                    
                                                        } else{
                                                            mysqlconnec.query(sql,[authData.user.id],(err,row,fields)=>{
                                                                if(!err){
                                                                    console.log('success')
                                                                    res.send(row);
                                                                } else{
                                                                    console.log('musqlerror')
                                                                    console.log(err);
                                                                }
                                                            })}})})   
                        
               
               function verifyToken(req,res,next){
                 const header=req.headers['authorization'];
                 if(typeof header!=='undefined'){
                     req.token=header;
                     next();
                 } else {
                     res.sendStatus(403);
                 }
                }

        
                