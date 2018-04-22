const createRoutes = require('next-routes')

const routes = createRoutes()

routes
    // .add('index', '/') // not needed because files in pages have a public routes per default
    // .add('about', '/') // not needed because files in pages have a public routes per default 
    .add('news entry', 'news/entry', 'news/:slug')

const Link = routes.Link
const Router = routes.Router

export default routes
export { Link, Router }
