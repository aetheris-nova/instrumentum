# Contributing

### Table of contents

* [1. Getting started](#-1-getting-started)
  - [1.1. Requirements](#11-requirements)
  - [1.2. Installation](#12-installation)
* [2. Development](#-2-development)
  - [2.1. Package scripts](#21-package-scripts)
  - [2.2. Adding dependencies](#22-adding-dependencies)
* [3. Committing](#-3-committing)
* [4. Pull requests](#-4-pull-requests)
* [5. Releasing](#-5-releasing)

## 🪄 1. Getting started

### 1.1. Requirements

* Install [Node v26+](https://nodejs.org/en/)
* Install [pnpm v10.3.0+](https://pnpm.io/installation)

### 1.2. Installation

```shell
pnpm install
```

This installs the dependencies for every package in the workspace and sets up the git hooks.

<sup>[Back to top ^][table-of-contents]</sup>

## 🛠️ 2. Development

### 2.1. Package scripts

Scripts are run per package with pnpm's filter flag:

```shell
pnpm -F @aetherisnova/ui-kit run <script>
```

Each package's README lists the scripts it supports. The checks that run on a pull request are `lint`, `test` and `typecheck`, so running those before pushing avoids a round trip.

Staged files are formatted with Prettier on the `pre-commit` hook, so formatting does not need to be run by hand.

### 2.2. Adding dependencies

Dependencies belong to the package that uses them:

```shell
pnpm -F @aetherisnova/ui-kit add <dependency>
```

A dependency that is shared by more than one package **SHOULD** be added to the `catalog:` in `pnpm-workspace.yaml` and referenced as `"<dependency>": "catalog:"`, so the version is declared once.

Tooling that the root configs import - such as the ESLint plugins used by `eslint.config.mjs` - **MUST** be installed at the workspace root with `pnpm add -w -D <dependency>`, as the root config files resolve their imports from the root.

<sup>[Back to top ^][table-of-contents]</sup>

## 📝 3. Committing

Commits follow the [conventional commits][conventional-commits] specification and are linted by [commitlint][commitlint] on the `commit-msg` hook:

```text
<type>(<scope>): <description>
```

For example:

```text
feat(ui-kit): add snake loader
fix(utilities): correct the light year conversion
```

The scope **SHOULD** be the name of the package the change belongs to. The type determines the next version of that package, so:

* `fix:` gives a patch release
* `feat:` gives a minor release
* a `BREAKING CHANGE:` footer gives a major release

<sup>[Back to top ^][table-of-contents]</sup>

## 🔀 4. Pull requests

* Branch from `main`, or from `beta` if the change is destined for a pre-release.
* The pull request **title** is linted against the same conventional commits specification as the commits, as it becomes the commit message when the pull request is squashed.
* Only the checks for the packages you touched run, so keep unrelated changes out of the branch.

<sup>[Back to top ^][table-of-contents]</sup>

## 🚀 5. Releasing

Releasing is automated, there is nothing to run by hand.

* Merging to `main` publishes a release, merging to `beta` publishes a pre-release.
* [`semantic-release`][semantic-release] determines the next version for each package from the commits since its previous release, updates the `package.json` and `CHANGELOG.md`, tags the commit as `<package name>-v<version>` and publishes to npm.
* A package with no releasable commits is skipped.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[commitlint]: https://commitlint.js.org
[conventional-commits]: https://www.conventionalcommits.org
[semantic-release]: https://semantic-release.gitbook.io/semantic-release
[table-of-contents]: #table-of-contents
