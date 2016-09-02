# email-extractor-nodejs

Script to find all e-mails texts in a website

## Project Setup

1. Install Node.js
```
sudo apt-get install nodejs
```

2. Create a symbolic link for node, as many Node.js tools use this name to execute.
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

3. Check that node and npm commands are working:
```
$ node -v
v4.4.7
$ npm -v
3.10.5
```

4. Go tho the root folder of the project and install the dependences:
```
npm install
```
If you are behind a proxy you need to configure the npm proxy:
```
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

## Usage
```text
node index.js [url] [options]

Options:
        -g      Group emails to prevent repeat emails
```
