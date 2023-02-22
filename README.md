# AI 21

<p align="center"><a href="https://studio.ai21.com/overview" target="_blank"><img src="https://lh3.googleusercontent.com/NIxR42H8Dw-Eduv8vQMxmev5ZXskc7mzU1tqJHHiVxFPGGxp2z-olNA8PtNzD8wJscI5j6n4xLz3cqaTeWWLotKwRyGIsTXJa2zYU3XwvDc85_mHaA" width="400"></a></p>

<div align="center">
    This is an AI21 Labs npm package to use in your node projects

    > Light and fully documented for TS and JS
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.com/package/@officialyenum/ai21)
[![Build status](https://img.shields.io/github/actions/workflow/status/axios/axios/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square)](https://github.com/officialyenum/ai21/actions/workflows/snyk.yml)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/officialyenum/ai21)
[![npm downloads](https://img.shields.io/npm/dm/@officialyenum/ai21.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@officialyenum/ai21)
[![Known Vulnerabilities](https://snyk.io/test/npm/@officialyenum/ai21/badge.svg)](https://snyk.io/test/npm/@officialyenum/ai21)
[![Test Status](https://github.com/officialyenum/ai21/actions/workflows/tests.yml/badge.svg)](https://github.com/officialyenum/ai21)
[![Downloads](https://img.shields.io/npm/dt/@officialyenum/ai21.svg)](https://npmjs.com/package/@officialyenum/ai21)
[![last commit](https://img.shields.io/github/last-commit/officialyenum/ai21.svg)](https://github.com/officialyenum/ai21)
[![codecov](https://img.shields.io/codecov/c/github/officialyenum/ai21/main.svg)](https://codecov.io/gh/officialyenum/ai21)
[![GitHub](https://img.shields.io/github/stars/officialyenum/ai21.svg)](https://github.com/officialyenum/ai21)
[![Quality](https://img.shields.io/npms-io/quality-score/@officialyenum/ai21.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=@officialyenum/ai21)
[![license MIT](https://img.shields.io/npm/l/@officialyenum/ai21.svg)](https://github.com/AlexXanderGrib/age/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/@officialyenum/ai21)](https://bundlephobia.com/package/@officialyenum/ai21)


</div>

## Table of Contents

-   [Technologies](#technologies)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [How to import](#how-to-import)
        -   [How to construct](#how-to-construct)
        -   [Properties](#properties)
    -   [Testing](#testing)
    -   [Documentation](#documentation)
    -   [Deployment](#deployment)
    -   [Limitations](#limitations)
-   [Contribute](#contribute)
-   [Support](#support)
-   [License](#license)

## Technologies

-   [Node JS](https://nodejs.org/) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
-   [AI21 LABS](https://studio.ai21.com/overview) - AI21 Labs is an AI lab & product company whose mission is to re-imagine the way we read and write by making the machine a thought partner to humans.

## Getting Started

-  Please click [here](https://studio.ai21.com/overview) to register on AI21 Studio if you do not already have an account
-  Click on your profile image and Go To your account details  to get your api key

<p align="center"><a href="https://studio.ai21.com/overview" target="_blank"><img src="https://res.cloudinary.com/yenum-dev/image/upload/v1677065723/chuckymagic/ai21-get-key-image_hmxmse.png" width="400"></a></p>

### 📦 Installation

- **Using `npm`**
  ```shell
  npm i @officialyenum/ai21
  ```
- **Using `Yarn`**
  ```shell
  yarn add @officialyenum/ai21
  ```
- **Using `pnpm`**
  ```shell
  pnpm add @officialyenum/ai21
  ```
- **Using `unpkg`**
  ```html
    <script src="https://unpkg.com/browse/@officialyenum/ai21@0.0.2-development/lib/cjs/index.min.js"></script>

  ```
- **Using `cdn jsdelivr`**
  ```html
    <script src="https://cdn.jsdelivr.net/npm/@officialyenum/ai21@0.0.2-development/lib/cjs/index.min.js"></script>

  ```

### ⚙️ Usage

#### How to import

1. ES Modules
   ```javascript
   import { AI21 } from "@officialyenum/ai21";
   ```
2. Common JS
   ```javascript
   const { AI21 } = require("@officialyenum/ai21");
   ```

#### How to construct

Ways to construct

1. Initialize
   ```javascript
   const token = "pDsubXXXXXXXXXXXXXXXXXXXXXXYSg8y"; // pass your AI21 Labs AI Token Here
   const ai = new AI21(token);
   ```
2. Summarize
   ```javascript
   const data = {
    text: "article text goes here",
    type: "wikipedia_article", //financial_report, academic_paper, reviews
   }
   const resp = await ai.summarize(data);
   console.log(resp);
    // status : failed | success
    // message : "Summaries Retrieved Successfully" | error message
    // data : {
    //  summaries : [
    //      {text : "Summarized Text goes here"}
    //  ]
    // }
    //
   ```
3. Summarize Restaurant Review
   ```javascript
   const data = {
    restaurant: "restaurant name goes here",
    review: "review text goes here"
    type: "reviews", //financial_report, academic_paper, wikipedia_article
   }
   const resp = await ai.summarize(data);
   console.log(resp);
    // status : failed | success
    // message : "Summaries Retrieved Successfully" | error message
    // data : {
    //  summaries : [
    //      {text : "Summarized Text goes here"}
    //  ]
    // }
    //
   ```

#### Properties

1. `shows your token`
   ```javascript
   console.log(ai.token); // khabhbbaehbhrbhvha
   ```

### Testing
-   Unit Testing Implemented


### Documentation
-   Please click [here](https://www.github.com/officialyenum/ai21/#README.md) to read

### Deployment

This project is published on [npmjs](https://www.npmjs.com/)

-   Please click [here](https://www.npmjs.com/package/@officialyenum/ai21) to access the published library

### Limitations
-   None So Far

## Contribute

- Issue Tracker: https://www.github.com/officialyenum/ai21/issues
- Source Code: https://www.github.com/officialyenum/ai21

## Support

If you are having issues, please let me know.
I have a mailing list located at: 
hi@yenum.dev,
oponechukwuyenum@gmail.com, OR 
oponechukwuyenum@icloud.com

## License

The project is licensed under the MIT license.