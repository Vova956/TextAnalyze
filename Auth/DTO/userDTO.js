class UserDTO{
    login;
    password;

    constructor(login , password){
        this.login = login
        this.password = password
    }

    static copy(obj){
        return new UserDTO(obj.login,obj.password,obj.nickname);
    }

}

module.exports = UserDTO