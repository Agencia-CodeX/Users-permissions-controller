interface ICreateUserTokenDTO {
    usersId_user: string;
    expires_date: Date;
    refresh_token: string;
}

export { ICreateUserTokenDTO };
