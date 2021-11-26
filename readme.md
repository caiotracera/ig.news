<h1 align="center">
  <img src="./.github/logo.svg" height="120" />
</h1>

<h4 align="center">A ReactJS application for a premium blog.</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/caiotracera/ig.news?color=EBA417">
  <img src="https://img.shields.io/github/languages/count/caiotracera/ig.news?color=EBA417">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/caiotracera/ig.news?color=EBA417">
  <a href="https://www.linkedin.com/in/caiotracera/">
    <img alt="Made by caiotracera" src="https://img.shields.io/badge/made%20by-caiotracera-%230172B3?color=EBA417">
  </a>
  <br />
  <a href="https://github.com/caiotracera/ig.news/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/caiotracera/ig.news?color=EBA417">
  </a>
  <a href="https://github.com/caiotracera/ig.news/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/caiotracera/ig.news?color=EBA417">
  </a>
  <img alt="Codacy" src="https://img.shields.io/codacy/grade/1a8a5eeff3cb4593a28c3f1ddc68e71a?color=EBA417" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=EBA417"/>
</p>

<blockquote align="center">
“Do a little more of what you want to do every day, until your idea becomes what's real.”
</blockquote>

<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man_technologist-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pencil2-todo">Todo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#" target="_blank" rel="noopener noreferrer">Demo</a> (Coming soon)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.figma.com/file/yDkomtXdPfVtSxUeVCbmSb/ig.news-(Copy)?node-id=1%3A3" target="_blank" rel="noopener noreferrer">Layout</a>
</p>

<div align="center">
  <img src=".github/demo.gif"/>
</div>

# :rocket: About the project

<b>ig.news</b> is a simple ReactJS application made for a blog with membership. You can read the introduction paragraph of each article for free, or pay for an membership and read the full article.

# :man_technologist: Technologies

* React.JS
* Next.JS
* Styled-Components
* Axios
* Date-fns
* Polished
* TypeScript
* ESLint
* Prettier

# :wrench: Getting started

To run this project locally, you must have installed <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
and <a href="https://git-scm.com/" target="_blank">Git SCM</a>. In addition, you'll need to have a developer account <a href="https://stripe.com/en-br" target="_blank">Stripe</a> for the payment to be fully functional.

<!-- In order to run this project, you must have installed <a href="https://nodejs.org/en/">Node.js</a>
and <a href="https://git-scm.com/">Git SCM</a>. If you met all the requirements, follow the instructions: -->

<b>Clone the project</b>

```shell
$ git clone https://github.com/caiotracera/ig.news
$ cd ig.news
```

<b>Copy the environment variables</b>

```shell
$ cp .env.example .env.local
```

<b>Replace the private variables</b>

* `STRIPE_API_KEY` should be your Stripe's secret key.

<b>Start the project</b>

```shell
$ npm install # Install all dependencies
$ npm run build # Generate the production build
$ npm run start # Initiate the project at http://localhost:3000/
```

# :pencil2: Todo
- [ ] Make responsive.

# :memo: License

Made with :sparkling_heart: by Caio.
<br />
:coffee: Can we have a coffe? <a href="https://www.linkedin.com/in/caiotracera/">Get in touch!</a>
