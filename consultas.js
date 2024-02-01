const pool = require('./config_db/dbase');

const traerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    //console.log(rows);
    return rows;
};

const agregarPosts = async (titulo, img, descripcion) => {
    const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)";
    const { rows } = await pool.query(query, [titulo, img, descripcion]);
    //console.log(rows);
    return rows;
};

module.exports = { traerPosts, agregarPosts };