const db = require("../index.js");

module.exports = {
  getAllPosts: () => {
    const sql = `select * from posts`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  getPost: (id) => {
    const sql = `select * from posts where post_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  addPost: (
    title,
    price,
    city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    contact_name,
    email,
    phone_number,
    category_id,
    user_id
  ) => {
    const sql = `insert into posts (
      title,
      price,
      city,
      postal_code,
      description,
      make,
      model,
      size,
      condition_description,
      contact_name,
      email,
      phone_number,
      category_id,
      user_id) 
    values (
      '${title}', 
      '${price}', 
      '${city}', 
      '${postal_code}', 
      '${description}', 
      '${make}', 
      '${model}', 
      '${size}', 
      '${condition_description}', 
      '${contact_name}', 
      '${email}', 
      '${phone_number}', 
      ${category_id}, 
      ${user_id})`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  updatePost: (
    id,
    title,
    price,
    city,
    postal_code,
    description,
    make,
    model,
    size,
    condition_description,
    contact_name,
    email,
    phone_number
  ) => {
    const sql = `update posts 
    set 
      title = '${title}', 
      price = '${price}', 
      city = '${city}', 
      postal_code = '${postal_code}', 
      description = '${description}', 
      make = '${make}', 
      model = '${model}', 
      size = '${size}', 
      condition_description = '${condition_description}', 
      contact_name = '${contact_name}', 
      email = '${email}', 
      phone_number = '${phone_number}' 
    where 
      post_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
  deletePost: (id) => {
    const sql = `delete from posts where post_id = ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
};
