# Annotation Tag

...a ponderously early experiement in annotation referencing from HTML...

## a Web Component...almost

Right now, this project uses [Vue.js](http://vuejs.com/) to upgrade this
markup:

```html
<annotation href="https://hypothes.is/api/annotations/Kw4GxoV8QI-tudW02qbsmQ">
```

It outputs a (currently ugly) annotation card that displays the user's
nickname, the annotated resources title, the highlighted text, and the
commentary made by the user.

The demo app also lets you paste URLs into a text box and add them to the page,
so you can test other annotation URLs...from the
[Hypothesis](http://hypothes.is) API only...at present.

The output markup includes RDFa which *should* end up (when processed) as
proper semantic statements about the annotation as represented in Open
Annotation Data Model (soon to be
[Web Annotation Data Model](http://www.w3.org/TR/annotation-model/)).

## Kwown Knowns

- it's ugly
- it only works with JSON content from `http://hypothes.is/api/` (for now)

## Build Instructions

```
$ npm install
$ npm run build
$ open index.html # works on Macs...otherwise just open the file...
```

## License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
