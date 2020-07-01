'use strict'

const getHash = () => {
  const hash = location.hash
  return hash.slice(1).toLowerCase().split('/')[1] || '/'
}

export default getHash
