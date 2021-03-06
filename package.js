{
  "name": "meetings-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "live-server --mount=/:public --open=/ --entry-file=index.html",
    "copy": "cpx \"node_modules/normalize.css/normalize.css\" public/external"

  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cpx": "^1.5.0",  
    "live-server": "^1.2.1"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^5.15.4",
    "normalize.css": "^8.0.1"
  }
}
