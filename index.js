const prompt = require('prompt-sync')();
const adicionarUsuario = require ('./adicionar.js');
const listarUsuario = require ('./listar.js');
const atualizarUsuario = require ('./atualizar.js');
const removerUsuario = require ('./remover.js');

mainMenu();

function mainMenu(){  
console.log(`
1. Adicionar Usuario
2. Listar Usuario
3. Atualizar Usuario 
4. Remover Usuario
5. Sair
`);

let opcao = prompt('escolha uma opção ');
    switch (opcao){
      case '1':
           const nome = prompt('qual é o seu nome');           
           const email = prompt ('qual é o seu email');
           const telefones = [];
           let telefone;
           while((telefone = prompt ('qual é o seu telefone (ou deixe em branco para sair'))){
            telefones.push(telefone);
           }
           adicionarUsuario({nome, telefones, email});
           console.log('adicionado com sucesso');
           mainMenu();
           break;
        case '2':
            listarUsuario();
            mainMenu();
                break;
        case '3':
            listarUsuario()
            let index = parseInt(prompt('Digite o usuário que deseja atualizar'));
            const novoNome = prompt ('Novo nome do usuario');
            const novoTelefones = [];
            let novoTelefone;
            while((novoTelefone = prompt = ('Novo telefone do usuario'))){
                novoTelefones.push(novoTelefone);
            }
            const novoEmail = prompt ('Novo email do usuario');
            atualizarUsuario(id, {nome:novoNome, telefones: novoTelefones, email:novoEmail});
            console.log('atualizado com sucesso ')     
            mainMenu();
            break;
        case '4':
            indexRemover = parseInt(prompt('numero do usuario pra remover'));
            removerUsuario(indexRemover);
            console.log('numero do usuario removido com sucesso');
            mainMenu();
            break;
        case '5':
            console.log('finalizado com sucesso');
            process.exit();
            break;
        default:
            console.log('opçao invalida');
            mainMenu();
        };

};