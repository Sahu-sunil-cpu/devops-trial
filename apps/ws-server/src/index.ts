import { WebSocketServer } from "ws" 
import { prisma } from "@repo/db/prisma"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);



  ws.on('message', async function message(data) {
   await  prisma.user.create({
        data: {
            username: "kcbfkudsbc",
            password: "kjdfbvkj"
        }
    })
    console.log('received: %s', data);
  });

  ws.send('something');
});