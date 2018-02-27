## Foxtail 

### Powered by React and Contentful

Contentful is a "headless" CRM. It is managed [here](https://app.contentful.com/spaces/4tqrr87yocpr/)

##### To make changes to the HTML/CSS/JavaScript:
  - Download the project to your filesystem via `git clone`
  - run `yarn`
  - run `yarn start`

This will start up a local development environment where you can make changes and observe locally.

##### To build production assets
  - run `yarn build`

This will minify assets optimized for transfer time over a network (less size = faster). Current assets sizes are:

151.18 KB (+44.93 KB)  build/static/js/main.05dc2501.js

966 B (+24 B)          build/static/css/main.292bbd93.css

Every local change requires an updated `yarn build` to regenerate these optimized files.

##### Uploading to an webserver

Run `yarn build` to update your `/build` directory and move **all** files inside that directory and all directories in it (namely `/static/css`, `/static/js`, `/static/media`, this holds the JavaScript and CSS) to the webserver. Then configure your webserver to point to the `index.html` file in `/build`. The directory tree needs to remain the same as the `/build` directory. 

Example webserver tree:

```text
index.html
static/
    js/some_file.js
    media/some_image.jpeg
    css/some_stylesheet.css
```