import mysql from 'mysql'
import env from '../env';

const connection = mysql.createConnection({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DB_NAME,
    port: env.MYSQL_PORT
});

export default connection;