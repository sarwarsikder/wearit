export const environment = {
  production: true,
  version: '0.0.1',
  build: 1,
  platform: 'web',
  apiBaseUrl: 'https://wearit-shop-api.herokuapp.com/v1',
  apiProxy: '',
  sellerUrl: 'https://wearit-seller.herokuapp.com/',
  googleClientId: '917195124089-hp1m6g5fbotlkbipmrejrapt9uh0lhhl.apps.googleusercontent.com',
  facebookAppId: '113570925979091',
  paymentRedirectSuccessUrl: 'https://wearit-web.herokuapp.com/cart/checkout/success',
  paymentRedirectCancelUrl: 'https://wearit-web.herokuapp.com/cart/checkout/cancel',
  stripeKey: 'pk_test_Z3rf3HSfsokHl4lLFTBxhZrZ',
  pusher: {
    appId: 591974,
    key: '8cbf727dad3c8ce84888',
    cluster: 'ap1'
  },
  showBuild: false
};
