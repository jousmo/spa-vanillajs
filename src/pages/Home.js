'use strict'

import { getData } from '../utils'

const Home = async () => {
  const { results: characters } = await getData()

  const view = `
    <div class='Characters'>
      ${characters.map(character => `
        <article class='Character__item'>
          <a href='#/${character.id}'>
            <img src='${character.image}' alt='${character.name}'>
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    <div>
  `

  return view
}

export default Home
