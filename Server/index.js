const express=require('express');
const app=express();
const cors=require('cors');
const PORT=5000;



//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.use("/todos",require("./routes/todos"));

app.use("/user",require("./routes/user"));

app.use(cors());

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port no ${PORT}`);
  });