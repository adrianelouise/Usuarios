let usuario =require ('./usuarios');
function listarUsuario (){
    usuarios.forEach ((usuario,index))=>{
console.log(´${index+1} nome usuario:${usuario.Nome},telefone:${usuairio.telefone},email:${usuario.email}´);
};
        
    });
}
module.exports = listarUsuario