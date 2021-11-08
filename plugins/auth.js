export default function ({ $axios }, inject, store) {
  // Create a custom axios instance
  const auth = $axios.create({
    headers: {
      common: {
        'X-API-KEY': '4G59MA1wwii96SAfzAFFLDJB5uBmsI',
        'X-DEVICE-ID': `ID-${new Date().getTime().toString()}`,
        'X-APP': 3
      }
    }
  })

  // Set baseURL to something different
  auth.setBaseURL('https://auth.yarus.ru/')

  // Inject to context as $api
  inject('auth', auth)
}
