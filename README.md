# Nepal Map Component

The `NepalMap` component is a React-based interactive map of Nepal, designed to provide users with an engaging way to explore different areas of the country. It showcases detailed demographic information, making it suitable for a variety of applications.

## Installation

To use this package please ensure that you have `react` installed in your project. You can then import the component as follows:

```bash
npm install nepal-map
```

## Usage

### Basic Example

Here's a basic example of how to use the `NepalMap` component in your application:

```jsx
import React from 'react';
import NepalMap from 'nepal-map';

function App() {
  return (
    <div style={{height'100vh';width:'100vw';}}>
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

## Props

| Prop             | Type       | Required | Description                                           |
| ---------------- | ---------- | -------- | ----------------------------------------------------- |
| `onFeatureClick` | `function` | `false`  | Callback function triggered when a marker is clicked. |
| `zoom`           | `number`   | `true`   | Custom styles for the map component.                  |
| `dataPoints`     | `array`    | `true`   | Array of data that will be displayed on the map.      |

## Example Province Data

When using the `NepalMap`, you can provide dataPoints in the following format:

```javascript
dataPoints={[
        { position: [27.7, 85.3], description: 'Kathmandu' },
        { position: [28.2, 83.9], description: 'Pokhara' },
      ]}
```

**Note**: The `description` can include a string or a React component, allowing for rich content display.

## Contributions

Feel free to contribute to this project by submitting issues, suggestions, or pull requests. Your contributions help enhance the overall quality and usability of this package.
