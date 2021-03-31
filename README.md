# Story Teller - HTML/CSS/JS

It's a simple web page that tells a story to the user.

## Usage

To start reading the story you just need to open the index.html file, the page is in portuguese so here is some translations:

- _história_ -> _story_
- _notas_ -> _notes_
- _anterior_ -> _previous_
- _reiniciar_ -> _restart_
- _próximo_ -> _next_

If you want to change the default story you just need to change the 'story.js' file located at `/assets/js/`, it has the following structure that should be respected:

```js
let story = {
  title: "The story title", // String - it will change the html 'document.title' prop
  0: { // Integer - the number here represents a Story Page, the first page should be 0
    imagePath: "path/to/image/", // String - it should be relative to 'index.html'
    story: "The first page story here.", // String - it should not be longer than ~760 chars
  },
  1: {
    imagePath: "path/to/another/image/",
    story: "The second page story here. Lorem ipsum dolor sit amet, consectetur adipis.",
  },
  2: {
    imagePath: "path/to/a/different/image/",
    story: "The third page story here. Lorem ipsum dolor sit amet, consectetur adipis.",
  },
  // You can put more pages here
}
```

## Notes

It's not configured to be responsive (yet) so it should be opened in a computer screen (width > 1280px).

## Author

- Pietro Bondioli ([@bondiolipietro](https://github.com/bondiolipietro))

## License

[MIT](https://opensource.org/licenses/MIT)
