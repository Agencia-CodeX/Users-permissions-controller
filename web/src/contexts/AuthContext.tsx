import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { api } from "../services/api";
import Router from "next/router";

type User = {
    name: string;
    email: string;
    permissions?: string;
    roles?: string;
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signOut: () => void;
    user: User;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);


export function signOut() {
    destroyCookie(undefined, 'user.token');
    destroyCookie(undefined, 'user.refreshToken');
    Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'user.token': token} = parseCookies();

        if (token) {
            api.get('/users/info')
            .then(response => {
                const { name, email, created_at, supervisor } = response.data;
                setUser({name, email});
            })
            .catch(error => destroyCookie(undefined, 'user.token'));
        }
    }, [])
    
    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/sessions', {
                email,
                password,
            })

            const { token, refresh_token: refreshToken, user: userData } = response.data;

            setCookie(undefined, 'user.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });
            setCookie(undefined, 'user.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            setUser({
                name: userData.name,
                email,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard');

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}


