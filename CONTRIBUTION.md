# How to Contribute
This project has issues that are organized on [this github project board](https://github.com/orgs/badging/projects/2). There are 2 ways you could contribute to this project;

## 1. Design Contribution
We are currently working with on [figma designs](https://www.figma.com/file/7tiuJbwakgDu15mOjzKTDK/Badging-Website) for this website that are being translated into the code. Most of the Design contributions are made on request to access the file. Issues that are related to Designing the UI/UX will be labelled with the `design` label in the issues tab.

## 2. Code Contribution
1. When making a code contribution to this repository, ensure you folow the **Project Setup Guidelines** in the [README.md](README.md) file.
2. Create a new branch
```sh
git checkout -b branch-name
```
3. Make your change(s)
4. Commit the change(s) and push to create a pull request on the `staging` branch for testing
```sh
git add .
git commit -s -m "This is my first commit"
git push -u origin branch-name
```
**When pushing your changes ensure you Sign-off all commits**

## Signing-off on Commits - DCO Check
To contribute to this project, you must agree to the [Developer Certificate of Origin](https://developercertificate.org/) by the [CHAOSS charter](https://chaoss.community/about/charter/#user-content-8-intellectual-property-policy) for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to make the contribution.
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

  ```
  Signed-off-by: Jane Smith <jane.smith@example.com>
  ```
This can be easily done by using the `-s` flag when using `git commit`. For example:

```
$ git commit -s -m “my commit message w/signoff”
```
To ensure all your commits are signed, you may choose to [configure git](https://gist.github.com/xavierfoucrier/c156027fcc6ae23bcee1204199f177da) properly by editing your global ```.gitconfig```

**Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.** 
