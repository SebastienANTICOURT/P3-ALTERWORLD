const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  find(usersId) {
    console.log("usersIdM", usersId)
    return this.database.query(
      `select * from  ${this.table} 
    where usersId = ?`,
      [usersId]
    )
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table}(firstName, lastName, email, address, zipcode,city, password) values (?,?,?,?,?,?,?)`,
      [
        users.firstName,
        users.lastName,
        users.email,
        users.address,
        users.zipcode,
        users.city,
        users.password
      ]
    )
  }

  update(users) {

    let setParts = [];
    let queryValues = [];
  
    if (users.firstName) {
      setParts.push("firstname = ?");
      queryValues.push(users.firstName);
    }
    if (users.lastName) {
      setParts.push("lastName = ?");
      queryValues.push(users.lastName);
    }
    if (users.email) {
      setParts.push("email = ?");
      queryValues.push(users.email);
    }
    if (users.address) {
      setParts.push("address = ?");
      queryValues.push(users.address);
    }
    if (users.zipcode) {
      setParts.push("zipcode = ?");
      queryValues.push(users.zipcode);
    }
    if (users.city) {
      setParts.push("city = ?");
      queryValues.push(users.city);
    }
  
    queryValues.push(users.usersId);
  
    let query = `UPDATE ${this.table} SET ${setParts.join(", ")} WHERE usersId = ?`;
  
    return this.database.query(query, queryValues);
  }


  deleteUser(id) {
    return this.database
      .query(
        `delete from ${this.table} 
        where usersId = ?`,
        [id]
      )
      .then((result) => {
        return result
      })
      .catch((error) => {
        throw error
      })
    }

  loginUser(email) {
    // console.log("emailManager", email)
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }
}

module.exports = UsersManager
