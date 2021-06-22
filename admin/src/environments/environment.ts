// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: "0.0.1",
  build: 16,
  apiBaseUrl: "http://localhost:9000/v1",
  // apiBaseUrl: "http://localhost:8080/v1",
  //apiBaseUrl: "https://wearit-shop-api.herokuapp.com/v1",
  platform: "admin",
};
