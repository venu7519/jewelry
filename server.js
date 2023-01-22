var express = require("express");
var app = express();
var mongodb = require("mongodb").MongoClient;
var cors = require("cors");
const { ObjectId } = require("mongodb");

const nodemon = require('nodemon')
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
// Set up Global configuration access
dotenv.config();

// const verifyToken = require ('./verifyToken')

app.use(express.json());
app.use(cors());
var dbo;
mongodb.connect("mongodb://localhost:27017/", function (err, db) {
  if (err) throw err;
  dbo = db.db("own");
  dbj = db.db("jewellery");
  console.log("connected to DB");
  // dbo.collection('user').find().toArray(
  //     function (err, data) {
  //         if (err) throw err;
  //         console.log(data);
  //     })
});

app.get("/", (req, res) => {
  res.send("Hey Hello!!!");
});

app.get("/registration/2", (req, res) => {
  dbo
    .collection("register")
    .find()
    .toArray(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
});

app.post("/registration/1", (req, res) => {
  console.log(req.body);
  var email = req.body.email;
  var password = req.body.password;
  console.log("username " + email);
  console.log("password " + password);
  dbo
    .collection("register")
    .findOne({ email: email, password: password }, (err, result) => {
      if (err) throw err;
      if (result === null) {
        dbo.collection("register").insert(req.body, (err, result) => {
          if (err) throw err;
          console.log(result);
        });
        res.send(JSON.stringify("registered"));
      }
      if (result !== null) {
        res.send(JSON.stringify("Email is already exist try with another"));
      }
    });
});

let secretKey = process.env.JWT_SECRET_KEY;

app.post("/login", (req, res) => {
  var Username = req.body.email;
  var Password = req.body.password;
  console.log("email" + Username);
  console.log("password " + Password);
  dbo.collection("register").findOne({ email: Username, password: Password }, (err, result) => {
      if (err) throw err;

      if (result !== null) {
        console.log(JSON.stringify("tokenMail: " + result.email));
        console.log(JSON.stringify("token_id: " + result._id));
        let rdata = {
          id: JSON.stringify(result._id),
          email: JSON.stringify(result.email),
        };

        const authToken = jwt.sign(rdata, secretKey, { expiresIn: "1h" });
        // res.send(JSON.stringify(result), authToken);
        res.send(JSON.stringify({ token: authToken, email: result.email, userName: result.userName }));
        console.log(JSON.stringify(result));
      }
      if (result === null) {
        res.send(JSON.stringify("invalid username or password"));
      }
    });
});
app.delete("/deldata/:uName", (req, res) => {
  console.log("Username: " + req.params.uName);
  var objid = req.params.uName;
  dbo.collection("register").deleteOne({ userName: objid }, (err, result) => {
    if (err) throw err;
    console.log(result);

    dbo
      .collection("register")
      .find()
      .toArray(function (err, data) {
        if (err) throw err;
        res.send(data);
      });
  });
});

app.get("/jewelry/necklace", async (req, res) => {
    console.log('/jewelry/necklace')
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("Necklace").find().toArray(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
});


app.get("/jewelry/men/rings", async(req, res) => {
  console.log("jewelry/men/rings");
  console.log( req.body);
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  const jwtStatus = await verifyToken(token);
  if(jwtStatus) {
    dbj.collection("MenRings").find().toArray(function (err, data) {
        if (err) throw err;
        res.send(data);
      //   console.log(data)
      });
  } else {
    res.status(401).send(data);
  }
  
});

app.post("/jewelry/cart/1", async(req, res) => {
  console.log("/jewelry/cart/1");
  console.log("body: ", req.body);
  console.log("email: ", req.body.email);
  console.log("_id: ", req.body.uId);
  var id = req.body.uId;
  var email = req.body.email;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("cart").findOne({ uId: id, email: email }, (err, result) => {
    if (err) throw err;
    if (result === null) {
      dbj.collection("cart").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
      res.send(JSON.stringify("added to cart"));
    }
    if (result !== null) {
      res.send(JSON.stringify("already added"));
    }
  });
});

app.get("/jewelry/cart/2/:id", async(req, res) => {
  console.log("/jewelry/cart/2");
  console.log(req.body);
  console.log("id: " + req.params.id);
  var id = req.params.id;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("cart").find({email:id}).toArray(function (err, data) {
    if (err) throw err;
    res.send(data);
  //   console.log(data)
  });
});

app.delete("/jewelry/cart/remove/id/:id/email/:email", async(req, res) => {
  console.log("/jewelry/cart/remove/");
  console.log("uid: " + req.params.id);
  console.log("userid: " + req.params.email);
  // console.log("email: " + req.params.id.u);
  var id = req.params.id;
  var email = req.params.email;
//   var email = req.body.email;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("cart").deleteOne({ uId: id, email: email }, (err, result) => {
      if (err) throw err;
      console.log(result);

      dbj.collection("cart").find({email:email}).toArray(function (err, data) {
          if (err) throw err;
          res.send(data);
        });
    });
});


app.post("/cart/orders", async(req, res) => {
  console.log("/jewelry/cart/1");
  console.log("body: ", req.body);
  console.log("email: ", req.body.email);
  // console.log("_id: ", req.body.uId);
  // var id = req.body.uId;
  var email = req.body.email;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("orders").findOne({email: email }, (err, result) => {
    if (err) throw err;
    if (result === null) {
      dbj.collection("orders").insertMany(req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
      res.send(JSON.stringify("Ordered successfully"));
    }
    if (result !== null) {
      res.send(JSON.stringify("already Ordered"));
    }
  });
});


app.delete("/emptycart/email/:email", async(req, res) => {
  console.log("emptycart/email/");
  console.log("userid: " + req.params.email);
  var email = req.params.email;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("cart").deleteMany({email: email }, (err, result) => {
      if (err) throw err;
      console.log(result);

      dbj.collection("cart").find({email:email}).toArray(function (err, data) {
          if (err) throw err;
          res.send(data);
        });
    });
});


app.get("/customer/info/:id", async(req, res) => {
  console.log("/jewelry/cart/2");
  console.log(req.body);
  console.log("id: " + req.params.id);
  var id = req.params.id;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("orders").find({email:id}).toArray(function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/all/customers", async (req, res) => {
    console.log('/all/customers')
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("orders").find().toArray(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
});



app.post("/admin/album", async(req, res) => {
  console.log("admin/album");
  console.log("body: ", req.body);
  console.log("itemId: ", req.body.itemId);
  console.log("image: ", req.body.image);
  // console.log("_id: ", req.body.uId);
  var id = req.body.itemId;
  var img = req.body.image;
  // var email = req.body.email;
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("albums").findOne({ itemId: id, image: img }, (err, result) => {
    if (err) throw err;
    if (result === null) {
      dbj.collection("albums").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
      res.send(JSON.stringify("successfully inserted"));
    }
    if (result !== null) {
      res.send(JSON.stringify("already existed"));
    }
  });
});

app.get("/admin/designs", async(req, res) => {
  console.log("/admin/designs");
  console.log("getToken: ", req.headers.token);
  let token = req.headers.token;
  await verifyToken(token);
  dbj.collection("albums").find().toArray(function (err, data) {
    if (err) throw err;
    res.send(data);
  //   console.log(data)
  });
});







function verifyToken(token) {
  try{
    const decode = jwt.verify(token, secretKey);
        console.log("decoded: ", decode);
    if(Date.now() <= decode.exp * 1000) {
        return true;
    } else {
        return false;
    }
  }catch(err){
    res.status(401)
  }
}



app.listen(3000);

// app.post('/registration/1',(req,res)=>{
//         console.log(req.body);
//         dbo.collection('register').insertOne(req.body,(err,result)=>{

//         res.send('Registered');
//     })
// })

// app.delete('/register', (req, res) => {
//     console.log(req.body)
//     dbo.collection('register').deleteOne(req.body,(err ,result)=>{
//             res.send(data);
//     })
//     })

// app.delete('/deldata', (req, res) => {
//     console.log(req.data);
//     var Username = req.uName;
//     dbo.collection('register').deleteOne({ userName: Username}, (err, result) => {
//         if (err) throw err;
//         dbo.collection('register').find().toArray(
//             function (err, data) {
//                 if (err) throw err;
//                 res.send(data);
//             })
//             console.log(result)
//     });

// })

//   var query = { userName: "ANIL" };
//   const result = await register.deleteOne(query);
//   if (result.deletedCount === 1) {
//     console.log("Successfully deleted one document.");
//   } else {
//     console.log("No documents matched the query. Deleted 0 documents.");
//   }

// if (result !== null) {
//     res.send(JSON.stringify("Email is already exist try with another"))
// }

// app.get('/register',(req,res)=>{

//     dbo.collection('register').insert({username:'venu', email:'venu@gmial.com'},(err,result)=>{
//         res.send('Registered');
//     })

// })

// .insert(req.body, (err, result) => {
//     if (err) throw err;
//     console.log(result);

// })
// res.send(JSON.stringify("registered"));
