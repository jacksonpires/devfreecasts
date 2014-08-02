# DevScreenCasts

## About

A huge collection about free screencasts for devs.

## How to add screencasts?

First of all you need to [fork this repository](https://github.com/caio-ribeiro-pereira/devscreencasts/fork). With this project in your hands, edit the `/public/videos/_data.json` and add your videos respecting these parameters: 

``` javascript
"programming-language-name": {
  "subtitle": "Programming language name",
  "about": "Programming language short description",
  "site": "url of the official programming language site", 
  "image": "programming-language-logo.jpg", // Must be an jpg with 350x195 size.
  "partners": [
    {
      "site" : "Screencast site name",
      "site_url": "url of the screencast site",
      "image": "screencast site logo.jpg", // Must be an jpg with 350x195 size.
      "videos": [
        {
          "title": "Screencast title",
          "description": "Screencast description",
          "duration": "3:14", // Screencast Duration
          "url": "screencast's url" 
        }
      ]
    }
  ]
},
```

Look this example:

``` javascript
"go": {
  "subtitle": "Go",
  "about": "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
  "site": "http://golang.org",
  "image": "go.jpg",
  "partners": [
    {
      "site" : "GopherCasts",
      "site_url": "https://gophercasts.io",
      "image": "gophercasts.jpg",
      "videos": [
        {
          "title": "Getting Started with Go",
          "description": "How to setup your environment and write a Hello World application using the Go programming language.",
          "duration": "3:14",
          "url": "https://gophercasts.io/lessons/1-getting-started-with-go"
        }
      ]
    }
  ]
},
```

## Author

Caio Ribeiro Pereira (caio.ribeiro.pereira@gmail.com)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
