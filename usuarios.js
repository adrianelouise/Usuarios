const prompt = require('prompt- sync')();
const  adicionarUsuario = require ('./adicionar.js');
const listarUsuario = require ('./listar.js');
const atualizarUsuario = require ('./atualizar.js');
const removerUsuario = require ('./remover.js');


function mainMenu (){  
console.log(`
1. Adicionar Usuario
2. Listar Usuario
3. Atualizar Usuario 
4. Remover Usuario
5. Sair`);

const opcao= parseInt (prompt ('escolha uma opçao'));
let index;
    switch (opçap){
      case "1":
           const nome = prompt('qual é o seu nome');
           const telefone = prompt ('qual é o seu telefone');
           const email = prompt ('qual é o seu email');
           adicionarUsuario ({nome, telefone, email});
           console.log('adicionado com sucesso');
           mainMenu();
           break;
           case "2":
                listarUsuario();
                mainMenu();
                break;
           case "3":
              listarUsuario
              index = parseInt (prompt('listar o usuario'));
              const Novonome = pŕompt ('Novo nome do usuario');
              const Novotelefone = prompt ('Novo telefone do usuario');
              const Novoemail = prompt ('Novo email do usuario');
              atualizarUsuario(index, {nome:Novonome, telefone:Novotelefone,email:novoemail});
              console.log('atualizado com sucesso ')     
              mainMenu();
              break;
            case "4":
                index = parseInt(prompt('numero do usuario pra remover'));
                removerUsuario(index);
                console.log('numero do usuario removido com sucesso');
                mainMenu();
                break;
            case "5":
                console.log('finalizado com sucesso');
                process.exit();
                break;
            default:
                console.log('opçao invalida');
                mainMenu();    

   
   
   };


};