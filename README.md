# DevFreeCasts

## About

A huge collection about free screencasts for devs.

## How to add screencasts?

**Before start it, all videos you add must be freeware**, because no one here wanna pay to watch it :) 

First of all you need to [fork this repository](https://github.com/caio-ribeiro-pereira/devfreecasts/fork). 

With this project in your hands, edit the `/public/videos/_data.json` and add your videos respecting these parameters: 

``` javascript
"programming-language-or-framework-name": {
  "subtitle": "Programming language or framework name",
  "about": "Programming language or framework short description",
  "site": "url of the official programming language or framework site", 
  "image": "programming-language-or-framework-logo.jpg",
  "partners": [
    {
      "site" : "Screencast site name",
      "site_url": "url of the screencast site",
      "image": "screencast site logo.jpg",
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

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `partners.image` attribute the **default language image will replace it**.

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

If you don't have website, but you have youtube or vimeo screencasts, just add your videos without the `partners.site` and `partners.site_url`, like the example below:

``` javascript
"go": {
  "subtitle": "Go",
  "about": "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
  "site": "http://golang.org",
  "image": "go.jpg",
  "partners": [
    {
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

## Development mode

To run this project in **development mode**, you need have [Node.js](http://nodejs.org) and [HarpJS](http://harpjs.com) installed. 

To install Node.js, just [follow this wiki rules](http://nodejs.org/download) 

To install HarpJS, just run the command below: 

``` bash
npm install harp -g
```

To get and run this project: 

``` bash
git clone git@github.com:caio-ribeiro-pereira/devscreencasts.git
cd devscreencasts
harp server
```

And access in your browser the url: http://localhost:9000

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
