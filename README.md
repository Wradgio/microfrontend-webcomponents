# Example of micro-frontends with web components

This is very simple example of micro-frontends with web components - to just present the basic concept. It uses Angular Elements to create web components and then use them in a host application.

## How to run
Go to `projects/host` and run `npm install` and then `npm start`

## How to change
If you want to change child apps, go to `projects/app1` or `projects/app2` and run `npm install` and then `npm start` to edit the app. After that, you need to run `npm run build` to build the app and see the changes in the host.