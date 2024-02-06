// importImages.js
const importAll = (r) => {
  let images = {}
  r.keys().forEach((key) => (images[key] = r(key).default))
  return images
}

const importImages = (id) => {
  try {
    const context = require.context(`../../public/img/${id}`, false, /\.(png|jpe?g|svg)$/)
    return importAll(context)
  } catch (error) {
    console.error('Error importing images:', error)
    return {}
  }
}

export default importImages