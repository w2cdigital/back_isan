# Etapa 1: Construção da aplicação
FROM node:20 AS builder

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install

# Copiar todo o código para dentro do container
COPY . .

# Compilar TypeScript
RUN yarn build

# Etapa 2: Criar a imagem final com apenas os arquivos necessários
FROM node:20.10-alpine

WORKDIR /app

# Copiar apenas os arquivos necessários da build anterior
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

# Instalar apenas as dependências necessárias para produção
RUN yarn install

# Expor porta da aplicação
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
