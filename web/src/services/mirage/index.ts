import { createServer, Model } from "miragejs";

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({

        models: {
            user: Model.extend<Partial<User>>({}),
        },

        seeds(server) {
            server.db.loadData({
                users: [
                    {   
                        id: 1,
                        image: 'https://github.com/brunovimieiro.png',
                        name: 'Bruno Vimieiro',
                        role: 'UX/UI Designer',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                    {
                        id: 2,
                        image: 'https://github.com/zankei1.png',
                        name: 'Gustavo Soares',
                        role: 'front-end',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                    {
                        id: 3,
                        image: 'https://github.com/pedromm65.png',
                        name: 'Pedro Henrique',
                        role: 'back-end',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                    {
                        id: 4,
                        image: 'https://github.com/miguelmarcola.png',
                        name: 'Miguel marcola',
                        role: 'full-stack',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                    {
                        id: 5,
                        image: '',
                        name: 'Usuario teste',
                        role: 'função exercida',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                    {
                        id: 6,
                        image: '',
                        name: 'Usuario teste',
                        role: 'função exercida',
                        createdAt: "2022-05-25T00:00:00.000Z",
                    },
                ]
            })
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        },
    })

    return server;
}