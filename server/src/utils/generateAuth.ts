import { sign } from "jsonwebtoken";
import auth from "src/config/auth";

import { Users } from "@prisma/client";

export function generateToken(user: Users) {
    const token = sign({}, auth.secret_token, {
        subject: user.id_user,
        expiresIn: auth.expires_in_token,
    });

    return token;
}

export function generateRefreshToken(user: Users) {
    const token = sign({}, auth.secrete_refresh_token, {
        subject: user.id_user,
        expiresIn: auth.expires_in_refresh_token,
    });

    return token;
}

export function generateTokenAndRefreshToken(user: Users) {
    const token = generateToken(user);
    const refresh_token = generateRefreshToken(user);

    return {
        token,
        refresh_token,
    };
}
