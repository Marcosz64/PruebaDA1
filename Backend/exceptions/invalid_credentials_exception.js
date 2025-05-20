export class InvalidCredentialsExceptio extends Error{
    constructor(){
        super('Credenciales Invalidas.');
        this.statusCode = 403;
    }
}