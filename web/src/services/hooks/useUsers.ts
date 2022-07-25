import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string;
    createdAt: string;
}

export async function getUsers(): Promise<User[]> {
    const { data } = await api.get('users');    
    const users = data.users.map(user => {
        return {
            id: user.id,
            image: user.image,
            name: user.name,
            role: user.role,
            createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            })
        }
    })

    return users;
}

export async function getRecentUsers(): Promise<User[]> {
    const { data } = await api.get('/users');
    // const recentUsers = (data.slice(0, 2));
    const users = data.map((user) => {
        return {
            id: user.id_user,
            name: user.name,
            createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
        }
    })

    return users;
}

export function useUsers(queryKey: string, getUsers: () => Promise<User[]>, freshTime: number) {
    return useQuery(queryKey, getUsers, {
        staleTime: 1000 * freshTime,
    })
}