import express from "express";

import { prisma } from "../../../prisma";

const app = express();

app.use(express.json());

app.post("/create", async (request, response) => {
    const { email, name, password, refresh_token, token } = request.body;
    const user = await prisma.users.create({
        data: {
            email,
            name,
            password,
            refresh_token,
            token,
        },
    });

    return response.status(201).json({ data: user });
});

app.listen(3333, () => console.log("Server ON"));
