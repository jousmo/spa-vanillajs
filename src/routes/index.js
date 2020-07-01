'use strict'

import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import { getHash, getResolveRoutes } from '../utils'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

const router = async () => {
  const header = null || document.querySelector('.Header')
  const content = null || document.querySelector('.Content')
  const hash = getHash()
  const route = getResolveRoutes(hash)
  const render = routes[route] ? routes[route] : Error404

  header.innerHTML = await Header()
  content.innerHTML = await render()
}

export default router
