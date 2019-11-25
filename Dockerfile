FROM node:lts-alpine

# Create src directory
WORKDIR /src

# Install src dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle src source
COPY . .

# build src for production with minification
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start"]
