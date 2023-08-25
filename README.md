# Typescript Template

This is a template project, meaning it is created to be copied or forked to serve as a base for other software.

It comes equipped with:

- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- a sensible `.gitignore`
- a couple of dummy (Typescript) source files to demonstrate it works and is testable
- [Typescript configuration](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) configured with some opinion (and not to conflict with Prettier)
- [Prettier](https://prettier.io/)
  
## Usage

Take the files and use them to start your own Javascript project.

### Using Yarn

- `yarn` install everything
- `yarn build` build Javascript from Typescript and put the files in the specified folder
- `yarn test` run all tests with Jest
- `yarn start` uses `index.ts` as the entry point
- `yarn lint` check code style and list errors & warnings
- `yarn prettier` fix formatting (will make changes, but not commit them)
