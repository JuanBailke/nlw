# Projeto Nearby App

Esse projeto é sobre um clube de benefícios de estabelecimentos utilizando cupons. Sendo minha primeira experiência com Expo e desenvolvimento mobile.

---

## O Projeto

**As principais funcionalidades do aplicativo são**

- **Localização**: Utilizando a biblioteca expo-location é possível efetuar o uso da localização do aparelho do usuário para encontrar os estabelecimentos próximos participantes.
- **Leitura de QRCode**: Já utilizando as funcionaliades da biblioteca expo-camera, o aplicativo escaneia QRCodes, permitindo o resgate dos cupons.


![Overview do Projeto](https://github.com/JuanBailke/nlw/blob/main/imagens/Telas.jpeg)

---

## Passo a passo para executar o projeto

Para executar o **Nearby App**, você precisa clonar o repositório, instalar as dependências utilizadas, iniciar a API e o projeto mobile.

### **1. Clonando o Repositório**

```bash
# Clone o repositório:
git clone https://github.com/JuanBailke/nlw.git

# Acesse a pasta do projeto:
cd nlw
```

### **2. Instalando e iniciando a API**

Esta API fornecida foi desenvolvida em **Node.js** utilizando **Prisma** para consultas SQL.

```bash
# Acesse a pasta da API:
cd api

# Instale as dependências:
npm install

# Inicie o servidor:
npm start
```

A API iniciará na porta **3333** por padrão.

### **3. Instalando e iniciando a aplicação**

**Observação:** Verifique o seu endereço de IP local e altere a variável **baseURL** no arquivo mobile/src/services/api.ts, mantendo a porta 3333 no final.

```bash
# Retorne para a raiz do projeto para entrar na pasta mobile:
cd ../mobile

# Instale as dependências:
npm install

# Inicie o projeto:
npx expo start
```

---

Assim, o projeto **Nearby App** já deve estar funcionando sem problemas!

Para abrir o aplicativo você pode utilizar um emulador ou um dispositivo físico com o aplicativo **Expo Go**, encontrado nas lojas de Apps.

---

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **Expo Router**
- **Node.js**
- **Prisma**
- **TypeScript**
- **Design Pattern: Composition**

---

## Observação

Caso encontre algum problema para acessar o site, favor me contatar pelo LinkedIn.

## Agradecimentos

Curso realizado na NLW-Pocket-mobile da
[RocketSeat](https://app.rocketseat.com.br/)

## Autor

Juan Felipe Cavalari Bailke

[LinkedIn](https://www.linkedin.com/in/juan-felipe-cavalari-bailke-b8901b170/)
