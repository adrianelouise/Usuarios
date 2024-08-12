let usuario = require ('./usuarios');
function listarUsuario (){
    for(let i = 0; i < usuarios.lenght; i++){
    const usuario = usuarios[i];
    console.log(`
    ID: ${usuario.id},
    Nome: ${usuario.nome},
    Email: ${usuario.email}
    `);
        for( let j = 0; j < usuario.telefones.lenght; j++){
            console.log(`${j+1}. ${usuario.telefones[j]}`)
        }
    }
    
}
module.exports = listarUsuario;