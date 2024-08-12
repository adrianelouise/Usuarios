let usuario = require ('./usuarios');
function atualizarUsuario(id,novoUsuario){
    let index = usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1){
        usuarios[index]= {id: id, ...novoUsuario};
    }
}

module.exports=atualizarUsuario;