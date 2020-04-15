const baseUrl =
  process.env.NODE_ENV === 'production'
    ? '<prod link here>'
    : 'http://localhost:3000'

export default baseUrl
