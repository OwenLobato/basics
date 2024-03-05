# Creating a fullstack app

- run npx create-react-app . <!-- Create react app on root  -->

- clean react project

- create "server" folder and run "cd server"

- run npm init -y <!-- Create node package -->

- add packages on server (npm i express nodemon cors dotenv) <!-- Packages for server -->

- add package config -> add "type": "module" and "start": "nodemon index.js" <!-- Easy import -->

- create ".gitignore" file on server dir

- Create file "index.js" and add basic server config
  (https://expressjs.com/es/starter/hello-world.html)

- Config client package with scripts and run both commands
  ´´´
  "start-client": "npm install && react-scripts start",
  "start-server": "cd server && npm install && npm start",
  ´´´ <!-- Easy way to run front and back  -->

- Add middlewares and express routes on server
