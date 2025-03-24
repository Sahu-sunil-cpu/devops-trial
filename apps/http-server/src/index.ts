import express from "express";
import { prisma } from "@repo/db/prisma"

const app = express();

app.get("/", (req, res) => {
    res.send("hi this is sunil");
})

app.post("/signup", async (req, res) => {
    const body = req.body;
     await prisma.user.create({
        data: {
            username: "sdfdsf",
            password: "fdsgdgg",
        }
    })

    res.send("successful")
})

app.listen(3001);