'use strict'

const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
  const apiUrl = id ? '$API$id' : API
  try {
    const response = await window.fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(`Fetch error: ${err}`)
  }
}

export default getData
