let usuario = require ('./usuarios');
function removerUsuario(indexRemover){
    usuario.splice(indexRemover,1)
}
module.exports = removerUsuario;
