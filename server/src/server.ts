import express from "express";

import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/users", async (request, response) => {
    const { email, name, password } = request.body;
    const user = await prisma.users.create({
        data: {
            email,
            name,
            password,
        },
    });

    return response.json({ data: user });
});

app.listen(3333, () => console.log("Server ON!"));
