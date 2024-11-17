# IcEvent Calendar

A modern, responsive calendar application built with React and TypeScript, featuring multiple view modes and event management capabilities.

## Features

- Multiple calendar views:
  - Month view with event display
  - Week view with hourly slots
  - Agenda view for event listing
- Responsive design that adapts to all screen sizes
- Today navigation
- Event color coding
- Dynamic view switching
- Mobile-optimized interface

## Tech Stack

- React 18
- TypeScript
- CSS Modules
- React Icons
- Vite

## Getting Started

1. Clone the repository:

git clone https://github.com/yourusername/icevent_ui_v2.git


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:


export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})


- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:


// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

