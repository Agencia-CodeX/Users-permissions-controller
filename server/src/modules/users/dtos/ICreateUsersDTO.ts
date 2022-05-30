interface ICreateUsersDTO {
    name: string;
    email: string;
    password: string;
    supervisor?: string;
}

export { ICreateUsersDTO };
