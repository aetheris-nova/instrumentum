<div align="center">
    <img alt="An ornate golden compass surrounded by orbs" src="https://github.com/aetheris-nova/instrumentum/blob/main/assets/emblem@128x128.png" height="128" />
    <img alt="The TypeScript logo - a rounded corner blue square with a 'TS' in white" src="https://github.com/aetheris-nova/instrumentum/blob/main/assets/typescript_icon@128x128.png" height="128" />
</div>

<div align="center">

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-brightgreen.svg)][license]
[![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Futilities)](https://www.npmjs.com/package/%40aetherisnova/utilities)

</div>

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/aetheris-nova/instrumentum?filter=%40aetherisnova%2Futilities*)](https://github.com/aetheris-nova/instrumentum/releases)
[![GitHub Pre-release](https://img.shields.io/github/v/release/aetheris-nova/instrumentum?include_prereleases&filter=%40aetherisnova%2Futilities*&label=pre-release)](https://github.com/aetheris-nova/instrumentum/releases/latest)

</div>

<h1 align="center">
  TypeScript Utilities
</h1>

<p align="center">
  TypeScript utilities for the Aetheris Nova apps/tools.
</p>

---

### Table of contents

* [1. Getting started](#-1-getting-started)
  - [1.1. Installation](#11-installation)
* [2. Usage](#-2-usage)
  - [2.1. Utilities](#21-utilities)
* [3. Appendix](#-3-appendix)
  - [3.1. Useful commands](#31-useful-commands)
* [4. How to contribute](#-4-how-to-contribute)
* [5. License](#-5-license)

## 🪄 1. Getting started

### 1.1. Installation

You can install the utilities using:
```shell
pnpm add @aetherisnova/utilities
```

<sup>[Back to top ^][table-of-contents]</sup>

## 🪛 2. Usage

### 2.1. Utilities

Everything is exported from the package root:

```typescript
import { formatUnits, truncateText } from '@aetherisnova/utilities';
```

| Utility                           | Description                                                                                       |
|-----------------------------------|---------------------------------------------------------------------------------------------------|
| `calculateDistanceBetweenPoints`  | The distance between two points in 3D space.                                                      |
| `createLogger`                    | A logger that only writes at or above the given level.                                            |
| `formatUnits`                     | Formats a `BigNumber` for display, with thousands separators and abbreviation for large values.    |
| `isLocalStorageAvailable`         | Whether `localStorage` can be read and written.                                                   |
| `lightYearsToMeters`              | Converts light years to meters.                                                                   |
| `metersToLightYears`              | Converts meters to light years.                                                                   |
| `truncateText`                    | Shortens text to a maximum length, with an ellipsis.                                              |
| `upsertItemsByKey`                | Merges items into a list, replacing those that match on a key and appending the rest.             |

> ⚠️ **NOTE:** `formatUnits` takes an amount that is already in its standard form - it does not convert from base units. For a chain amount, scale it first, i.e. `new BigNumber(mist.toString()).shiftedBy(-9)` for SUI.

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Useful commands

| Command              | Description                                                                       |
|----------------------|-----------------------------------------------------------------------------------|
| `pnpm run build`     | Bundles the package and generates the declaration files to the `dist/` directory. |
| `pnpm run clean`     | Deletes the `dist/` directory and the `tsconfig.*.tsbuildinfo` files.             |
| `pnpm run lint`      | Runs the linter based on the rules in `eslint.config.mjs`.                        |
| `pnpm run prettier`  | Formats the source files.                                                         |
| `pnpm run test`      | Runs the tests.                                                                   |
| `pnpm run typecheck` | Typechecks the source without emitting anything.                                  |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How to contribute

Please read the [**contributing guide**](https://github.com/aetheris-nova/instrumentum/blob/main/CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 5. License

Please refer to the [LICENSE][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[license]: LICENSE
[table-of-contents]: #table-of-contents

