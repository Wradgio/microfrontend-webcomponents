# Example of micro-frontends with web components

This is very simple example of micro-frontends with web components - to just present the basic concept. It uses Angular Elements to create web components and then use them in a host application.

## How to run
Go to `projects/host` (and run `npm install` if it's first time you want run) and then `npm start`. The host application will be available at `http://localhost:4200`.

## How to change
If you want to change child apps:

1. go to `projects/app1` or `projects/app2` (run `npm install` if you didn't do it before) and,
3. then run `npm start` (for app1) or `npm run dev` (for app2) to edit the app.
4. After that, run `npm run build` to build the app.
5. When your build is finished, you need to copy files from app's `dist` directory to the `/projects/host/public/`(`app1` or `app2`).
6. You should be able to see the changes in the host `http://localhost:4200`.