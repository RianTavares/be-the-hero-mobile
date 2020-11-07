<h1 align="center">
    <img alt="Launchbase" src="imgs/logo@3x.png" width="400px" />
</h1>

<blockquote align="center">“Querer vencer significa já ter percorrido metade do caminho.”</blockquote>

## :rocket: Sobre esse projeto

<p>Este projeto é o cliente mobile de um projeto parte da Semana Omnistack de 2020 ofertada pela <a href="https://rocketseat.com.br/" target="_blank"> RocketSeat</a>. 
Na semana Omnistack desenvolvemos um projeto desde seu back-end em <strong>NodeJs</strong> com integração ao database<strong> SQlite</strong>, seu cliente web com <strong>ReactJs</strong>  e seu cliente mobile com <strong>React Native</strong>  </p>
<p>O Intuito da aplicação mobile, ou seja, deste projeto, é listar entidades "Casos", que foram cadastradas no banco anteriormente através do cliente web por entidades "ONGs" (usuários propriamente ditos). Esses "Casos" possuem detalhes sobre algo que tenha ocorrido e que a "ONG" precise de financiamento, constando informações como o valor solicitado pela ONG e contato para que o usuário do APP possa ajudar/doar para o no "Caso" selecionado.</p>

## Telas do projeto

<p align="center">
  <video width="320" height="240" controls>
    <source src="imgs/telas.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

## Como rodar a aplicação

1. Faça o download ou clone o projeto
2. Tenha [Node.js e npm](https://nodejs.org/it/) instalado em sua máquina
3. Rode `npm install` na pasta `mobile`
4. instale [Expo-CLI](https://docs.expo.io/versions/latest/get-started/installation/) globalmente em sua máquinha
5. Inicie o app através do comando `expo start`
6. O projeto agora está rodando. Uma aba se abrirá em seu navegador padrão com um QR caso você queira simular o projeto em seu dispositivo e com a opções de simular em um SDK previamente configurado (iphone com x-code ou android com Android studio)

#### Tecnologias utilizadas para este projeto

Este projeto foi criado utiliziando [Expo](https://docs.expo.io/versions/v37.0.0/) que é uma estrutura e uma plataforma para aplicações universais do React. É um conjunto de ferramentas e serviços criados em torno do React Native e plataformas nativas que ajudam a desenvolver, criar, implantar e iterar rapidamente em iOS, Android e aplicativos da web a partir da mesma base de código JavaScript / TypeScript.

Um fator importante para a escolha deste framework no desenvolvimento do projeto foi a não necessidade de SDK's como x-code e/ou android studio instalados para simular o projeto. Este framework traz uma solução capaz de testar seu app em seu dispositivo. Isso facilita demais visto que a proposta deste projeto foi compartilhada com outras centenas de desenvolvedores.

Para configurar as rotas neste projeto foram utilizados os seguintes pacotes:

```js
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
```

O navegador de pilha do React Navigation fornece uma maneira para o seu aplicativo fazer a transição entre telas e gerenciar o histórico de navegação. Se o seu aplicativo usar apenas um navegador de pilha, será conceitualmente semelhante ao modo como um navegador da Web lida com o estado de navegação - o aplicativo envia e exibe itens da pilha de navegação à medida que os usuários interagem com ele, e isso faz com que o usuário veja telas diferentes. A principal diferença entre como isso funciona em um navegador da Web e no React Navigation é que o navegador de pilha do React Navigation fornece os gestos e animações que você esperaria no Android e iOS ao navegar entre rotas na pilha.

#### :)

- Se você curtiu o projeto não esquece de dar uma :star:
- Me segue lá no Instagram também [@riantba](https://www.instagram.com/riantba/) :heart:
- E claro, me segue aqui no [github](https://github.com/RianTavares) né :)

<h1>Licença</h1>

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2020 Rian Tavares
