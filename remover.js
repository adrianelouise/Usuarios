let usuario = require ('./usuario);
function removerUsuario(index){
    usuario.splice(index,1)
}
module.exports = removerUsuario;
