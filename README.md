# Teste Técnico Incentivme

Esse é um projeto desenvolvido como teste técnico para a empresa Incentiv.me, criado com ReactJS.

## Deploy

Clique aqui para acessar o deploy do projeto: [Teste técnico Incentiv.me](https://teste-tecnico-incentivme.vercel.app/)

## Sumário

- [Como iniciar](#como-iniciar)
- [O que eu utilizei nesse app](#o-que-eu-utilizei-nesse-app)
- [Como eu organizei esse código](#como-eu-organizei-esse-codigo)
- [Features que não consegui implementar](#bugs-e-features-que-nao-consegui-implementar)
- [Considerações finais](#consideracoes-finais)

## Como iniciar

Você vai precisar realizar o download e instalar o [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) para conseguir rodar a aplicação.

#### Faça a clonagem desse repositório

`git clone https://github.com/wallmartins/teste-tecnico-incentivme`

#### Entre na pasta do projeto

`cd teste-tecnico-incentivme`

### Instale todas as dependências

`npm install`

ou

`yarn`

#### Rode o projeto

`npm start `

ou

`yarn start`

Por padrão, o acesso a aplicação está configurado para abrir em [http://localhost:3000](). Se você quiser mudar a porta na qual abrirá o projeto, basta rodar o programa abaixo:

`CVA_PORT=[PORT_VALUE] npm start`

ou

`CVA_PORT=[PORT_VALUE] yarn start`

## O que eu utilizei nesse app

#### Eslint + Prettier

Eu uso eslint com as configurações do airbnb e o prettier para formatar, automaticamente, espaçamentos, ponto e vírgula, aspas e forçar identação.

Você pode encontrar as configurações de cada um deles nos arquivos:

- **.eslintrc**: esling config;
- **.prettierrc**: prettier config.

#### CSS3 + Flexbox + Grid

Toda a estilização criada nesse projeto foi feita a partir do CSS3 vanilla com algumas propriedades do Flexbox e do Grid Layout para poder organizar os itens na tela e tornar mais organizável o desenvolvimento de todo o layout, seja para o uso no mobile ou no desktop.

#### React e React Hooks

O uso da biblioteca React foi para desenvolver todo o core da aplicação, criando todos os componentes que a compõe. Dentre os Hooks, para além dos mais comuns (useState, useEffect), faço uso de um Custom Hook: useValidationForm. Ele foi criado para realizar a validação dos inputs da aplicação, percebendo se são deixados em branco e também se preenchem um email ou senha válida. Para além disso, fiz uso da multi-mask lib chamada Remask para criar as máscaras para os números de telefone presentes no formulário de contatos.

## Como eu organizei o código

Desenvolvi o código criando pastas por funcionalidade/finalidade:

- **Components**: contém todo o conteúdo relacionado aos componentes e os componentes em si, separados em pasta onde cada um tem relação com o outro;
- **Pages**: contém todas as páginas que compõe o corpo da aplicação, cada qual identificada com o seu nome;
- **Routes**: contém o arquivo routes com todas as rotas da aplicação definidas ali;
- **Hooks**: contém o custom hook que foi usado na aplicação para validar os inputs;
- **Css**: contém todos os arquivos de estilos da aplicação. A pasta Modules contém todos os arquivos de estilo da aplicação, exceto App e Reset que são gerais e estão fora.
- **Assets**: contém as imagens que foram usadas dentro da aplicação.

## Considerações Finais

- Como não houve um banco de dados e nem uma API para ser consumida, optei por fazer uso do Local Storage para armazenar o email do usuário e, a partir dali, poder verificar se ele já havia sido inserido alguma vez ou não. Sei que essa prática não é a melhor no quesito de segurança para armazenamento de dados, entretanto, era a ferramenta que eu dispunha para poder cumprir a feature pedida no teste.
- Optei por realizar o teste em etapas, cumprindo as features em cada parte dele, visto que acreditei que dessa forma tornaria o processo mais facilitado e bem explicado para o usuário já de início, conseguindo perceber por todas as etapas que passaria e o que iria precisar entregar em cada uma delas.
- Na última página, escolhi pela opção de redirecionamento do usuário com um aviso, por tornar mais prático para ele, visto que não havia mais nada a ser feito quando chega naquele momento. Tinha a opção de colocar um botão, mas achei que a experiência se tornava mais facilitada fazendo o redirecionamento depois de alguns segundos, diminuindo um clique que ele precisaria dar para voltar para a página inicial.
