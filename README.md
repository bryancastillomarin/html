# HTML
Storage for my HTML components

These are my notes for my unknown CSS properties

### Box Shadow
----------

In order its parameters are:

`box-shadow: h-offset v-offset blur spread color*/`

We can add `inset` to set the shadow inside the element

### !Doctype vs Doctype
----------

The parallax component is a redesign of an old project of mine. In that project, I mistakenly typed **Doctype** instead of **!Doctype** which was causing the CSS properties to work in an unexpected way.

While refactoring the component I correctly typed **!Doctype** and used the same styles hence some styles were not working properly.

After figured out about that mistake I made my research and found with ***Quirks mode*** which basically helps the browser to *fix* old sites by similating bugs and oddities in old versions of browsers.

[Developer Mozilla - Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

[StackOverflow - Doctype vs !Doctype](https://stackoverflow.com/questions/25714815/doctype-vs-doctype)

### Useful links

[Can I Include](https://caninclude.glitch.me/) It helps to determine if a tag can be a child from another one

[Can I Use](https://caniuse.com/) It helps to identify which HTML elements can be included in different browsers and its versions

### CSS `has`

The `has` pseudo class selects an element(s) if contains any of the relative selectors that are passed as an argument. It is useful to select parent elements:

`<parent>:has(<child>)` it will select the `<parent>` element only if contain the `<child>` element and apply the styles to the `<parent>`