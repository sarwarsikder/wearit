// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '0.0.1',
  build: 27,
  apiBaseUrl: 'http://localhost:9000/v1',
  // apiBaseUrl: 'http://localhost:8080/v1',
  //apiBaseUrl: 'https://wearit-shop-api.herokuapp.com/v1',

  apiProxy: '',
  // sellerUrl: 'https://wearit-shop-api.herokuapp.com/api',
  sellerUrl: 'https://wearit-seller.herokuapp.com/',
  platform: 'web',
  

  /**Social Login Credentials Start */
  /**
   * Google Drive Login Credential Start
   */
  googleClientId: '724717586536-4aafue6065jpciebbkh94hb41gmm4tsv.apps.googleusercontent.com',
  /**
   * Google Drive Login Credential End
   */

  /**
   * Facebook Login Credential Start
   */
  facebookAppId: '195619922437219',
  /**
   * Facebook Login Credential End
   */
  /**
   * Instagram Login Credential Start
   */
  instagramClientId: '493159371753638',
  instagramRedirectUri: 'https://wearit-web.herokuapp.com/',
  /**
   * Instagram Login Credential End
   */
    /**Social Login Credentials End */

  paymentRedirectSuccessUrl: 'http://localhost:4200/cart/checkout/success',
  paymentRedirectCancelUrl: 'http://localhost:4200/cart/checkout/cancel',
  stripeKey: 'pk_test_Z3rf3HSfsokHl4lLFTBxhZrZ',
  pusher: {
    appId: 591974,
    key: '8cbf727dad3c8ce84888',
    cluster: 'ap1'
  },
  showBuild: true
};
