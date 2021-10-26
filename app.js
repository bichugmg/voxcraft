const express = require('express');
const path = require('path');
const hbs = require('hbs');
const web = require('./routes/web')
const app = express();
const server = require("http").Server(app);
const { ExpressPeerServer } = require("peer");

const peerServer = ExpressPeerServer(server);

app.use("/peerjs", peerServer);
const io = require("socket.io")(server, {
    cors: {
      origin: '*'
    }
  });



hbs.registerPartials('./views/partials');
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));
app.use('/',express.static('./public'));

app.use('/',web);
io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
      socket.join(roomId);
      socket.to(roomId).broadcast.emit("user-connected", userId);
      socket.on("message", (message) => {
        io.to(roomId).emit("createMessage", message, userName);
      });
    });
  });

const PORT = process.env.PORT|| 3001; 
app.listen(PORT,()=>{
    console.log(`server on ${PORT}`);
});