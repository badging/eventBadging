# How to Contribute

This project has issues that are organized on [this github project board](https://github.com/orgs/badging/projects/2). There are 2 ways you could contribute to this project;

## Design Contribution

We are currently working with on [figma designs](https://www.figma.com/file/7tiuJbwakgDu15mOjzKTDK/Badging-Website) for this website that are being translated into the code. Most of the Design contributions are made on request to access the file. Issues that are related to Designing the UI/UX will be labelled with the `design` label in the issues tab.

**NB**: _Unless otherwise, all Frontend UI/UX visual modifications and new features should align with the figma design. Also, all assets (anything that is no-code and is a resource), should be under the [assets folder](assets)_

## Code Contribution

This website Frontend is built using [react framework](https://reactjs.org/tutorial/tutorial.html) and Frontend logic (for authentication and API connection) is built using the [redux logic](https://redux.js.org/tutorials/essentials/part-1-overview-concepts).

### Project Structure

### Running project locally

To get your local instance up and running. ensure that you have `node` and `npm` installed on your local machine. if not, check out [this digitalocean robust tutorial](https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js) depending on what operating system you are using.

1.  Fork and clone this project on your local machine.

    ```sh
    https://github.com/<YOUR_USERNAME>/badging-website.git
    ```

1.  In your project folder, install packages by running

    ```sh
    cd badging-website
    npm install
    ```

1.  Create a new branch for your changes with a meaningful name from your **updated** origin/main branch. If you are not sure how to name your branch, refer to [Jefferderman's post on branch naming](https://gist.github.com/jefffederman/1d492f98b8e3913a75ca).  
    To create a new branch, type;

        ```sh
        git checkout -b branch-name
        ```

1.  To run the project locally on your machine and test out your changes in real-time, run the following command.

    ```sh
    npm run dev
    # runs your the website locally on http://localhost:5050/
    ```

1.  Commit the change(s) and create a Pull Request. Make sure your commits are signed. If you are unsure how to sign commits, check out [this condensed summary on how to sign commits](https://www.freecodecamp.org/news/what-is-commit-signing-in-git/).  
    **Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.**  
    To commit your changes and push them, type the following commands;

        ```sh
        git add .
        git commit -S -m "my changes"
        git push -u origin branch-name
        ```
