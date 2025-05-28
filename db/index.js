// import { Pool } from 'pg';
import { Sequelize } from 'sequelize';

// const pool = new Pool({ connectionString: process.env.PG_URI });
const sequelize = new Sequelize(process.env.PG_URI);

// export default pool;
export default sequelize;
