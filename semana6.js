// //### Criar um Array com 3 Elementos:

// let meuArray = [1, 2, 3];
// console.log(meuArray); // [1, 2, 3]




// //### Saber o Tamanho do Array:

// console.log(meuArray.length); // 3




// //### Inserir no Início do Array:

// meuArray.unshift(0);
// console.log(meuArray); // [0, 1, 2, 3]


// //### Inserir no Meio do Array:

// meuArray.splice(2, 0, 2.5);
// console.log(meuArray); // [0, 1, 2.5, 2, 3]


// //Neste exemplo, `splice` é usado para adicionar `2.5` no índice `2` do array.


// //### Inserir no Final do Array:

// meuArray.push(4);
// console.log(meuArray); // [0, 1, 2.5, 2, 3, 4]



// //### Deletar do Array (Pela Posição):

// delete meuArray[2];
// console.log(meuArray); // [0, 1, empty, 2, 3, 4]


// //Este método mantém o comprimento do array, mas o valor é substituído por `undefined`.

// //### Remover do Array (Pelo Valor):


// meuArray = meuArray.filter(item => item !== 2);
// console.log(meuArray); // [0, 1, 2.5, 3, 4]



// //Neste exemplo, todos os elementos com o valor `2` são removidos.

// //### Remover do Final do Array:

// meuArray.pop();
// console.log(meuArray); // [0, 1, 2.5, 3]


//A função `pop()` remove o último elemento do array.

var listaDeTrefas = []
listaDeTrefas.unshift("Estudar JavaScript", "Fazer exercícios de Matemática", "Ler um livro")
console.log(`O número de tarefas a serem feitas é ${listaDeTrefas.length}.`)
listaDeTrefas.unshift('Fazer compras')
listaDeTrefas.splice(1,0,'Reunião com a equipe')
listaDeTrefas.push('Pagar contas')
filtro = listaDeTrefas.filter(item => item !== 'Fazer exercícios de Matemática')
listaDeTrefas.pop()
console.log(filtro)
