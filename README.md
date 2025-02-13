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