# Appurist Projects Contributing Guide

This product welcomes and accepts contributions from other open-source developers. Contributions should be in the form of a pull request, as outlined below.

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/appurist/reactivator/blob/master/CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always choose from one of the [issue reporting templates](https://github.com/appurist/reactivator/issues/new/choose) to create new issues. This applies to both **Feature Requests** and **Issue Reports**.

## Pull Request Guidelines

- The `master` branch includes all of the latest changes accepted into the project. It represents the source code for "nightly" builds, or when tagged, the source code for a release.  All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `mywork`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.

- Once automated tests exist, make sure `yarn test` passes. In the meantime, ensure that the output looks reasonable (and ideally matches that posted [here](https://github.com/appurist/reactivator/wiki/Example-use-of-ref(),-reactive()-and-watch()#output)).

- If adding a new feature:
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.
  - Ideally include an accompanying test case.

- If fixing bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred, such as on [codepen.io](https://codepen.io/) or [codesandbox.io](https://codesandbox.io/).
  - Ideally, add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 14+**) and [yarn version 1](https://classic.yarnpkg.com/).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project
```

### Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

To build the package:
``` bash
$ yarn build # create the dist/ output folder
```

To run the (test) example:
``` bash
$ yarn test # run test.mjs to see example output
```

There are some other scripts available in the `scripts` section of the `package.json` file.
