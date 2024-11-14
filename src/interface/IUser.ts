export interface IUserBase {
    username: string;
    email: string;
    password: string;
}

export interface IUser extends IUserBase{
    _id: string;
}


export interface IUserToken{
    token: string
}