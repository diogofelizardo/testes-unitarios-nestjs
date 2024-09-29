# Testes Unitários com NestJS

Bem-vindo ao repositório **Testes Unitários com NestJS**! Este projeto serve como um exemplo prático de como implementar testes unitários em uma API desenvolvida com NestJS, utilizando o Jest como framework de testes. O objetivo é demonstrar tanto testes de sucesso quanto testes de falha, garantindo a robustez e a confiabilidade da aplicação.


---

## Descrição

Este projeto exemplifica a implementação de testes unitários em um serviço de gerenciamento de usuários utilizando NestJS e Jest. Os testes incluem cenários de sucesso, verificando o comportamento esperado dos métodos, bem como cenários de falha, garantindo que a aplicação lida adequadamente com erros e exceções.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **NestJS**: Framework progressivo para construção de aplicações Node.js eficientes e escaláveis.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Jest**: Framework de testes em JavaScript.
- **Git**: Controle de versão.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

### 1. Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode verificar a instalação executando:

  ```bash
  node -v
  ```

  Se não estiver instalado, faça o download em [nodejs.org](https://nodejs.org/).

- **Nest CLI**: Instale o Nest CLI globalmente para facilitar a criação e gerenciamento de projetos NestJS.

  ```bash
  npm install -g @nestjs/cli
  ```

  Verifique a instalação:

  ```bash
  nest --version
  ```

### 2. Clonando o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/testes-unitarios-nestjs.git
```

### 3. Instalando as Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd testes-unitarios-nestjs
npm install
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run start:dev
```

O servidor estará rodando em `http://localhost:3000`. Acesse essa URL no seu navegador para verificar se a aplicação está funcionando corretamente.

## Rodando os Testes

Este projeto inclui testes unitários que cobrem tanto cenários de sucesso quanto de falha. Para executar os testes, execute:

```bash
npm run test
```

### Testes de Sucesso

Os testes de sucesso verificam se os métodos do serviço estão retornando os resultados esperados quando tudo está funcionando corretamente.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
testes-unitarios-nestjs/
├── src/
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.repository.ts
│   │   ├── users.service.ts
│   │   └── users.service.spec.ts
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .eslintrc.js
├── .gitignore
├── jest.config.js
├── nest-cli.json
├── package.json
├── README.md
└── tsconfig.json
```


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues** ou enviar **pull requests** para melhorar este projeto.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

- **Nome:** Diogo Felizardo
- **Email:** developerfelizardo@gmail.com
- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/diogofelizardo/)
- **Instagram:** [Instagram](https://instagram.com/felizardo.dev)

---

**Agradecimentos!**  
Obrigado por visitar este repositório. Esperamos que este exemplo ajude você a implementar testes unitários eficazes em suas aplicações NestJS. Bons testes!
```