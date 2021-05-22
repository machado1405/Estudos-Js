// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if (condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Matheus', idade: 25});
//         }, 1000);
//     } else {
//         reject(Error('Um erro ocorreu na promisse'));
//     }
// });

// // também poderia passar o erro dentro do then como segundo argumento
// // finally sempre é executado rejeitando ou aceitando a promise
// const retorno = promessa.then(resolucao => {
//     resolucao.profissao = 'Designer';
//     return resolucao;
// }).then(resolucao => {
//     return resolucao;
// }).catch(rejeitada => {
//     console.log(rejeitada);
// }).finally(() => {
//     console.log('acabou');
// });
// console.log(retorno);

// .race mesma sintaxe do all, porém resolve a primeira promise
const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados');
    });
}, 1500);

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then(resolucao => {
    console.log(resolucao);
});