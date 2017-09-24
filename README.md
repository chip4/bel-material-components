# bel-material-components [WIP]

Create material design dom elements. Uses [material-components-web](https://github.com/material-components/material-components-web/) and [bel](https://github.com/shama/bel). Work in progress, beware of dragons :dragon: :dragon:.

# Usage Example

```js
  import button from './button.js';
  const el = button({ onclick: (event) => console.log(event) })('On Click');
  document.body.appendChild(el);
```

# Development in Progress

Contains:
* Button
* Floating Action Button - (requires material-icons to be loaded)
* Elevation mixins - for use in conjunction with styled-elements for now
* Icon - requires material-icons loaded into page; material-icons self-init to come later
* Toolbar - missing fixed/waterfall/flexible modifiers
* Text Field - missing help text and validation funtionality

# How to View Examples

1. clone this repo
2. serve this repo
3. open `example-app/public/index.html` in a browser with module support (Chrome 61+ should work)
4. view test page with elements vomited onto screen

## Notes:
* 1st iteration will need material css import and material-icons font imported separate from this library.
* Cannot have 2 styled-elements on one page would add complexity to inject styled into the components (revisit later).