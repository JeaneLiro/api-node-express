import mysql from 'mysql2/promise'
import {DB_HOST, DB_PASS, DB_USER, DB_NAME} from '../config.js'

// Poll controla os acessos/varias pessoas mechendo ao mesmo tempo ent o pool abre varias conexões

const pool = mysql.creatPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

})

export default pool 