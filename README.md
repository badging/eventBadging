cd![Frame68](https://user-images.githubusercontent.com/71280528/195633476-a3f93d6e-3917-4d1b-8ac6-d8fdb4b9daf2.png)

# DEI Badging

The DEI Badging initiative is an award system whereby open-source events earn badges and enhance their events to be more inclusive using the feedback they get from reviewers. The DEI badges help nurture a system that promotes leadership, self-reflection, and self-improvement on issues critical to building the Internet as a social good.

## Aim of the DEI Badging
- Establish an environment where events can engage in the badging program
- Aligning the badging program with best practices, guidelines, and recommendations from Diversity & Inclusion efforts on the CHAOSS project
- Connect with existing badging standards of IMS Global including
- Building an open, peer-review system for the D&I Badging Program

To learn more about DEI Badging, please check out the CHAOSS Community Handbook.

## Badging Website
This website was created to help event organizers easily register their events to get badged. This evnt badge focuses on the experience of the event attendees(everyone present at the event), improving DEI in open-source events.

# Contributing To this Project
To contribute to this project please follow the guidelines found in our [CONTRIBUTION.md](CONTRIBUTION.md)! file. This project is open for contribution to all from newbie to expert regardless if you're working on your 1000th contribution to open source or your 1st. 

# Project Setup Guidelines
The repository has two main branches,
- `main`: for production. This is currently running on [this instance](https://badging.herokuapp.com/)
- `staging`: the development branch that is used for all test purposes and currently running on [this instance](https://badging-staging.herokuapp.com/). When you clone this repo, this will be the master branch

To get your local instance up and running;
Ensure that you have `node` and `npm` installed on your local machine. If not, check out [this digitalocean robust tutorial](https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js) depending on what operating system you are using

1. Fork and Clone this repository
```sh
  git clone https://github.com/BADGING/badging-website.git
```
**Make sure to replace `BADGING` with your GitHub username**

2. Move into the project folder
```sh
cd badging-website
```
3. Run the code below to install additional dependencies
```sh
npm install
```
4. Once all packages have been installed run 
```sh
npm run dev
```
**Your app should be running on** `http://localhost:5050`

## Build the App
Incase you want to build the application before pushing it.

1. Create an `.env` file in the website folder and supply a port number
```ini
# supply a port number
PORT=3000
```
2. Build the project
```sh
npm run build
```
3. Start the local server
```sh
npm start
```
Your built app will run on the port you supplied in the `.env` file and for this case, `http://localhost:3000`.

# Website Maintainers
