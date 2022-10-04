# Badging Website
Home of the CHAOSS DEI Badging, a CHAOSS Project

## how to contribute
This project has issues that are organized on [this github project board](https://github.com/orgs/badging/projects/2). There are two ways you could contribute to this project;

#### 1. Website Design 
-----------------------------------------
We are currently working with on [figma designs](https://www.figma.com/file/7tiuJbwakgDu15mOjzKTDK/Badging-Website) that are being translated into the code. Most of the Design contributions are made on request to access the file. Issues that are related to Designing the UI/UX will be labelled with the `design` label

#### 2. Contributing through Code
-----------------------------------------
The repository has two main branches,
- `main`: for production. this is currently running on [this instance](https://badging.herokuapp.com/)
- `staging`: the development branch that is used for all test purposes and currently running on [this instance](https://badging-staging.herokuapp.com/). When you clone this repo, this will be the master branch

To get your local instance up and running;
Ensure that you have `node` and `npm` installed on your local machine. if not, check out [this digitalocean robust tutorial](https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js) depending on what operating system you are using

1. fork and clone the repository
```sh
  git clone https://github.com/badging/badging-website.git
```
make sure to replace `badging` with your username 

2. move into your project folder and run
```sh
npm install
```
3. Once all packages have been installed run 
```sh
npm run dev
```
Your app should be running on `http://localhost:5050`

Once you are done with your changes. you can always push them to and create a pull request on the `staging` branch for testing

Incase you want to build the application before pushing it,
1. create an `.env` file and supply a port number
```ini
# supply a port number
PORT=3000
```
2. build the project
```sh
npm run build
```
3. start the local server
```sh
npm start
```
your built app will run on the port you supplied in the env file and for this case, `http://localhost:3000`
