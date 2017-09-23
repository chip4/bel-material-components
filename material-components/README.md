# bel-material-components [WIP]

Use [material-components-web](https://github.com/material-components/material-components-web/) in [bel](https://github.com/shama/bel)/[yo-yo](https://github.com/maxogden/yo-yo)/[choo](https://github.com/choojs/choo).

# Development in Progress

Contains:
* Floating Action Button - (requires material-icons to be loaded)
* Elevation mixins - for use in conjunction with styled-elements for now
* Icon - requires material-icons loaded into page; material-icons self-init to come later
* Button - missing fixed/waterfall/flexible modifiers
* Text Field - missing help text and validation funtionality

## Notes:
* 1st iteration will need material css import and material-icons font imported separate from this library.
* Cannot have 2 styled-elements on one page and would be too complex to inject styled into the components (for now).