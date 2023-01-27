const pool = require('../db');

const createProduct = async (req, res, next) => {

  // Create a product

  const { name, description, price } = req.body

  try {
    const result = await pool.query(
      `INSERT INTO products (pd_name, pd_description, pd_price) 
      VALUES ($1, $2, $3) RETURNING *`,
      [name, description, price]
    )

    res.json(result.rows[0]);

  } catch (error) {
    next(error);
  };
}

const getAllProducts = async (req, res, next) => {

  // get all the products

  try {
    const result = await pool.query('SELECT * FROM products')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProduct,
  getAllProducts
}