# AI 21

<p align="center"><a href="https://studio.ai21.com/overview" target="_blank"><img src="https://lh3.googleusercontent.com/NIxR42H8Dw-Eduv8vQMxmev5ZXskc7mzU1tqJHHiVxFPGGxp2z-olNA8PtNzD8wJscI5j6n4xLz3cqaTeWWLotKwRyGIsTXJa2zYU3XwvDc85_mHaA" width="400"></a></p>

<div align="center">
    This is an AI21 Studio npm package to support javascript and typescript developers in building scalable & efficient applications powered by AI21's state of the art language models that can process any language comprehension or generation task. No NLP expertise needed.

    > Fully documented for TS and JS
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@officialyenum/ai21.svg?style=flat-square)](https://www.npmjs.com/package/@officialyenum/ai21)
[![Test Status](https://github.com/officialyenum/ai21/actions/workflows/tests.yml/badge.svg)](https://github.com/officialyenum/ai21)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/officialyenum/ai21)
[![npm downloads](https://img.shields.io/npm/dm/@officialyenum/ai21.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@officialyenum/ai21)
[![Known Vulnerabilities](https://snyk.io/test/npm/@officialyenum/ai21/badge.svg)](https://snyk.io/test/npm/@officialyenum/ai21)
[![Downloads](https://img.shields.io/npm/dt/@officialyenum/ai21.svg)](https://npmjs.com/package/@officialyenum/ai21)
[![last commit](https://img.shields.io/github/last-commit/officialyenum/ai21.svg)](https://github.com/officialyenum/ai21)
[![codecov](https://img.shields.io/codecov/c/github/officialyenum/ai21/main.svg)](https://codecov.io/gh/officialyenum/ai21)
[![GitHub](https://img.shields.io/github/stars/officialyenum/ai21.svg)](https://github.com/officialyenum/ai21)
[![Quality](https://img.shields.io/npms-io/quality-score/@officialyenum/ai21.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=@officialyenum/ai21)
[![license MIT](https://img.shields.io/npm/l/@officialyenum/ai21.svg)](https://github.com/officialyenum/ai21/blob/main/LICENSE.txt)
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
   ```typescript
    import { AI21 } from "@officialyenum/ai21";
    import { ISummarizeResponse, ISummaryBody } from '@officialyenum/ai21/lib/cjs/types/library';
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
   ```typescript
   const token = process.env.AI21_TOKEN  as string; // pass your AI21 Labs AI Token Here
   const ai = new AI21(token);
   ```
2. Summarize
   ```javascript
    const data = {
        text: "Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood, above meat, as the preferred protein source. Fish and shellfish were used often since ancient times by wealthy classes as a kind of social marker, not only as a gastronomic delight, but also as a way to stay healthier. This paper reviews thoroughly how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs. Preferences for particular tastes and flavors, local traditions, myths and religious rites (such Lent, Shabbat and Ramadan that prohibited eating some foods and allowed others) as well as cultural exchanges between countries and civilizations (with the incorporation of new ingredients and culinary techniques), have shaped the Mediterranean culinary customs along the history. Such traditions are reflected in many ancient writings, culinary literature and cookbooks. We will analyze some of these sources with special attention to those excerpts, anecdotes, cookbooks, recipes, cooks and even characters related to seafood. Knowledge and learning from our rich Mediterranean culinary heritage are important aspects to bear in mind. Whereas some contemporary celebrity chefs (and probably many diners) are not fully aware of such culinary legacy, others like Ferran Adri`a have recently recognized the importance of studying the past as a driver for creation and gastronomic innovation.",
        type: "wikipedia_article", // financial_report, academic_paper, reviews
    }
    const resp = await ai.summarize(data);
    console.log(resp);
    // {
    //     "status": "success",
    //     "message": "Summaries Retrieved Successfully",
    //     "data": [
    //       {
    //         "text": "Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood as the preferred protein source.\nThis paper reviews how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs.\nSome contemporary celebrity chefs are not fully aware of the rich Mediterranean culinary heritage."
    //       }
    //     ]
    //  }
   ```
   ``` typescript
    const data:ISummaryBody = {
        text: "Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood, above meat, as the preferred protein source. Fish and shellfish were used often since ancient times by wealthy classes as a kind of social marker, not only as a gastronomic delight, but also as a way to stay healthier. This paper reviews thoroughly how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs. Preferences for particular tastes and flavors, local traditions, myths and religious rites (such Lent, Shabbat and Ramadan that prohibited eating some foods and allowed others) as well as cultural exchanges between countries and civilizations (with the incorporation of new ingredients and culinary techniques), have shaped the Mediterranean culinary customs along the history. Such traditions are reflected in many ancient writings, culinary literature and cookbooks. We will analyze some of these sources with special attention to those excerpts, anecdotes, cookbooks, recipes, cooks and even characters related to seafood. Knowledge and learning from our rich Mediterranean culinary heritage are important aspects to bear in mind. Whereas some contemporary celebrity chefs (and probably many diners) are not fully aware of such culinary legacy, others like Ferran Adri`a have recently recognized the importance of studying the past as a driver for creation and gastronomic innovation.",
        type: "wikipedia_article", // financial_report, academic_paper, reviews
    }
    const resp:ISummarizeResponse | undefined = await ai.summarize(data);
    console.log(resp);
    // {
    //     "status": "success",
    //     "message": "Summaries Retrieved Successfully",
    //     "data": [
    //       {
    //         "text": "Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood as the preferred protein source.\nThis paper reviews how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs.\nSome contemporary celebrity chefs are not fully aware of the rich Mediterranean culinary heritage."
    //       }
    //     ]
    //  }
   ```
3. Summarize Restaurant Review
   ```javascript
   const data = {
    restaurant: "La Taqueria",
    review: "La Taqueria is a tiny place with 3 long tables inside and 2 small tables outside. The inside is cramped, but the outside is pleasant. Unfortunately, we had to sit inside as all the outside tables were taken. The tacos are delicious and reasonably priced and the salsa is spicy and flavorful. Service was friendly. Aside from the seating, the only thing I didn't like was the lack of parking - we had to walk six blocks to find a spot"
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
   ```typescript
   const data:ISummaryBody = {
    restaurant: "La Taqueria",
    review: "La Taqueria is a tiny place with 3 long tables inside and 2 small tables outside. The inside is cramped, but the outside is pleasant. Unfortunately, we had to sit inside as all the outside tables were taken. The tacos are delicious and reasonably priced and the salsa is spicy and flavorful. Service was friendly. Aside from the seating, the only thing I didn't like was the lack of parking - we had to walk six blocks to find a spot"
    type: "reviews", //financial_report, academic_paper, wikipedia_article
   }
   
    const resp:ISummarizeResponse | undefined = await ai.summarize(data);
    console.log(resp);
    // {
    //     "status": "success",
    //     "message": "Summaries Retrieved Successfully",
    //     "data": [
    //       {
    //         "text": "Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood as the preferred protein source.\nThis paper reviews how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs.\nSome contemporary celebrity chefs are not fully aware of the rich Mediterranean culinary heritage."
    //       }
    //     ]
    //  }
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

If you notice a missing function, or maybe a bug. Please feel free to submit a PR. I will take a look at it. You will need to fork the repo and create a PR against it with your changes.
Thank you 😄

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