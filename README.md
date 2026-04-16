# AiMed landing site

This project is a landing site for AiMed a Scientific Club that focuses on connecting newest technologies and medicine.

**Tech stack:** React + Vite + TS

# Local setup instructions

## 1. System requirements

```bash
- Node.js: ^20.19.0 or ^22.12.0 (LTS)
```

## 2. Clone the repository

```bash
git clone git@github.com:BartlomiejSadza/AiMed.git
```

## 3. Install required dependencies

```bash
cd AiMed/         # locate your cloned repository
npm install
```

## 4. Running the project locally

```bash
npm run dev
```

After `npm run dev` you may open `http://localhost:5173` to check if everything is running correctly.

## 5. Running the tests

```bash
npm run test:run  # Vitest

npm run lint      # for checking errors in code
```

### Building a production version

```bash
npm run build
```

### Code formatting

```bash
npm run format:check # check formatting with Prettier
```

# Workflow

contributions should follow this basic workflow:

create branch -> commit and push to branch -> create a pull request & wait for a review

# Common issues

If any of the provided commands are not working as intended please run:

```bash
npm install
```

this should fix most of the issues _(ex. missing dependencies)_, however if you are still having issues please verify that:

- you are in the correct folder
  - on UNIX based systems running `pwd` should help
- you have a supported `Node.js` version installed, v22 (LTS) is recommended
