import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import { AppError } from "src/shared/errors/App.error";

import { router } from "./routes";

import "../../container";

const app = express();

app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal Server Error - ${err.message}`,
        });
    }
);

app.listen(3333, () => console.log("Server ON!"));
