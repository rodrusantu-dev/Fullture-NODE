const express = require('express');  //importação da biblioteca
const profile =  [] //criado um array vazio (porém quando resetar o servidor apaga os dados do array, ideal é Banco Dados)
const app = express(); //inicializar o express.
app.use(express.json()); //permite a leitura de dados JSON no HTP

//CRIAR UM SERVIDOR. Ficará ouvindo a requisição, e aviso de que ta OK.
app.listen(3000, () => {
    console.log('lista rodando na porta 3000') 
 }); 

//Testando a API se está se comunicando (TESTE). Base raiz (/)
app.get('/', (request, response) => {
    return response.send('TESTE OK')
})

//Faz a inserção no array (conforme os dados inseridos no Insomnia)
app.post('/profile', (request, response) => {
    const body = request.body;
    console.log(body) 

        //!: REGRAS DE NEGÓCIO.
        //SE EMAIL OU SENHA NÃO FOREM INFORMADOS, APAREÇA UM ERRO.
        if (!body.email || !body.password) {
            return response.status(400).send('Falta dados obrigatórios Email e Senha')
        }

        //FAZER UMA BUSCA SE O EMAIL CADASTRADO JÁ NÃO EXISTE NO ARRAY
        const foundProfile = profile.find(profile => profile.email == body.email)
        if (foundProfile) {
            return response.status(400).send('Email já cadastrado')
        }
        //!: ***************************************************
    
    profile.push(body)
    return response.status(201).json(body)
})

//Lista tudo que foi inserido no Profile (via insomnia) e mostra no terminal.
app.get('/profile', (request, response) => {
    return response.json(profile)
})



