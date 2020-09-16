<div align="center">

# eslint-config-pretty-react 💄

## (Almost) Zero config ESLint rules for JavaScript / React projects

</div>

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]

<!-- PROJECT LOGO -->
<br />

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Packages](#packages)
  - [Libraries](#libraries)
  - [Packs](#packs)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## About the project

We all have been (probably) in charge of some new project configuration. And, if we care about code patterns, linting crossed our minds already.

ESLint is the go to option when it comes to JavaScript projects and, I've got to say, configuring the hundreds (or maybe thousands 🤔) of rules can be a daunting task🤯.

This is a repository containing some ESLint plugins and rules that I personally like👌.

---

## Installation

You should install this package in your devDependecies via npm or yarn:

```sh
npm i --save-dev eslint-config-pretty-react
```

or

```sh
yarn add -D eslint-config-pretty-react
```

---

## Usage

Create a `.eslintrc` and add the package to the extends key:

```json
{
  "extends": ["pretty-react"],
  "rules": {
    // if you want to override some rules
  }
}
```

This makes use of the whole `pretty-react` package, but the project it's split in a few [packs](#packs) that will (most likely) make your life easier.

---

## Packages

### Libraries

This project contains a set of libraries that add some linting rules:

- [ESLint](#eslint)
- [eslint-plugin-react](#eslint-plugin-react)
- [eslint-plugin-react-hooks](#eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](#eslint-plugin-jsx-a11y)
- [eslint-plugin-jest](#eslint-plugin-jest)
- [eslint-plugin-jest-dom](#eslint-plugin-jest-dom)
- [eslint-plugin-testing-library](#eslint-plugin-testing-library)
- [eslint-plugin-prettier](#eslint-plugin-prettier) (we are not using any rules but you can. It's being used to be able to support Prettier with React and TypeScript)
- [@typescript-eslint/eslint-plugin](#@typescript-eslint/eslint-plugin)

You can use the entire package with:

```json
"extends": ["pretty-react"]
```

But, if you prefer, you can also use the following individual configs:

```json
"extends": ["pretty-react/<config-name>"]
```

- [best-practices](#best-practices)
- [es6](#es6)
- [possible-errors](#possible-errors)
- [stylistic](#stylistic)
- [jsx-a11y](#jsx-a11y)
- [jest](#jest)
- [jest-dom](#jest-dom)
- [testing-library](#testing-library)
- [react](#react)
- [typescript](#typescript)

### Packs

For your convenience the following packs have been created:

```json
"extends": ["pretty-react/packs/<packs-name>"]
```

**I am using React with vanilla JavaScript**

- [jsx](#jsx)

```json
"extends": ["pretty-react/packs/<jsx>"]
```

**I am using React with TypeScript**

- [tsx](#tsx)

```json
"extends": ["pretty-react/packs/<tsx>"]
```

**I am using Jest with Testing-Library**

- [testing-library](#testing-library)

```json
"extends": ["pretty-react/packs/<testing-library>"]
```

---

## Roadmap

See the [open issues](#issues) for a list of proposed features (and known issues).

---

## Contributing

Found a bug? A typo? Didn't like that extra white space? Contributions are **highly appreciated** 🙌!

1. Fork the Project
2. Create your Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add a feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- LINKS -->

[version-badge]: https://img.shields.io/npm/v/eslint-config-pretty-react?color=red
[package]: https://www.npmjs.com/package/eslint-config-prett-react
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-pretty-react
[npmtrends]: http://www.npmtrends.com/eslint-config-pretty-react
[license-badge]: https://img.shields.io/npm/l/eslint-config-pretty-react
[license]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/LICENSE
[npm]: https://www.npmjs.com
[npm-package]: https://www.npmjs.com/package/eslint-config-pretty-react
[prs-badge]: https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square
[prs]: http://makeapullrequest.com
[bugs]: https://github.com/FranciscoMCG/eslint-config-pretty-react/issues
[issues]: https://github.com/FranciscoMCG/eslint-config-pretty-react/issues
[eslint]: https://github.com/eslint/eslint
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
[eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library
[eslint-plugin-prettier]: https://github.com/prettier/eslint-plugin-prettier
[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[best-practices]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/best-practices/index.js
[es6]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/es6/index.js
[possible-errors]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/possible-errors/index.js
[stylistic]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/stylistic/index.js
[jsx-a11y]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/jsx-a11y/index.js
[jest]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/jest/index.js
[jest-dom]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/jest-dom/index.js
[testing-library]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/testing-library/index.js
[react]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/react/index.js
[typescript]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/typescript/index.js
[jsx]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/packs/jsx/index.js
[tsx]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/packs/tsx/index.js
[testing-library-pack]: https://github.com/FranciscoMCG/eslint-config-pretty-react/blob/master/packs/testing-library/index.js
