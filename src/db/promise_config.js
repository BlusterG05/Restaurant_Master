const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  query: async (sql, params) => {
    const [results] = await pool.execute(sql, params);
    return results;
  },
  executeProcedure: async (procedureName, params) => {
    const connection = await pool.getConnection();
    try {
      const [results] = await connection.query(`CALL ${procedureName}(${params.map(() => '?').join(', ')})`, params);
      return results;
    } finally {
      connection.release();
    }
  },
  getConnection: async () => {
    return await pool.getConnection();
  }
};
