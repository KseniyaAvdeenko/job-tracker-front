export interface IUserBase {
    username: string;
    email: string;
    password: string;
}

export interface IUser extends IUserBase{
    _id: number|string;
}


export interface IUserToken{
    token: string
}