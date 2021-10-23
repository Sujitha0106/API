const pool = require('../../dbconfig/connection');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'INSERT INTO register (firstName,lastName,gender,email,password,number) values (?,?,?,?,?,?)', [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number

            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);

            }

        );

    },
    getUsers: callBack => {

        pool.query(
            'select id,firstName,lastName,gender,email,number from register', [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }

        );
    },
    getUserByID: (id, callBack) => {
        pool.query(
            `select id,firstName,lastName,gender,email,number from register where id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    UpdateUser: (data, callBack) => {
        pool.query(
            'update register set firstName=?,lastName=?,gender=?,email=?,password=?,number=? where id= ?', [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id

            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);

            }

        );

    },
    DeleteUser: (data, callBack) => {
        pool.query(
            'delete from register where id=?', [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);

            }

        );

    },
    getUserByEmailID: (email, callBack) => {
        pool.query(
            `select * from register where email = ?`, [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};