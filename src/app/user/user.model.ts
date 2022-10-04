export interface IUser {
    id : number | undefined
    firstName : string | undefined
    lastName : string | undefined
    userName : string | undefined
}

export class User implements IUser{
    id: number | undefined
    firstName: string | undefined
    lastName: string | undefined
    userName: string | undefined

}