# nextjs-template

Next.js with TypeScript, custom TypeScript server, and Apollo GraphQL.

## Installation

```
git clone https://github.com/thomasspitaler/nextjs-template
cd nextjs-template
npm install
```

## Setup

```
cp .env.example .env
```

The GitHub GraphQL API is used as a test GraphQL endpoint. The user's name is displayed on the about page. To get this working, set `GRAPHQL_TOKEN` to a valid GitHub OAuth 2 token in `.env`.

To configure Google Analytics, set `GA_TRACKING_ID` in `.env` to the Google Analytics tracking ID of your site.

To configure the port of the server, set `PORT` in `.env` to the desired port number.

## Development Server

```
npm run dev
```

## Building and Running the Production Server

```
npm run build
npm start
```

## Exporting to Static Pages

```
npm run export
```

The paths to be exported can be configured in `export-paths.json`.

The output of the static build is located in the `out` directory.

The site is not entirely static in the sense that there is a static HTML page generated for each path in `export-paths.json`. After the initial load of the first page, the site behaves like a one page app, and the api endpoints are also hit if required. Hence, a static web server can be used to host the site.
