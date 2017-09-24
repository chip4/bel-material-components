Prefer props and children curried:

const button = (props) => (...children) => html`<button ${props}>${children}</button>`
