import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
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

export function useUsers() {
    return useQuery('recentAddedUsers', getUsers, {
        staleTime: 1000 * 5,
    })
}