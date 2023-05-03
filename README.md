# Fullture-NODE
## Trilha de Node JS da Fullture

#### PREMISSAS:
Node já baixado e instalado.

#### USAR O CÓDIGO - INÍCIO DE TUDO.
```npm init -y```
Que vai criar ai o arquivo do package.json para que possamos começar a alterar e modificar algumas coisas no nosso projeto.

#### Instalar as bibliotecas READLINE-SYNC para uso no node:
```npm i readline-sync```

#### Instalando uma dependência mas economizando espaço ele salva - modo **--save--dev**
```npm i nodemon --save--dev```
Quando você instala uma dependência com a opção --save-dev, o npm adiciona essa dependência ao arquivo package.json do seu projeto e salva-a na pasta node_modules.

Ao usar a opção --save-dev, você está indicando que o pacote nodemon é necessário apenas durante o desenvolvimento do seu projeto e não precisa ser incluído na distribuição final do seu aplicativo. Isso permite que outras pessoas possam clonar ou baixar o seu projeto e instalar todas as dependências necessárias com um único comando.

> O arquivo **package.lock.json** ele trava a versão da biblioteca que está instalada.

Para atualizar apaga o arquivo e usa o **npm i** aí será instalado aversão mais atualizada.

### Instalar a biblioteca do Bcrypt
```npm i bcrypt```

### Instalando o Express
```npm i express```

### ALTERAÇÕES no package.json
  "scripts": {"test": "echo \"Error: no test specified\" && exit 1"}
  > "start": "nodemon"

   "main": "index.js",
   > "main": "src/index.js",

**Ai rodo com o código npm start** ai o servidor já vai estar funcionando.

#### Orientações Adicionais
**const** = uma constante, sempre um único valor.
***let**: uma variável que sofrerá modificações
Para rodar o código digitamos 
```node index.js```


#### Varias arquivos JS para integrar.
```module.exports = nomeFunção```
Aqui vou exportar essa função para ser usada e vista em outros arquivos. Inserida ao final do código.

**E pra importar (receber no outro arquivo)**

```const nomeFunção = require('./nomeDoArquivoJS');```

### Operando com API (também chamada de endpoints)




#### Criar uma requisição no INSOMINIA (testar as APIse Aplicações )
Já logado vou em create request colletion
vamos criar requisições HTTP
Como faz uma consulta uso o verbo GET
POST enviar informaçã
PUSH atualizar
DELETE remover

Fullture-