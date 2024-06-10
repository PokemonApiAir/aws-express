// require("dotenv").config();

const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const apiRouter = require("./src/routes/indexRouter");
// const conn = require("./src/database_config/config");
const port = parseInt(process.env.PORT_BACKEND) || 3000;

// app.use("/api", apiRouter);ssh -i "node-express-ec2.pem" ec2-user@ec2-54-160-52-160.compute-1.amazonaws.com

app.get('/', (req, res) => {
    return res.status(200).send({message: "try"})
})

// app.use("/", apiRouter);

// const initApp = async () => { 
//     console.clear();
//     try {
//         await conn.authenticate();
//         console.log("Successfully connected!");
//     } catch (error) {
//         console.error("Failure database connection : ", error.original);
//     }
// }

app.listen(port, () => {
    // initApp();
    console.log(`Listening on port ${port}`);
})