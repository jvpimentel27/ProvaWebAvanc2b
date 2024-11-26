# Como usar

Abra cada uma das pastas separadamente no Visual Studio Code, ou sua IDE/plataforma de preferência e siga as instruções abaixo:

---

## Pasta **API(Back)**

### 1. Configuração Inicial

Primeiro, Crie um arquivo chamado ".env" e escreva o seguinte texto dentro dele:

```
  DATABASE_URL=file:./dev.db
  GROQ_API_KEY=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
```

### 2.Instale as Dependências

Em seguida, abra o terminal e digite:

```
npm install
```

### 3. Executando o Projeto

Você pode executar o projeto através do código:

```
npm run build
```

Se você estiver desevolvendo, o ideal é que, ao invés do `npm run build`, o código usado seja:

```
npm run dev
```

### 4. Resolução de erros

Os erros podem estar relacionado ao PrismaORM, por esse motivo, uma forma de resolvê-los é criando novamente o banco de dados:

```
 npx prisma migrate dev --name init
```

### 5. Extensões do VSCode recomendadas para o desenvolvimento (VSCode):

```
{
    "recommendations": [
        "vscode-icons-team.vscode-icons",
        "esbenp.prettier-vscode",
        "prisma.prisma",
        "Prisma.prisma-insider"
        "rangav.vscode-thunder-client"
        "mikestead.dotenv"
        "qwtel.sqlite-viewer"
    ]
}
```

---

## Pasta **App(Front)**

### 1. Instale as Dependências

Primeiro, abra o terminal e digite:

```
npm install
```

### 2. Executando o Projeto

Em seguida, você pode executar o projeto através do código:

```
npm run web
```

---
