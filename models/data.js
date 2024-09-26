const db = require('../config/db');
const information = {
    save: (data, callback) => {
        const query = "INSERT INTO information (firstname, lastname, middlename, birthdate, address) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [data.firstname, data.lastname, data.middlename, data.birthdate, data.address], callback);

    },
    getAllInformation:(callback) => {
        const query = "SELECT * FROM information";
        db.query(query, callback);
    }
};

module.exports = information;