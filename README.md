<div align="center">
  <img alt="An ornate golden compass surrounded by orbs" src="https://github.com/aetheris-nova/instrumentum/blob/main/assets/emblem@128x128.png" height="128" />
</div>

<h1 align="center">
  Instrumentum
</h1>

<p align="center">
  The Instrumentum is a collection of sacred tools wielded by the Ordo Aedificatorum, a grand monolithic repository of arcane tools and blessed scripts through which they manifest their works.
</p>

---

### Table of contents

* [1. Overview](#-1-overview)
  - [1.1. Monorepo project structure](#11-monorepo-project-structure)
* [2. Getting started](#-2-getting-started)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Installation](#22-installation)
* [3. Releasing](#-3-releasing)
* [4. Appendix](#-4-appendix)
  - [4.1. Packages](#41-packages)
* [5. How to contribute](#-5-how-to-contribute)

## 🗂️ 1. Overview

### 1.1. Monorepo project structure

The repo follows the following structure:

```text
.
├─ packages
│   ├── <package>
│   │   ├── eslint.config.mjs  <-- extends the root eslint config
│   │   ├── LICENSE
│   │   ├── package.json       <-- contains package dependencies and is used to run package-level scripts
│   │   ├── prettier.config.ts <-- extends the root prettier config
│   │   ├── README.md
│   │   ├── release.config.mjs <-- semantic release configuration
│   │   └── ...
│   └── ...                    <-- other packages
├── eslint.config.mjs          <-- the shared lint rules, extended by each package
├── package.json               <-- root package.json that contains top-level dependencies and tools
├── prettier.config.ts         <-- the shared formatting rules, extended by each package
├── pnpm-workspace.yaml        <-- the workspace packages and the dependency version catalog
└── ...
```

#### Root `package.json`

The root `package.json` utilizes `pnpm`'s workspace feature. The root `package.json` should only reference packages that are used at the root level or are utilities/tools.

#### `packages/` Directory

The `packages/` directory contains, as the name suggests, the packages of the monorepo.

#### `packages/<package>` Directory

Each package **SHOULD** reflect the name of the package, i.e. the `packages/sigillum/` and **SHOULD** contain the following files and directories:

* `eslint.config.mjs` - Re-exports the root lint rules. The root config owns the rules, as the dependencies it imports are installed at the workspace root.
* `LICENSE` - The license for the package.
* `package.json` - The package's dependencies and is used to run package-level scripts.
* `prettier.config.ts` - Re-exports the root formatting rules.
* `README.md` - Contains installation and usage instructions relevant to the package.
* `release.config.mjs` - The local `semantic-release` configuration.

Shared dependency versions are declared once in the `catalog:` of `pnpm-workspace.yaml` and referenced by the packages as `"<dependency>": "catalog:"`.

## 🪄 2. Getting started

### 2.1. Requirements

* Install [Node v26+](https://nodejs.org/en/)
* Install [pnpm v10.3.0+](https://pnpm.io/installation)

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Installation

1. Install the dependencies using:

```shell
pnpm install
```

<sup>[Back to top ^][table-of-contents]</sup>

## 🚀 3. Releasing

Releases are automated with [`semantic-release`][semantic-release] and run per package - a change to one package does not version the others.

* Pushes to `main` publish a release, pushes to `beta` publish a pre-release.
* The version is derived from the [conventional commits][conventional-commits] since the previous release, so `fix:` yields a patch, `feat:` a minor, and a `BREAKING CHANGE:` footer a major.
* Pull request titles are linted against the same convention, as a squashed pull request's title becomes the commit message.
* Each release commits the updated `package.json` and `CHANGELOG.md`, tags it as `<package name>-v<version>` and publishes the package to npm.

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 4. Appendix

### 4.1. Packages

| Name                                            | Visibility | Description                                            | Package                                                                                                                                 |
|-------------------------------------------------|------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [`ui-kit`](./packages/ui-kit/README.md)         | `public`   | React UI components used in the Aetheris Nova apps.    | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Fui-kit)](https://www.npmjs.com/package/%40aetherisnova/ui-kit)           |
| [`utilities`](./packages/utilities/README.md)   | `public`   | TypeScript utilities for the Aetheris Nova apps/tools. | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Futilities)](https://www.npmjs.com/package/%40aetherisnova/utilities)     |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 5. How to contribute

Please read the [**contributing guide**](./CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[conventional-commits]: https://www.conventionalcommits.org
[semantic-release]: https://semantic-release.gitbook.io/semantic-release
[table-of-contents]: #table-of-contents
