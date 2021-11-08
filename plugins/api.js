export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        'X-API-KEY': 'PELQTQN2mWfml8XVYsJwaB9Qi4t8XE',
        'X-DEVICE-ID': `ID-${new Date().getTime().toString()}`,
        'X-APP': 3
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://api.yarus.ru/')

  // Inject to context as $api
  inject('api', api)
}
