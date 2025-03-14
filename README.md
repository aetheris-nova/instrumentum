<div align="center">
  <img alt="An ornate golden compass surrounded by orbs" src="https://github.com/aetheris-nova/regimen-contractus/blob/main/images/emblem@128x128.png" height="128" />
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
* [2. Getting Started](#-2-getting-started)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Installation](#22-installation)
* [3. Appendix](#-3-appendix)
  - [3.1. Packages](#31-packages)
* [4. How to contribute](#-4-how-to-contribute)

## 🗂️ 1. Overview

### 1.1. Monorepo project structure

The repo follows the following structure:

```text
.
├─ packages
│   ├── <package>
│   │   ├── .lintstagedrc.mjs
│   │   ├── LICENSE
│   │   ├── package.json       <-- contains package dependencies and is used to run package-level scripts
│   │   ├── README.md
│   │   ├── release.config.mjs <-- semantic release configuration
│   │   └── ...
│   └── ...                    <-- other packages
├── package.json               <-- root package.json that contains top-level dependencies and tools
└── ...
```

#### Root `package.json`

The root `package.json` utilizes `pnpm`'s workspace feature. The root `package.json` should only reference packages that are used at the root level or are utilities/tools.

#### `packages/` Directory

The `packages/` directory contains, as the name suggests, the packages of the monorepo.

#### `packages/<package>` Directory

Each package **SHOULD** reflect the name of the package, i.e. the `packages/sigillum/` and **SHOULD** contain the following files and directories:

* `.lintstagedrc.mjs` - Scripts to run on the pre-commit hook. This file is **REQUIRED**, however, if there are no scripts to run, use an empty file.
* `LICENSE` - The license for the package.
* `package.json` - The package's dependencies and is used to run package-level scripts.
* `README.md` - Contains installation and usage instructions relevant to the package.
* `release.config.mjs` - The local `semantic-release` configuration.

## 🪄 2. Getting Started

### 2.1. Requirements

* Install [Node v20.18.0+](https://nodejs.org/en/) (LTS as of 9th November 2024)
* Install [pnpm v9+](https://pnpm.io/installation)

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Installation

1. Install the dependencies using:

```shell
pnpm install
```

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Packages

| Name                                                  | Visibility | Description                                             | Package                                                                                                                                     |
|-------------------------------------------------------|------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [`errors`](./packages/errors/README.md)               | `public`   | TypeScript errors used in the Aetheris Nova apps/tools. | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Ferrors)](https://www.npmjs.com/package/%40aetherisnova/errors)               |
| [`types`](./packages/types/README.md)                 | `public`   | TypeScript types for the Aetheris Nova apps/tools.      | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Ftypes)](https://www.npmjs.com/package/%40aetherisnova/types)                 |
| [`ui-components`](./packages/ui-components/README.md) | `public`   | React UI components used in the Aetheris Nova apps.     | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Fui-components)](https://www.npmjs.com/package/%40aetherisnova/ui-components) |
| [`utils`](./packages/utils/README.md)                 | `public`   | TypeScript utilities for the Aetheris Nova apps/tools.  | [![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Futils)](https://www.npmjs.com/package/%40aetherisnova/utils)                 |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How to contribute

Please read the [**contributing guide**](./CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[table-of-contents]: #table-of-contents
