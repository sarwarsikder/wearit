export const environment = {
  production: true,
  version: '0.0.1',
  build: 1,
  platform: 'web',
  apiBaseUrl: 'https://wearit-shop-api.herokuapp.com/v1',
  apiProxy: '',
  sellerUrl: 'https://wearit-seller.herokuapp.com/',
  googleClientId: '65008936034-ljo9abfuchl5ddpbthbbpfjj05aavdr5.apps.googleusercontent.com',
  // googleClientId: '137828882328-lk6q22rskp5v3a30q1701h5mk9hhvrhq.apps.googleusercontent.com',
  facebookAppId: '493055225459838',
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
