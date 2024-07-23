class UserService {
    static loginUser ({username, password}) {
        return ({
            "user":username,
            "name": "Juan",
            "lastName": "Perez Perez"
        });
    }
}


export default UserService;