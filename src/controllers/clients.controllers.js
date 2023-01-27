const pool = require('../db');

const createClient = async (req, res, next) => {

  // Create a client

  const { name, lastname, email, ident, address } = req.body

  try {
    const result = await pool.query(
      `INSERT INTO clients (cl_name, cl_lastname, cl_email, cl_ident, cl_address) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, lastname, email, ident, address]
    )

    res.json(result.rows[0]);

  } catch (error) {
    next(error);
  };
}

const getAllClients = async (req, res, next) => {

  // get all the clients

  try {
    const result = await pool.query('SELECT * FROM clients')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createClient,
  getAllClients
}