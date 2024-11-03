# Developer Guide for NepalMap

This document provides details on setting up the development environment, understanding the code structure, and contributing to the `nepal-map` project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Contributing](#contributing)
- [Additional Resources](#additional-resources)

---

### Getting Started

#### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 18 or later)
- **npm** (version 6 or later)

#### Setup

1. **Create a React app** using your preferred method:

   - **Using Vite**:
     ```bash
     npm create vite@latest my-app
     cd my-app
     ```
   - **Using Create React App**:
     ```bash
     npx create-react-app my-app
     cd my-app
     ```

2. **Install the `nepal-map` package**:

   ```bash
   npm install nepal-map
   ```

3. **Install project dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

Your app should now be up and running with the `nepal-map` package integrated.

### Usage

#### Basic Example

Here's a basic example of how to use the `nepal-map` package in your application:

```jsx
import React from 'react';
import NepalMap from 'nepal-map';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1>Nepal Map</h1>
      <NepalMap
        center={[28.3949, 84.124]}
        zoom={7}
        dataPoints={[
          { position: [27.7, 85.3], description: 'Kathmandu' },
          { position: [28.2, 83.9], description: 'Pokhara' },
        ]}
      />
    </div>
  );
}

export default App;
```

### Props

| Prop             | Type       | Required | Description                                           |
| ---------------- | ---------- | -------- | ----------------------------------------------------- |
| `onFeatureClick` | `function` | `false`  | Callback function triggered when a marker is clicked. |
| `zoom`           | `number`   | `true`   | Zoom level of the map                                 |
| `dataPoints`     | `array`    | `true`   | Array of data that will be displayed on the map.      |

### Example Province Data

When using the `nepal-map`, you can provide `dataPoints` in the following format:

```javascript
dataPoints={[
        { position: [27.7, 85.3], description: 'Kathmandu' },
        { position: [28.2, 83.9], description: 'Pokhara' },
      ]}
```

**Note**: In the description, we can send another component as well.

### Project Structure

Here's a quick overview of the key directories and files:

```plaintext
nepal-map/
├── src/
│   ├── constants/         # Contains the constant data including nepal geo json data.
│   ├── type/              # Data type
│   └── index.js           # Entry point for the package
├── tests/                 # Unit and integration tests
├── README.md              # Main documentation
└── DEVELOPER_GUIDE.md     # This guide
```

### Development Workflow

- **Branching Strategy**: Follow Git Flow by creating feature branches (`feature/your-feature-name`) from `main` branch.
- **Committing Changes**: Use descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format.
- **Pull Requests**: Always create a PR and request a review before merging changes to `main`.

### Testing

The `nepal-map` package uses Jest and React Testing Library for testing. Follow these steps to run and write tests:

1. **Run Tests**

   ```bash
   npm test
   ```

2. **Testing Tips**

   - Write unit tests for individual components within the `src/components/` folder.
   - Ensure coverage for props handling and event functions.
   - Add integration tests under `tests/` for scenarios involving multiple components.

3. **Code Coverage**  
   To check code coverage, run:
   ```bash
   npm run coverage
   ```

### Contributing

We welcome contributions! To ensure a smooth process, please:

- **Open an Issue**: Start by creating an issue for any bug, enhancement, or feature request.
- **Fork the Repository**: Work in your forked repository and create a pull request when ready.
- **Follow Code Style**: We use ESLint and Prettier for consistent code formatting. Ensure your code is lint-free by running:
  ```bash
  npm run lint
  ```

### Additional Resources

For more in-depth understanding of the libraries used in `nepal-map`, check out:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [leaflet](https://leafletjs.com/)
- [react-leaflet](https://react-leaflet.js.org/)

Thank you for contributing to `nepal-map`! Your input is valued, and we’re here to help along the way.
