FROM node:18

WORKDIR /app

COPY . .

RUN npm install --prefix /app

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
