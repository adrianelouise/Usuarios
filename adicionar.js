const usuarios = require('./usuarios.js');
let usuario = require ('./usuarios.js');

function adicionarUsuario(usuario){
    ConstantSourceNode.id = contato.length +1

    let jaExiste = usuarios.find(usua => usua.email === usuarios.email);
    if(jaExiste){
        throw new Error('Ja existe um usuario com esse email');
    } else  {
      usuario.push({id: (usuario[usuario.length -1].id) +1, nome,telefone,email})
    }
}

module.exports = adicionarUsuario;
