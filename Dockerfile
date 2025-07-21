# Use official Node.js image
FROM node:18

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app .

EXPOSE 1234
CMD ["npm", "start"]
