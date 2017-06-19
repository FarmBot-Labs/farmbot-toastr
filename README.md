# Farmbot Toastr: A notification system created for the Farmbot webapp.

## Installation

```
npm install farmbot-toastr
```

## Initialization

```javascript
// Place this at the application root (i.e. `routes.js`)

import { init } from "farmbot-toastr";

init();
```

## Example

```javascript
import { success } from "farmbot-toastr";

success("Woot!");
```

## Available Methods

| Method        | Bg Color      | Default Title    |
| ------------- |---------------| -----------------|
| `success`     | green         | `"Success"`      |
| `error`       | red           | `"Error"`        |
| `warning`     | yellow        | `"Warning"`      |
| `info`        | blue          | `"FYI"`          |
| `fun`         | dark-blue     | `"Did you know?"`|
