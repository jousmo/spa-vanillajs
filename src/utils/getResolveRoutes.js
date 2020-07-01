'use strict'

const getResolveRoutes = (route) => {
  if (route.length <= 3) {
    return route === '/' ? route : '/:id'
  }

  return `/${route}`
}

export default getResolveRoutes
