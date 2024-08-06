let usuario = require ('./usuarios.js');
function adicionarUsuario(usuario){
    usuario.id = usuarios.lenght +1;
usuario.push(usuario);
}
module.exports = adicionarUsuario;

