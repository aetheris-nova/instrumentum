<div align="center">
    <img alt="An ornate golden compass surrounded by orbs" src="https://github.com/aetheris-nova/instrumentum/blob/main/assets/emblem@128x128.png" height="64" />
    <img alt="The React logo - a blue atom that has one particle being circled by three others" src="https://github.com/aetheris-nova/instrumentum/blob/main/assets/react_icon@128x128.png" height="64" />
</div>

<div align="center">

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-brightgreen.svg)][license]
[![NPM Version](https://img.shields.io/npm/v/%40aetherisnova%2Fui-kit)](https://www.npmjs.com/package/%40aetherisnova/ui-kit)

</div>

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/aetheris-nova/instrumentum?filter=%40aetherisnova%2Fui-kit*)](https://github.com/aetheris-nova/instrumentum/releases)
[![GitHub Pre-release](https://img.shields.io/github/v/release/aetheris-nova/instrumentum?include_prereleases&filter=%40aetherisnova%2Fui-kit*&label=pre-release)](https://github.com/aetheris-nova/instrumentum/releases/latest)

</div>

<h1 align="center">
  UI Kit
</h1>

<p align="center">
  React UI components used in the Aetheris Nova apps.
</p>

---

### Table of contents

* [1. Getting started](#-1-getting-started)
  - [1.1. Installation](#11-installation)
  - [1.2. Setup](#12-setup)
* [2. Usage](#-2-usage)
  - [2.1. Components](#21-components)
  - [2.2. Color mode](#22-color-mode)
  - [2.3. Storybook](#23-storybook)
* [3. Appendix](#-3-appendix)
  - [3.1. Useful commands](#31-useful-commands)
* [4. How to contribute](#-4-how-to-contribute)
* [5. License](#-5-license)

## 🪄 1. Getting started

### 1.1. Installation

You can install the UI kit using:

```shell
pnpm add @aetherisnova/ui-kit
```

> ⚠️ **NOTE:** React v19.3.0+ is a peer dependency and is expected to be installed by the consuming app. Everything else the components need is installed with the package.

<sup>[Back to top ^][table-of-contents]</sup>

### 1.2. Setup

Two things are required: the stylesheet and the provider.

The stylesheet carries the bundled fonts and **MUST** be imported once, at the entry point of the app:

```typescript
import '@aetherisnova/ui-kit/styles.css';
```

> ⚠️ **NOTE:** Without this import, the components silently fall back to the system fonts - there is no error.

The `AppProvider` supplies the Chakra UI system, the color mode and the EVE Frontier dApp kit, so it **MUST** wrap the app:

```typescript
import { AppProvider } from '@aetherisnova/ui-kit';

export default function App() {
  return (
    <AppProvider>
      {/* the rest of the app */}
    </AppProvider>
  );
}
```

`AppProvider` accepts an optional `forcedColorMode` ("dark", "light" or "system") that pins the color mode instead of following the system preference. It is mainly useful for tests and previews.

<sup>[Back to top ^][table-of-contents]</sup>

## 🪛 2. Usage

### 2.1. Components

Components are imported from the package root:

```typescript
import { Button, Modal, SnakeLoader } from '@aetherisnova/ui-kit';
```

| Export                                                             | Description                                                                              |
|--------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| `Button`, `IconButton`                                             | Buttons with the "primary"/"secondary" schemes of the design.                            |
| `Card`, `EmptyState`, `ListItem`, `ProfileItem`                    | Layout and list primitives.                                                              |
| `DataList`, `DataListItem`                                         | Label/value rows, with optional copy-to-clipboard and info tips.                         |
| `Field`, `Input`, `Textarea`                                       | Form controls.                                                                           |
| `InfoTip`, `ToggleTip`, `Tooltip`                                  | Tips - on hover for `Tooltip`, on click for the other two.                               |
| `Modal`, `LoadingModal`                                            | Dialogs.                                                                                 |
| `PulseLoader`, `SnakeLoader`                                       | Loading indicators. Both inherit the color of their container.                           |
| `ANPortaeAstralesIcon`, `EFEVEToken`, `EFGas`                      | Icons.                                                                                   |
| `useDesktopAndUp`, `useMobileOnly`, `useTabletAndUp`, `useMediaQuery` | Breakpoint hooks.                                                                      |

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Color mode

The color mode is a class on the `html` element, managed by [`next-themes`][next-themes]. Components read it through the Chakra UI semantic tokens, so they follow it without being told. To read or change it, use the `useColorMode` hook:

```typescript
import { useColorMode } from '@aetherisnova/ui-kit';

export default function ColorModeToggle() {
  const { colorMode, resolvedColorMode, setColorMode } = useColorMode();

  return (
    <button onClick={() => setColorMode(resolvedColorMode === 'dark' ? 'light' : 'dark')}>
      {colorMode}
    </button>
  );
}
```

<sup>[Back to top ^][table-of-contents]</sup>

### 2.3. Storybook

Every component has stories. To browse them, run:

```shell
pnpm run storybook
```

...and open [http://localhost:6006](http://localhost:6006).

> ⚠️ **NOTE:** The stories render in an iframe, so a browser extension wallet is not detected in them - the mock wallet in `.storybook/mocks/` stands in for it. To use a real extension, open a story's canvas directly at `http://localhost:6006/iframe.html?id=<story id>&viewMode=story`.

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Useful commands

| Command                      | Description                                                                          |
|------------------------------|--------------------------------------------------------------------------------------|
| `pnpm run build`             | Bundles the package and generates the declaration files to the `dist/` directory.    |
| `pnpm run build:dependencies`| Builds the workspace packages this package depends on.                               |
| `pnpm run clean`             | Deletes the `dist/` directory and the `tsconfig.*.tsbuildinfo` files.                |
| `pnpm run lint`              | Runs the linter based on the rules in `eslint.config.mjs`.                           |
| `pnpm run prettier`          | Formats the source files.                                                            |
| `pnpm run storybook`         | Starts Storybook on port 6006.                                                       |
| `pnpm run storybook:build`   | Builds a static Storybook to the `storybook-static/` directory.                      |
| `pnpm run test`              | Runs the tests.                                                                      |
| `pnpm run typecheck`         | Typechecks the source without emitting anything.                                     |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How to contribute

Please read the [**contributing guide**](https://github.com/aetheris-nova/instrumentum/blob/main/CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 5. License

Please refer to the [LICENSE][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[license]: LICENSE
[next-themes]: https://github.com/pacocoursey/next-themes
[table-of-contents]: #table-of-contents
