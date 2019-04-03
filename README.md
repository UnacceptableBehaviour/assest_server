# assest_server
simple asset server, save uploading loads of test data to every repository

## To serve assests locally with CORS headers to allow cross domain origin:

```
cd into this directory: /a_syllabus/lang/python/repos/assest_server

run 'http-server -p 8000 --cors'
```

Will serve on loopback and all available LAN / Wifi connections:
**With CORS headers for cross domain origin access**

```
$ http-server -p 8000 --cors
Starting up http-server, serving ./
Available on:
http://127.0.0.1:8000
http://192.168.0.8:8000
http://192.168.0.14:8000
Hit CTRL-C to stop the server
```

## Notes
**Solution chosen to enable exersizes:**
Adding CORS headers to web server
https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server#

installing Node.js / NPM
https://blog.teamtreehouse.com/install-node-js-npm-mac

### On mac osx
```
$ brew install node

$ node -v
v11.10.1

$ npm -v
6.7.0

$ npm install http-server -g
/usr/local/bin/hs -> /usr/local/lib/node_modules/http-server/bin/http-server
/usr/local/bin/http-server -> /usr/local/lib/node_modules/http-server/bin/http-server
+ http-server@0.11.1
added 26 packages from 28 contributors in 2.374s

$ cd /a_syllabus/lang/html_css_js/repos/html_label

$ http-server -p 8000 --cors
Starting up http-server, serving ./
Available on:
http://127.0.0.1:8000
http://192.168.0.8:8000
Hit CTRL-C to stop the server
[Wed Mar 06 2019 17:21:41 GMT+0000 (Greenwich Mean Time)] "GET /recipe_page.html" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
[Wed Mar 06 2019 17:22:03 GMT+0000 (Greenwich Mean Time)] "GET /recipe_page.html" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
```



# REFERENCES
About CORS protocol and flow control
For production fix, CORS headers has to be added to the backend server to allow cross origin access.

Security considerations CrossOriginScripts
https://developer.chrome.com/extensions/xhr

About the CORS protocol hanshaking
https://humanwhocodes.com/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/

A python solution on GIT
https://gist.github.com/enjalot/2904124

Adding CORS headers to web server        << ACTUAL SOLUTION
https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server#

installing Node.js / NPM
https://blog.teamtreehouse.com/install-node-js-npm-mac
