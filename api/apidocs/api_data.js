define({ "api": [
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/auth/passwordReset/:token",
    "title": "Open view for password reset",
    "description": "<p>Open view for password reset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>password reset token</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "GetV1AuthPasswordresetToken"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/auth/verifyEmail/:token",
    "title": "Verify email address",
    "description": "<p>Render HTML view</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>verification token which sent to email</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "GetV1AuthVerifyemailToken"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/forgot",
    "title": "Forgot password",
    "description": "<p>Send forgot password to email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"code\": 200,\n       \"httpCode\": 200,\n       \"error\": false,\n       \"message\": \"FORGOT_PASSWORD_EMAIL_SENT\",\n       \"data\": {\n           \"message\": \"Your password email has been sent.\"\n       }\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthForgot"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/login",
    "title": "Local login",
    "description": "<p>Login with email and password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....\",\n       \"expiredAt\": \"2018-09-14T06:39:18.140Z\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthLogin"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/login/facebook",
    "title": "Local with facebook",
    "description": "<p>Local with facebook. User in the client side MUST have scope for email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....\",\n       \"expiredAt\": \"2018-09-14T06:39:18.140Z\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthLoginFacebook"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/login/google",
    "title": "Local with google",
    "description": "<p>Local with google. User in the client side MUST have scope for email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....\",\n       \"expiredAt\": \"2018-09-14T06:39:18.140Z\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthLoginGoogle"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/register",
    "title": "Register new account",
    "description": "<p>Login with email and password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>user name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n     \"message\": \"OK\",\n    \"data\": {\n         \"code\": 200,\n         \"httpCode\": 200,\n         \"error\": false,\n         \"message\": \"USE_CREATED\",\n         \"data\": {\n             \"message\": \"Your account has been created, please verify your email address and get access.\"\n         }\n     },\n     \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthRegister"
  },
  {
    "group": "Auth",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/auth/verifyEmail",
    "title": "Verify email address",
    "description": "<p>Verify email address</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>verification token which sent to email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"OK\",\n  \"data\": {\n    \"code\": 200,\n    \"httpCode\": 200,\n    \"error\": false,\n    \"message\": \"EMAIL_VERIFIED\",\n    \"data\": {\n      \"message\": \"Your email has been verified.\"\n     }\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/passport/routes.js",
    "groupTitle": "Auth",
    "name": "PostV1AuthVerifyemail"
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/banners/:id",
    "title": "Remove a banner",
    "description": "<p>Remove a banner</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>banner id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>banner title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the banner. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the banner</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "DeleteV1BannersId"
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/banners/:id",
    "title": "Get banner details",
    "description": "<p>Get banner details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>banner id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "GetV1BannersId"
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/banners/random?:title&:locatione&take",
    "title": "Get random banners",
    "description": "<p>Get random banners</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>banner position</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>num of item should return</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "GetV1BannersRandomTitleLocationeTake"
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/banners?:title&:location&page&take",
    "title": "Get list banners",
    "description": "<p>Get list banners</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>banner position</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "GetV1BannersTitleLocationPageTake"
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/banners",
    "title": "Create new banner",
    "description": "<p>Create new banner</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "PostV1Banners",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>banner title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the banner. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the banner</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Banner",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/banners/:id",
    "title": "Update a banner",
    "description": "<p>Update a banner</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>banner id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>banner title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the banner. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the banner</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/banner/index.js",
    "groupTitle": "Banner",
    "name": "PutV1BannersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Brand",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/brands/:id",
    "title": "Remove a brand",
    "description": "<p>Remove a brand</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Brand id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/brand.route.js",
    "groupTitle": "Brand",
    "name": "DeleteV1BrandsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Brand",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/brands/:id",
    "title": "Get brand details",
    "description": "<p>Get brand details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Brand id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/brand.route.js",
    "groupTitle": "Brand",
    "name": "GetV1BrandsId"
  },
  {
    "group": "Brand",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/brands?:name&:alias",
    "title": "Get list brands",
    "description": "<p>Get list brands</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>brand alias</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/brand.route.js",
    "groupTitle": "Brand",
    "name": "GetV1BrandsNameAlias"
  },
  {
    "group": "Brand",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/brands",
    "title": "Create new brand",
    "description": "<p>Create new brand</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/brand.route.js",
    "groupTitle": "Brand",
    "name": "PostV1Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Brand",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/brands/:id",
    "title": "Update a brand",
    "description": "<p>Update a brand</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/brand.route.js",
    "groupTitle": "Brand",
    "name": "PutV1BrandsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Cart",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/cart/calculate",
    "title": "Calculate",
    "description": "<p>Calculate and get info of products in cart</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>products for the orders</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "products.productId",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "products.productVariantId",
            "description": "<p>product variant if have</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "products.couponCode",
            "description": "<p>Coupon code if have</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>Payment type. Just allow <code>cod</code> for now</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingMethod",
            "description": "<p>Shipping type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingAddress",
            "description": "<p>required for <code>cod</code> method</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zipCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userCurrency",
            "description": "<p>Currency of user, which query in the system config</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/cart.route.js",
    "groupTitle": "Cart",
    "name": "PostV1CartCalculate"
  },
  {
    "group": "Complain",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/complains/:complainId",
    "title": "Remove complain",
    "description": "<p>Remove complain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complainId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/complain/routes/complain.route.js",
    "groupTitle": "Complain",
    "name": "DeleteV1ComplainsComplainid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Complain",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/complains/:complainId",
    "title": "Get details of the Complain",
    "description": "<p>Get details of the Complain</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/complain/routes/complain.route.js",
    "groupTitle": "Complain",
    "name": "GetV1ComplainsComplainid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Complain",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/complains?:status&:sort&:sortType&:page&:take",
    "title": "Get list complains",
    "description": "<p>Get list complains of current customer. Or all if admin</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/complain/routes/complain.route.js",
    "groupTitle": "Complain",
    "name": "GetV1ComplainsStatusSortSorttypePageTake",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Complain",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/complains",
    "title": "Create new Complain",
    "description": "<p>Create new Complain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/complain/routes/complain.route.js",
    "groupTitle": "Complain",
    "name": "PostV1Complains",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Complain",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/complains/:complainId",
    "title": "Update complain",
    "description": "<p>Update complain</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p><code>pending</code>, <code>resolved</code>, 'rejected</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/complain/routes/complain.route.js",
    "groupTitle": "Complain",
    "name": "PutV1ComplainsComplainid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Connect_Social",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/connect/twitter",
    "title": "Twitter",
    "description": "<p>connect with Twitter account, must provide access token for authentication</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/connect.route.js",
    "groupTitle": "Connect_Social",
    "name": "GetV1ConnectTwitter"
  },
  {
    "group": "Connect_Social",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/connect/twitter?access_token&redirectUrl",
    "title": "Twitter",
    "description": "<p>connect with Twitter account, must provide access token for authentication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>jwt token when login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirectUrl",
            "description": "<p>redirectUrl after connected</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/connect.route.js",
    "groupTitle": "Connect_Social",
    "name": "GetV1ConnectTwitterAccess_tokenRedirecturl"
  },
  {
    "group": "Connect_Social",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/connect/facebook",
    "title": "Facebook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Facebook access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/connect.route.js",
    "groupTitle": "Connect_Social",
    "name": "PostV1ConnectFacebook",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Connect_Social",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/connect/google",
    "title": "Google",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Google plus access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/connect.route.js",
    "groupTitle": "Connect_Social",
    "name": "PostV1ConnectGoogle",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Contact",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/contact",
    "title": "Send contacts",
    "description": "<p>Send contact to user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/system/routes/contact.route.js",
    "groupTitle": "Contact",
    "name": "GetV1Contact"
  },
  {
    "group": "Country",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/cities?:state",
    "title": "Get all cities by state",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>state id</p>"
          }
        ]
      }
    },
    "description": "<p>Get list all cities by state. return empty if state is not provided</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/country/index.js",
    "groupTitle": "Country",
    "name": "GetV1CitiesState"
  },
  {
    "group": "Country",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/countries",
    "title": "Get list all countries",
    "description": "<p>Get list all countries</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/country/index.js",
    "groupTitle": "Country",
    "name": "GetV1Countries"
  },
  {
    "group": "Country",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/states?:country",
    "title": "Get list all states by country",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>country iso code or country id</p>"
          }
        ]
      }
    },
    "description": "<p>Get list all states</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/country/index.js",
    "groupTitle": "Country",
    "name": "GetV1StatesCountry"
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Check_by_code",
    "type": "post",
    "url": "/v1/coupons/check",
    "title": "",
    "description": "<p>Get vailable by code. and return discount percentage if have</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon"
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Create",
    "type": "post",
    "url": "/v1/coupons",
    "title": "",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discountPercentage",
            "description": "<p>1 - 100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>how many times the coupon can be used. <code>0</code> means unlimited</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "expiredTime",
            "description": "<p>Expired time fo this coupon</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Delete",
    "type": "delete",
    "url": "/v1/coupons/:couponId",
    "title": "",
    "description": "<p>Remove a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "couponId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discountPercentage",
            "description": "<p>1 - 100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>how many times the coupon can be used. <code>0</code> means unlimited</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "expiredTime",
            "description": "<p>Expired time fo this coupon</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon"
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Find_One",
    "type": "get",
    "url": "/v1/coupons/check",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>/ coupon id</p>"
          }
        ]
      }
    },
    "description": "<p>Get coupon detail</p>",
    "permission": [
      {
        "name": "seller or admin"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon"
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Listing",
    "type": "get",
    "url": "/v1/coupons?:q",
    "title": "",
    "description": "<p>Get list coupons</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search keywords</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon"
  },
  {
    "group": "Coupon",
    "version": "1.0.0",
    "name": "Update",
    "type": "put",
    "url": "/v1/coupons/:couponId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "couponId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discountPercentage",
            "description": "<p>1 - 100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>how many times the coupon can be used. <code>0</code> means unlimited</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "expiredTime",
            "description": "<p>Expired time fo this coupon</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/coupons/routes/coupon.route.js",
    "groupTitle": "Coupon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Devices",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/devices",
    "title": "Add device",
    "description": "<p>Add mobile device for push notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "os",
            "description": "<p><code>ios</code> or <code>android</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>device token</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/notification/routes/device.route.js",
    "groupTitle": "Devices",
    "name": "PostV1Devices",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Export_Import",
    "version": "1.0.0",
    "name": "Export_product_to_csv",
    "type": "get",
    "url": "/v1/products/export/csv",
    "title": "",
    "description": "<p>generate product to csv. add <code>access_token</code> in the query string for authenticated</p>",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/product/routes/import-export.route.js",
    "groupTitle": "Export_Import",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Export_Import",
    "version": "1.0.0",
    "name": "Export_shop_order_to_csv",
    "type": "get",
    "url": "/v1/orders/shops/export/csv?:status&:sort&:sortType&:page&:take&startDate&toDate&fileName&paymentMethod",
    "title": "",
    "description": "<p>generate order to csv. Add <code>access_token</code> in the query string for authenticated</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>start time in UTC format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "toDate",
            "description": "<p>to time in UTC format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fileName",
            "description": "<p>File name server will response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "paymentMethod",
            "description": "<p><code>cod</code>, <code>paypal</code>, <code>stripe</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/import-export.route.js",
    "groupTitle": "Export_Import",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Export_Import",
    "version": "1.0.0",
    "name": "Import_product_from_csv",
    "type": "post",
    "url": "/v1/products/import/csv",
    "title": "",
    "description": "<p>Bulk upload product from csv file. Sample file can get in the export</p>",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/product/routes/import-export.route.js",
    "groupTitle": "Export_Import",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/i18n/languages/:languageId",
    "title": "Remove a language",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languageId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/language.route.js",
    "groupTitle": "I18N",
    "name": "DeleteV1I18nLanguagesLanguageid"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/i18n/text/:textId",
    "title": "Remove a text",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "textId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/text.route.js",
    "groupTitle": "I18N",
    "name": "DeleteV1I18nTextTextid"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/i18n/translations/:translationId",
    "title": "Remove a translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "translationId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N",
    "name": "DeleteV1I18nTranslationsTranslationid"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/:lang.json",
    "title": "Get i18n translation data",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nLangJson"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/languages",
    "title": "Create new language",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>iso code for language like <code>en</code>, <code>fr</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isDefault",
            "description": "<p>default is <code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>default is <code>true</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/language.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nLanguages"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/languages/:languageId",
    "title": "Update language",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languageId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>iso code for language like <code>en</code>, <code>fr</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isDefault",
            "description": "<p>default is <code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>default is <code>true</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/language.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nLanguagesLanguageid"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/languages?page&take&sort&sortType",
    "title": "Get list languages",
    "description": "<p>Get all supported languages. If user will query all</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/language.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nLanguagesPageTakeSortSorttype"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/textId?page&take&sort&sortType",
    "title": "Get list text",
    "description": "<p>Get all supported languages. If user will query all</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/text.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nTextidPageTakeSortSorttype"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/i18n/translations?page&take&sort&sortType",
    "title": "Get list text",
    "description": "<p>Get all supported languages. If user will query all</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N",
    "name": "GetV1I18nTranslationsPageTakeSortSorttype"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/i18n/text",
    "title": "Create new text",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text key need to be translated</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/text.route.js",
    "groupTitle": "I18N",
    "name": "PostV1I18nText"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/i18n/translations",
    "title": "Create new translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>iso code of language like <code>en</code>,<code>fr</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "textId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "translation",
            "description": "<p>Translated text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N",
    "name": "PostV1I18nTranslations"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "name": "Pull_translation",
    "type": "post",
    "url": "/v1/i18n/:lang/pull",
    "title": "Pull text",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>language code</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/i18n/text/:textId",
    "title": "Update text",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "textId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text key need to be translated</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/text.route.js",
    "groupTitle": "I18N",
    "name": "PutV1I18nTextTextid"
  },
  {
    "group": "I18N",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/i18n/translations/:translationId",
    "title": "Update a translation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "translation",
            "description": "<p>Translated text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/i18n/routes/translation.route.js",
    "groupTitle": "I18N",
    "name": "PutV1I18nTranslationsTranslationid"
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/malls/:id",
    "title": "Remove a mall",
    "description": "<p>Remove a mall</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>mall id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>mall title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the mall. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the mall</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "DeleteV1MallsId"
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/malls/:id",
    "title": "Get mall details",
    "description": "<p>Get mall details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>mall id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "GetV1MallsId"
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/malls/random?:title&:locatione&take",
    "title": "Get random malls",
    "description": "<p>Get random malls</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of mall</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>mall position</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>num of item should return</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "GetV1MallsRandomTitleLocationeTake"
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/malls?:title&:location&page&take",
    "title": "Get list malls",
    "description": "<p>Get list malls</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of mall</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>mall position</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "GetV1MallsTitleLocationPageTake"
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/malls",
    "title": "Create new mall",
    "description": "<p>Create new mall</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "PostV1Malls",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>mall title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the mall. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the mall</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Mall",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/malls/:id",
    "title": "Update a mall",
    "description": "<p>Update a mall</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>mall id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>mall title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the mall. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the mall</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/mall/index.js",
    "groupTitle": "Mall",
    "name": "PutV1MallsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/media/categories/:id",
    "title": "Remove a category",
    "description": "<p>Remove a category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "DeleteV1MediaCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/media/:id",
    "title": "Remove a media",
    "description": "<p>Remove a media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>media id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "DeleteV1MediaId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/media/photos/:id",
    "title": "Remove a photo",
    "description": "<p>Remove a photo</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>photo id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "DeleteV1MediaPhotosId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/media/videos/:id",
    "title": "Remove a video",
    "description": "<p>Remove a video</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>video id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "DeleteV1MediaVideosId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/categories/:id",
    "title": "Get category details",
    "description": "<p>Get category details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaCategoriesId"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/categories?:name&:alias",
    "title": "Get list categories",
    "description": "<p>Get list categories</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>category alias</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaCategoriesNameAlias"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/:id",
    "title": "Get media",
    "description": "<p>Get a media detail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>media id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaId"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/:id",
    "title": "Get photo detail",
    "description": "<p>Get a video detail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>photo id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaId"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/:id",
    "title": "Get video detail",
    "description": "<p>Get a video detail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>video id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaId"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/media/search?:page&:take&:name&:type&:sort&:sortType",
    "title": "Get list media",
    "description": "<p>Get list media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "defaultValue": "10",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>video</code>, <code>photo</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "Sring",
            "optional": true,
            "field": "sort",
            "defaultValue": "createdAt",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Sring",
            "optional": true,
            "field": "sortType",
            "defaultValue": "desc",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "GetV1MediaSearchPageTakeNameTypeSortSorttype"
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/media/categories",
    "title": "Create new category",
    "description": "<p>Create new category</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PostV1MediaCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/media/files",
    "title": "Upload a file",
    "description": "<p>Upload a file. Use multipart/form-data to upload file and add additional fields</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PostV1MediaFiles",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>file data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>file name. Otherwiwse it is</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>photo description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>categories which this photo belongs to</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/media/photos",
    "title": "Upload a photo",
    "description": "<p>Upload a photo. Use multipart/form-data to upload file and add additional fields</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PostV1MediaPhotos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>file data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>file name. Otherwiwse it is</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>photo description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>categories which this photo belongs to</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/media/videos",
    "title": "Upload a video",
    "description": "<p>Upload a video. Use multipart/form-data to upload file and add additional fields</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PostV1MediaVideos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>file data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>file name. Otherwiwse it is</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>photo description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>categories which this photo belongs to</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/media/categories/:id",
    "title": "Update a category",
    "description": "<p>Update a category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PutV1MediaCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Media",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/media/:id",
    "title": "Update a media",
    "description": "<p>Update a media</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>media id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>media name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>media description</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "categoryIds",
            "description": "<p>media category</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/media/index.js",
    "groupTitle": "Media",
    "name": "PutV1MediaId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/messages/:messageId",
    "title": "Delete a message",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/message.route.js",
    "groupTitle": "Message",
    "name": "DeleteV1MessagesMessageid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p><code>text</code> or <code>file</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conversationId",
            "description": "<p>message group id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>text message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fileId",
            "description": "<p>uuid of file from Media module</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/messages/conversations/:conversationId?:page&:take&:q",
    "title": "Get list messages by group",
    "description": "<p>Get list messages by group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Search keyword, will search by text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/message.route.js",
    "groupTitle": "Message",
    "name": "GetV1MessagesConversationsConversationidPageTakeQ"
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/messages/conversations&take&type&sort&sortType",
    "title": "Get list",
    "description": "<p>Get list conversations</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/conversation.route.js",
    "groupTitle": "Message",
    "name": "GetV1MessagesConversationsTakeTypeSortSorttype"
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/messages/latest?:page&:take&:q",
    "title": "Get latest messages",
    "description": "<p>Get list messages with sender is not current user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Search keyword, will search by text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/message.route.js",
    "groupTitle": "Message",
    "name": "GetV1MessagesLatestPageTakeQ"
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/messages",
    "title": "Create a new message",
    "description": "<p>Create new message</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/message.route.js",
    "groupTitle": "Message",
    "name": "PostV1Messages",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p><code>text</code> or <code>file</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conversationId",
            "description": "<p>message group id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>text message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fileId",
            "description": "<p>uuid of file from Media module</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/messages/conversations",
    "title": "Create or get message conservation",
    "description": "<p>Create or get message conservation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>private</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipientId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/conversation.route.js",
    "groupTitle": "Message",
    "name": "PostV1MessagesConversations"
  },
  {
    "group": "Message",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/messages/conversations/:conversationId/read",
    "title": "Set read status for conversation",
    "description": "<p>Set read status for conversation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conversationId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "all",
            "description": "<p>If not pass, will reduce 1</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/message/routes/message.route.js",
    "groupTitle": "Message",
    "name": "PostV1MessagesConversationsConversationidRead"
  },
  {
    "group": "Newsletter",
    "version": "1.0.0",
    "name": "List_contacts",
    "type": "get",
    "url": "/v1/newsletter/contact",
    "title": "",
    "description": "<p>List all contacts who register newsletter</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n     \"count\": 100,\n     \"items\": []\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/newsletter/routes/contact.route.js",
    "groupTitle": "Newsletter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>total items will be responsed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Eg <code>createdAt</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Newsletter",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/newsletter/sendmail",
    "title": "Send email",
    "description": "<p>Send email to all subscribers</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userType",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/newsletter/routes/mail.route.js",
    "groupTitle": "Newsletter",
    "name": "PostV1NewsletterSendmail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Newsletter",
    "version": "1.0.0",
    "name": "Register",
    "type": "post",
    "url": "/v1/newsletter/contact",
    "title": "",
    "description": "<p>Register as newsletter member</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n     \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/newsletter/routes/contact.route.js",
    "groupTitle": "Newsletter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Newsletter",
    "version": "1.0.0",
    "name": "Remove_contact",
    "type": "delete",
    "url": "/v1/newsletter/contact/:contactId",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n     \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/newsletter/routes/contact.route.js",
    "groupTitle": "Newsletter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/offers/:id",
    "title": "Remove a offer",
    "description": "<p>Remove a offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>offer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>offer title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the offer. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "DeleteV1OffersId"
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/offers/:id",
    "title": "Get offer details",
    "description": "<p>Get offer details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Offer id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "GetV1OffersId"
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/offers/random?:title&:locatione&take",
    "title": "Get random offers",
    "description": "<p>Get random offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of offer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>offer position</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>num of item should return</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "GetV1OffersRandomTitleLocationeTake"
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/offers?:title&:location&page&take",
    "title": "Get list Offers",
    "description": "<p>Get list offers</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of offer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>offer position</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "GetV1OffersTitleLocationPageTake"
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/offers",
    "title": "Create new offer",
    "description": "<p>Create new offer</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "PostV1Offers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>offer title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the offer. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Offer",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/offer/:id",
    "title": "Update a offer",
    "description": "<p>Update a offers</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>offer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>offer title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of the offer. like <code>home</code>, <code>category</code>...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediaId",
            "description": "<p>File Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>Link of the offer</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "meta",
            "description": "<p>any custom meta data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/offer/index.js",
    "groupTitle": "Offer",
    "name": "PutV1OfferId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "name": "Create_new_order",
    "type": "post",
    "url": "/v1/orders",
    "title": "",
    "description": "<p>Check out for order. Allow for guest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>products for the orders</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "products.productId",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "products.quantity",
            "description": "<p>product quantity. default is 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "products.userNote",
            "description": "<p>custom note for this product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "products.productVariantId",
            "description": "<p>product variant if have</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "products.couponCode",
            "description": "<p>Coupon code if have</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>Payment type. Just allow <code>cod</code> for now</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingMethod",
            "description": "<p>Shipping type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingAddress",
            "description": "<p>required for <code>cod</code> method</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zipCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userCurrency",
            "description": "<p>Currency of user, which query in the system config</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneVerifyCode",
            "description": "<p>Phone verify code if <code>paymentMethod</code> is <code>cod</code>. Require if it is <code>COD</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/order/routes/order.js",
    "groupTitle": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/:orderid",
    "title": "Get details of the order",
    "description": "<p>Get details of the order</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order.js",
    "groupTitle": "Order",
    "name": "GetV1OrdersOrderid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/:orderid",
    "title": "Get details of the order",
    "description": "<p>Get details of the order</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order.js",
    "groupTitle": "Order",
    "name": "GetV1OrdersOrderid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/:status",
    "title": "Get details of the order byu status",
    "description": "<p>Get details of the order</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order-delivery.js",
    "groupTitle": "Order",
    "name": "GetV1OrdersStatus",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders?:status&:sort&:sortType&:page&:take",
    "title": "Get list orders",
    "description": "<p>Get list orders of current customer. Or all if admin</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order.js",
    "groupTitle": "Order",
    "name": "GetV1OrdersStatusSortSorttypePageTake",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Order",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/orders/phone/check",
    "title": "Check phone number valid",
    "description": "<p>Check phone number valid</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/order/routes/phone-check.route.js",
    "groupTitle": "Order",
    "name": "PostV1OrdersPhoneCheck",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Payment",
    "version": "1.0.0",
    "name": "Create_transaction",
    "type": "post",
    "url": "/v1/payment/transactions/request",
    "title": "Create transacation",
    "description": "<p>create transaction and get redirect url</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/payment/routes/transaction.js",
    "groupTitle": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p><code>order</code> or <code>shop_featured</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gateway",
            "description": "<p><code>paypal</code>, <code>stripe</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "redirectSuccessUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "redirectCancelUrl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "stripeToken",
            "description": "<p>required if gateway is <code>stripe</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Payment",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/payment/braintree/token",
    "title": "Get client token for Braintree",
    "description": "<p>Generate token for brainree https://developers.braintreepayments.com/reference/request/client-token/generate/node</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/payment/routes/transaction.js",
    "groupTitle": "Payment",
    "name": "GetV1PaymentBraintreeToken"
  },
  {
    "group": "Payment",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/payment/paypal/callback",
    "title": "Paypal callback return url",
    "description": "<p>update transaction base on request</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/payment/routes/paypal.js",
    "groupTitle": "Payment",
    "name": "GetV1PaymentPaypalCallback"
  },
  {
    "group": "Payment",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/payment/paypal/hook",
    "title": "Paypal webhook",
    "description": "<p>Paypal webhook for sale completed event</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/payment/routes/paypal.js",
    "groupTitle": "Payment",
    "name": "PostV1PaymentPaypalHook"
  },
  {
    "group": "Payment_-_Invoice",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/payment/invoices",
    "title": "Get invoices of user",
    "description": "<p>Get invoices of user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/payment/routes/invoice.js",
    "groupTitle": "Payment_-_Invoice",
    "name": "GetV1PaymentInvoices"
  },
  {
    "group": "Payout_account",
    "version": "1.0.0",
    "name": "Create",
    "type": "post",
    "url": "/v1/payout/accounts",
    "title": "",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/account.route.js",
    "groupTitle": "Payout_account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p><code>paypal</code> or <code>bank-account</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "paypalAccount",
            "description": "<p>Required if type is <code>paypal</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accountHolderName",
            "description": "<p>The recipient's full name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accountNumber",
            "description": "<p>The recipient's bank account number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "iban",
            "description": "<p>The International Bank Account Number. Read More about IBANs https://www.xendpay.com/iban</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bankName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bankAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortCode",
            "description": "<p>UK Bank code (6 digits usually displayed as 3 pairs of numbers)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "routingNumber",
            "description": "<p>The American Bankers Association Number (consists of 9 digits) and is also called a ABA Routing Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "swiftCode",
            "description": "<p>A SWIFT Code consists of 8 or 11 characters, both numbers and letters e.g. RFXLGB2L. Read more about SWIFT/BIC codes https://www.xendpay.com/swiftbic-code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ifscCode",
            "description": "<p>Indian Financial System Code, which is a unique 11-digit code that identifies the bank branch i.e. ICIC0001245. Read more about IFSC Code https://www.xendpay.com/ifsc-code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "routingCode",
            "description": "<p>Any other local Bank Code - eg BSB number in Australia and New Zealand (6 digits)</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Payout_account",
    "version": "1.0.0",
    "name": "Delete",
    "type": "delete",
    "url": "/v1/payout/accounts/:payoutAccountId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payoutAccountId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/account.route.js",
    "groupTitle": "Payout_account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Payout_account",
    "version": "1.0.0",
    "name": "Find_one",
    "type": "get",
    "url": "/v1/payout/accounts/:payoutAccountId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payoutAccountId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/account.route.js",
    "groupTitle": "Payout_account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Payout_account",
    "version": "1.0.0",
    "name": "List",
    "type": "get",
    "url": "/v1/payout/accounts?:type",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>total items will be responsed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Eg <code>createdAt</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/account.route.js",
    "groupTitle": "Payout_account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Payout_account",
    "version": "1.0.0",
    "name": "Update",
    "type": "put",
    "url": "/v1/payout/accounts/:payoutAccountId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payoutAccountId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p><code>paypal</code> or <code>bank-account</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "paypalAccount",
            "description": "<p>Required if type is <code>paypal</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accountHolderName",
            "description": "<p>The recipient's full name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accountNumber",
            "description": "<p>The recipient's bank account number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "iban",
            "description": "<p>The International Bank Account Number. Read More about IBANs https://www.xendpay.com/iban</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bankName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bankAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortCode",
            "description": "<p>UK Bank code (6 digits usually displayed as 3 pairs of numbers)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "routingNumber",
            "description": "<p>The American Bankers Association Number (consists of 9 digits) and is also called a ABA Routing Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "swiftCode",
            "description": "<p>A SWIFT Code consists of 8 or 11 characters, both numbers and letters e.g. RFXLGB2L. Read more about SWIFT/BIC codes https://www.xendpay.com/swiftbic-code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ifscCode",
            "description": "<p>Indian Financial System Code, which is a unique 11-digit code that identifies the bank branch i.e. ICIC0001245. Read more about IFSC Code https://www.xendpay.com/ifsc-code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "routingCode",
            "description": "<p>Any other local Bank Code - eg BSB number in Australia and New Zealand (6 digits)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/account.route.js",
    "groupTitle": "Payout_account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/posts/categories/:id",
    "title": "Remove a category",
    "description": "<p>Remove a category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/category.route.js",
    "groupTitle": "Post",
    "name": "DeleteV1PostsCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/posts/:id",
    "title": "Remove a post",
    "description": "<p>Remove a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>post id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/post.route.js",
    "groupTitle": "Post",
    "name": "DeleteV1PostsId"
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/posts/categories/:id",
    "title": "Get category details",
    "description": "<p>Get category details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/post/routes/category.route.js",
    "groupTitle": "Post",
    "name": "GetV1PostsCategoriesId"
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/posts/categories?:name&:alias",
    "title": "Get list categories",
    "description": "<p>Get list categories</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>category alias</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/post/routes/category.route.js",
    "groupTitle": "Post",
    "name": "GetV1PostsCategoriesNameAlias"
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/posts/:id",
    "title": "Get post details",
    "description": "<p>Get post details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>post id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/post/routes/post.route.js",
    "groupTitle": "Post",
    "name": "GetV1PostsId"
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/posts?:name&:alias&type",
    "title": "Get list posts",
    "description": "<p>Get list posts</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>post name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>post alias</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>post type</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/post/routes/post.route.js",
    "groupTitle": "Post",
    "name": "GetV1PostsNameAliasType"
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/posts",
    "title": "Create new post",
    "description": "<p>Create new post</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/post.route.js",
    "groupTitle": "Post",
    "name": "PostV1Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>category id</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/posts/categories",
    "title": "Create new category",
    "description": "<p>Create new category</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/category.route.js",
    "groupTitle": "Post",
    "name": "PostV1PostsCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/posts/categories/:id",
    "title": "Update a category",
    "description": "<p>Update a category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/category.route.js",
    "groupTitle": "Post",
    "name": "PutV1PostsCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Post",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/posts/:id",
    "title": "Update a post",
    "description": "<p>Update a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>post id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categoryIds",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/post/routes/post.route.js",
    "groupTitle": "Post",
    "name": "PutV1PostsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/products/:id",
    "title": "Remove a brand",
    "description": "<p>Remove a product</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Brand id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "DeleteV1ProductsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/categories?:name&:alias",
    "title": "Get list category",
    "description": "<p>Get list brands</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>brand alias</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product",
    "name": "GetV1ProductsCategoriesNameAlias"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/:id",
    "title": "Get product details",
    "description": "<p>Get product details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "GetV1ProductsId"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products?:name&&:q&:sort&:sortType&:page&:take",
    "title": "Get list products",
    "description": "<p>Get list products</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shortDescription",
            "description": "<p>product description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search all allowed fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>Response item. defaultl <code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>page should take from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>field to sort. or <code>random</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "GetV1ProductsNameQSortSorttypePageTake"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/:productId/related",
    "title": "Get related products",
    "description": "<p>Get related products by product category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": [\n       \"_id\": \"....\",\n       \"name\": \"product name\",\n       \"...\" : \"...\"\n   ],\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "GetV1ProductsProductidRelated"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/search?:name&brandId&:shopId&&:q&dailyDeal&discounted&bestSell&soldOut&:sort&:sortType&:page&:take",
    "title": "Get list products",
    "description": "<p>Get list products</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shortDescription",
            "description": "<p>product description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search all allowed fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>Response item. defaultl <code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>page should take from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>field to sort. or <code>random</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brandId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "dailyDeal",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "discounted",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "bestSell",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "soldOut",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "GetV1ProductsSearchNameBrandidShopidQDailydealDiscountedBestsellSoldoutSortSorttypePageTake"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/products",
    "title": "Create new product",
    "description": "<p>Create new product</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "PostV1Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shortDescription",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>physical</code> or <code>digital</code>. Default is <code>physical</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "salePrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brandId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>stock keeping unit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "upc",
            "description": "<p>univeral product code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mpn",
            "description": "<p>manufater part number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ean",
            "description": "<p>european article number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jan",
            "description": "<p>japanese artical number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "isbn",
            "description": "<p>international standard book number</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Flag to active / show product in frontend</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainImage",
            "description": "<p>media id. if it is not set and images is not empty, will get first images</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "images",
            "description": "<p>media id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "specifications",
            "description": "<p><code>[{key, value}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.key",
            "description": "<p>special keys</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.value",
            "description": "<p>special value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "defaultValue": "false",
            "description": "<p>allow for admin user only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taxClass",
            "description": "<p>eg VAT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "taxPercentage",
            "description": "<p>eg 10 (in percentage)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "digitalFileId",
            "description": "<p>Media id for digital file</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "restrictCODAreas",
            "description": "<p>array of zip code seller can entered</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "freeShip",
            "description": "<p>Freeship checkbox. Default is <code>true</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "restrictFreeShipAreas",
            "description": "<p>array of area which allow freeship</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "restrictFreeShipAreas.areaType",
            "description": "<p><code>zipcode</code>, <code>city</code>, <code>state</code>, <code>country</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "restrictFreeShipAreas.value",
            "description": "<p>zipcode or city id, state id, country iso code</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "dailyDeal",
            "description": "<p>daily deal option. Default is <code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dealTo",
            "description": "<p>daily deal date format. Time for this deal</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "metaSeo",
            "description": "<p><code>{keywords, description}</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/products/alias/check",
    "title": "Check alias",
    "description": "<p>Check alias is exist or not</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"exist\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "PostV1ProductsAliasCheck"
  },
  {
    "group": "Product",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/products/:id",
    "title": "Update a product",
    "description": "<p>Update a product</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "PutV1ProductsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shortDescription",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>physical</code> or <code>digital</code>. Default is <code>physical</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "salePrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stockQuantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "categoryId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brandId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>stock keeping unit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "upc",
            "description": "<p>univeral product code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mpn",
            "description": "<p>manufater part number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ean",
            "description": "<p>european article number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jan",
            "description": "<p>japanese artical number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "isbn",
            "description": "<p>international standard book number</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Flag to active / show product in frontend</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainImage",
            "description": "<p>media id. if it is not set and images is not empty, will get first images</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "images",
            "description": "<p>media id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "specifications",
            "description": "<p><code>[{key, value}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.key",
            "description": "<p>special keys</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.value",
            "description": "<p>special value</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "defaultValue": "false",
            "description": "<p>allow for admin user only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taxClass",
            "description": "<p>eg VAT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "taxPercentage",
            "description": "<p>eg 10 (in percentage)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "digitalFileId",
            "description": "<p>Media id for digital file</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "restrictCODAreas",
            "description": "<p>array of zip code seller can entered</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "freeShip",
            "description": "<p>Freeship checkbox. Default is <code>true</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "restrictFreeShipAreas",
            "description": "<p>array of area which allow freeship</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "restrictFreeShipAreas.areaType",
            "description": "<p><code>zipcode</code>, <code>city</code>, <code>state</code>, <code>country</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "restrictFreeShipAreas.value",
            "description": "<p>zipcode or city id, state id, country iso code</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "dailyDeal",
            "description": "<p>daily deal option. Default is <code>false</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dealTo",
            "description": "<p>daily deal date format. Time for this deal</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "metaSeo",
            "description": "<p><code>{keywords, description}</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product_Option",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/products/options/:id",
    "title": "Remove a option",
    "description": "<p>Remove a option</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Option id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/options.route.js",
    "groupTitle": "Product_Option",
    "name": "DeleteV1ProductsOptionsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product_Option",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/options/:id",
    "title": "Get option details",
    "description": "<p>Get option details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Option id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/options.route.js",
    "groupTitle": "Product_Option",
    "name": "GetV1ProductsOptionsId"
  },
  {
    "group": "Product_Option",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/options?:name&:key",
    "title": "Get list options",
    "description": "<p>Get list options</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>option name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>option key</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/options.route.js",
    "groupTitle": "Product_Option",
    "name": "GetV1ProductsOptionsNameKey"
  },
  {
    "group": "Product_Option",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/products/options",
    "title": "Create new option",
    "description": "<p>Create new option</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/options.route.js",
    "groupTitle": "Product_Option",
    "name": "PostV1ProductsOptions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Option name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Unique key for searching in system. <code>_custom</code> is not allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>Option array data with <code>key</code> and <code>displayText</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.key",
            "description": "<p>unique key for option value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.displayText",
            "description": "<p>Text will be shown in the frontend</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product_Option",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/products/options/:id",
    "title": "Update a option",
    "description": "<p>Update a option</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/options.route.js",
    "groupTitle": "Product_Option",
    "name": "PutV1ProductsOptionsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Option name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Unique key for searching in system. <code>_custom</code> is not allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>Option array data with <code>key</code> and <code>displayText</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.key",
            "description": "<p>unique key for option value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.displayText",
            "description": "<p>Text will be shown in the frontend</p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product_category",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/products/categories/:id",
    "title": "Remove a brand",
    "description": "<p>Remove a category</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Brand id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product_category",
    "name": "DeleteV1ProductsCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product_category",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/categories/:id",
    "title": "Get category details",
    "description": "<p>Get category details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>category id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product_category",
    "name": "GetV1ProductsCategoriesId"
  },
  {
    "group": "Product_category",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/categories/tree",
    "title": "Get tree",
    "description": "<p>Get tree</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product_category",
    "name": "GetV1ProductsCategoriesTree"
  },
  {
    "group": "Product_category",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/products/categories",
    "title": "Create new category",
    "description": "<p>Create new category</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product_category",
    "name": "PostV1ProductsCategories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainImage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "specifications",
            "description": "<p>array of string specifications</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "chemicalIdentifiers",
            "description": "<p>array of string chemical identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "metaSeo",
            "description": "<p><code>{keywords, description}</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product_category",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/products/categories/:id",
    "title": "Update a category",
    "description": "<p>Update a category</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/categories.route.js",
    "groupTitle": "Product_category",
    "name": "PutV1ProductsCategoriesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Brand name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alias",
            "description": "<p>Alias name. Or will be generated from name automatically</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ordering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainImage",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "specifications",
            "description": "<p>array of string specifications</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "chemicalIdentifiers",
            "description": "<p>array of string chemical identifiers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "metaSeo",
            "description": "<p><code>{keywords, description}</code></p>"
          }
        ]
      }
    }
  },
  {
    "group": "Product_variant",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/products/:productId/variants/:productVariantId",
    "title": "Remove a variant",
    "description": "<p>Remove a variant</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productVariantId",
            "description": "<p>variant id</p>"
          },
          {
            "group": "Parameter",
            "type": "productId",
            "optional": false,
            "field": "product",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/variant.route.js",
    "groupTitle": "Product_variant",
    "name": "DeleteV1ProductsProductidVariantsProductvariantid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product_variant",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/:productId/variants/:id",
    "title": "Get variant details",
    "description": "<p>Get variant details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Brand id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/variant.route.js",
    "groupTitle": "Product_variant",
    "name": "GetV1ProductsProductidVariantsId"
  },
  {
    "group": "Product_variant",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/:productId/variants?page&take&sort&sortType",
    "title": "Get list variants of the product",
    "description": "<p>Get list variants of the product</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "productId",
            "optional": false,
            "field": "product",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/product/routes/variant.route.js",
    "groupTitle": "Product_variant",
    "name": "GetV1ProductsProductidVariantsPageTakeSortSorttype"
  },
  {
    "group": "Product_variant",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/products/variants",
    "title": "Create new variant",
    "description": "<p>Create new variant</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "productId",
            "optional": false,
            "field": "product",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "salePrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": "<p>stock quantity for this variants</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "digitalFileId",
            "description": "<p>Media id for digital file</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "specifications",
            "description": "<p><code>[{key, value}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.key",
            "description": "<p>special keys</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.value",
            "description": "<p>special value</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "options",
            "description": "<p><code>[{key, value, displayText}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.optionKey",
            "description": "<p>Option key from API get options. add <code>_custom</code> for custom attributes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.key",
            "description": "<p>Key of option</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.value",
            "description": "<p>any value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.displayText",
            "description": "<p>Text from options field or custom text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/product/routes/variant.route.js",
    "groupTitle": "Product_variant",
    "name": "PostV1ProductsVariants",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Product_variant",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/products/:productId/variants/:id",
    "title": "Update a variant",
    "description": "<p>Update a variant</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "productId",
            "optional": false,
            "field": "product",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "salePrice",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stockQuantity",
            "description": "<p>stock quantity for this variants</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "digitalFileId",
            "description": "<p>Media id for digital file</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "specifications",
            "description": "<p><code>[{key, value}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.key",
            "description": "<p>special keys</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specifications.value",
            "description": "<p>special value</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "options",
            "description": "<p><code>[{key, value, displayText}]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.optionKey",
            "description": "<p>Option key from API get options. add <code>_custom</code> for custom attributes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.key",
            "description": "<p>Key of option</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.value",
            "description": "<p>any value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "options.displayText",
            "description": "<p>Text from options field or custom text</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/variant.route.js",
    "groupTitle": "Product_variant",
    "name": "PutV1ProductsProductidVariantsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Pusher",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/pusher/auth",
    "title": "Authenticate",
    "description": "<p>Authenticate for presence or private chanel https://pusher.com/docs/authenticating_users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socket_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_name",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/notification/routes/pusher.route.js",
    "groupTitle": "Pusher",
    "name": "PostV1PusherAuth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/questions/:id",
    "title": "Remove a question",
    "description": "<p>Remove a question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "answer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "replayedBy",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "DeleteV1QuestionsId"
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/questions/:id",
    "title": "Get question details",
    "description": "<p>Get question details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>question id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "GetV1QuestionsId"
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/questions/random?:title&:locatione&take",
    "title": "Get random question",
    "description": "<p>Get random question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>title of question</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>num of item should return</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "GetV1QuestionsRandomTitleLocationeTake"
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/questions?:title&:location&page&take",
    "title": "Get list questions",
    "description": "<p>Get list questions</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "question",
            "description": "<p>title of question</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "GetV1QuestionsTitleLocationPageTake"
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/questions",
    "title": "Create new question",
    "description": "<p>Create new question</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "PostV1Questions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "answer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "replayedBy",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Question",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/questions/:id",
    "title": "Update a question",
    "description": "<p>Update a question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "answer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "replayedBy",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/question/index.js",
    "groupTitle": "Question",
    "name": "PutV1QuestionsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Refund_request",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/refundRequests/:refundRequestId",
    "title": "Get detail",
    "description": "<p>Get details of request</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"OK\",\n  \"data\": {\n    \"_id\": \"xxxxxx\",\n    \"reason\": \"some text\",\n    \"orderDetail\": { \"key\": \"val\" },\n    \"shop\": { \"key\": \"val\" },\n    \"customer\": { \"key\": \"val\" }\n  },\n  \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/refund-request.route.js",
    "groupTitle": "Refund_request",
    "name": "GetV1RefundrequestsRefundrequestid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Refund_request",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/refundRequests?:sort&:sortType&:page&:take",
    "title": "Get list refund request",
    "description": "<p>Get list refund request</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"OK\",\n  \"data\": {\n    \"items\": [{ reason: \"some text\" }],\n    \"count\": 1\n  },\n  \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/refund-request.route.js",
    "groupTitle": "Refund_request",
    "name": "GetV1RefundrequestsSortSorttypePageTake",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Refund_request",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/refundRequests",
    "title": "Send refund request",
    "description": "<p>Send refund request to shop</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderDetailId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"message\": \"OK\",\n  \"data\": {\n    \"_id\": \"xxxxxx\",\n    \"reason\": \"some text\"\n  },\n  \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/refund-request.route.js",
    "groupTitle": "Refund_request",
    "name": "PostV1Refundrequests",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Report",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/reports/:reportId",
    "title": "Remove report",
    "description": "<p>Remove report</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/report/routes/report.route.js",
    "groupTitle": "Report",
    "name": "DeleteV1ReportsReportid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Report",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/reports/:reportId",
    "title": "Get details of the Report",
    "description": "<p>Get details of the Report</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/report/routes/report.route.js",
    "groupTitle": "Report",
    "name": "GetV1ReportsReportid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Report",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/reports?:status&:sort&:sortType&:page&:take",
    "title": "Get list reports",
    "description": "<p>Get list reports of current customer. Or all if admin</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/report/routes/report.route.js",
    "groupTitle": "Report",
    "name": "GetV1ReportsStatusSortSorttypePageTake",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Report",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/reports",
    "title": "Create new Report",
    "description": "<p>Create new Report</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/report/routes/report.route.js",
    "groupTitle": "Report",
    "name": "PostV1Reports",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Report",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/reports/:reportId",
    "title": "Update report",
    "description": "<p>Update report</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p><code>pending</code>, <code>resolved</code>, 'rejected</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/report/routes/report.route.js",
    "groupTitle": "Report",
    "name": "PutV1ReportsReportid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Approve",
    "type": "post",
    "url": "/v1/payout/request/:requestId/approve",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Custom any note to request</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payout/routes/request.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Find_one",
    "type": "get",
    "url": "/v1/payout/requests/:requestId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/request.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Get_balance",
    "description": "<p>Get current balance of current shop</p>",
    "type": "get",
    "url": "/v1/payout/balance",
    "title": "",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/stats.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Get_balance_by_shop",
    "description": "<p>Get current balance of shop</p>",
    "type": "get",
    "url": "/v1/payout/balance/:shopId",
    "title": "",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payout/routes/stats.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Get_list",
    "type": "get",
    "url": "/v1/payout/requests?:type&:shopId&:status&:code",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>paypal</code> or <code>bank-account</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Allow empty, <code>approved</code> or <code>rejected</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>The shop, allow for admin account only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>search text for code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>total items will be responsed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Eg <code>createdAt</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/request.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Reject",
    "type": "post",
    "url": "/v1/payout/request/:requestId/reject",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rejectReason",
            "description": "<p>Reason why reject this request from admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>Custom any note to request</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payout/routes/request.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Send_request",
    "type": "post",
    "url": "/v1/payout/request",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payoutAccountId",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/request.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Request_Payout",
    "version": "1.0.0",
    "name": "Stats_current_shop",
    "description": "<p>Get statistic for the current shop</p>",
    "type": "get",
    "url": "/v1/payout/stats?:shopId&:startDate&:toDate",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>allow shop if admin</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "startDate",
            "description": "<p>UTC time format</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "toDate",
            "description": "<p>UTC time format</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/payout/routes/stats.route.js",
    "groupTitle": "Request_Payout"
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/reviews/:reviewId",
    "title": "Remove a review",
    "description": "<p>Remove a review</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewId",
            "description": "<p>Review id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "DeleteV1ReviewsReviewid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/reviews?:productId&:rateBy&:shopId&:type",
    "title": "Get list categories",
    "description": "<p>Get list categories</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>review for products</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rateBy",
            "description": "<p>who reviewed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>shop</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>product</code> or <code>shop</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "GetV1ReviewsProductidRatebyShopidType"
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/reviews/:reviewId",
    "title": "Get review details",
    "description": "<p>Get review details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewId",
            "description": "<p>Review id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "GetV1ReviewsReviewid"
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/reviews/:type/:itemId/current",
    "title": "Get my current review",
    "description": "<p>Get review of current item</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p><code>product</code> or <code>shop</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Shop id or product id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "GetV1ReviewsTypeItemidCurrent"
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/reviews",
    "title": "Create new review",
    "description": "<p>Create new review</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>product id. Required if type is <code>product</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>shop id. Required if type is <code>shop</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Score for rate. from 1-5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>product</code> or <code>shop</code>. Default is product</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "PostV1Reviews",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/reviews/canReview",
    "title": "Check if review is allowable",
    "description": "<p>Check if review is allowable</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "productId",
            "description": "<p>product id. Required if type is <code>product</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>shop id. Required if type is <code>shop</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p><code>product</code> or <code>shop</code>. Default is product</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"canReview\": true }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "PostV1ReviewsCanreview"
  },
  {
    "group": "Review",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/reviews/:reviewId",
    "title": "Update a review",
    "description": "<p>Update a review</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewId",
            "description": "<p>Review id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Score for rate. from 1-5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/review/index.js",
    "groupTitle": "Review",
    "name": "PutV1ReviewsReviewid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "name": "Find_shops",
    "type": "get",
    "url": "/v1/shops/search?page&take&name&address&city&state&zipcode&returnAddress&latitude&longitude&distance",
    "title": "",
    "description": "<p>Find shops</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>shop name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>shop address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>shop city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>shop state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>shop zipcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "returnAddress",
            "description": "<p>shop return address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search all allowed fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>Response item. defaultl <code>10</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>page should take from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>field to sort. or <code>random</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortType",
            "description": "<p><code>desc</code> or <code>asc</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "distance",
            "description": "<p>in km. If not provide, will search all</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/shop/routes/shop.route.js",
    "groupTitle": "Shop"
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/shops/:id",
    "title": "Get shop by id or alias",
    "description": "<p>Get shop details</p>",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/shop/routes/shop.route.js",
    "groupTitle": "Shop",
    "name": "GetV1ShopsId"
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/shops/me",
    "title": "Get shop of current user",
    "description": "<p>Get shop of current user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/shop/routes/shop.route.js",
    "groupTitle": "Shop",
    "name": "GetV1ShopsMe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/shops",
    "title": "Create shop",
    "description": "<p>Create a new shop</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>userId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address of shop</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Shop address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Shop phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>Shop city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Shop state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Shop country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>Shop zipcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "verificationIssueId",
            "description": "<p>mediaId - by using upload api</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logoId",
            "description": "<p>mediaId - media id by upload</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bannerId",
            "description": "<p>mediaId - media id by upload</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "returnAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "location",
            "description": "<p>array <code>[longitude, latitude]</code> of geo location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "businessInfo",
            "description": "<p><code>{name, identifier, address}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo",
            "description": "<p>bank information</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.swiftCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankBranchId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankBranchName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.accountNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.accountName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "socials",
            "description": "<p><code>{facebook, twitter, google, linkedin, youtube, instagram, flickr}</code> object with key is social provider and value is url string to social profile</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "activated",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "featuredTo",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gaCode",
            "description": "<p>Google anyalytics code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "headerText",
            "description": "<p>Custom header text</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "notifications",
            "description": "<p>Notification settings</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "notifications.lowInventory",
            "description": "<p>Low inventory setting</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "storeWideShipping",
            "description": "<p>Store wide setting. use if not set in the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "shippingSettings",
            "description": "<p>Setting for store-wide shipping</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.defaultPrice",
            "description": "<p>default price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.perProductPrice",
            "description": "<p>Additional price for product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.perQuantityPrice",
            "description": "<p>Additional price for each product quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.processingTime",
            "description": "<p>Processing time in day <code>one2Three</code>, <code>Four2Five</code>, <code>Five2Eight</code>, <code>other</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.shippingPolicy",
            "description": "<p>text for shop policy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.refundPolicy",
            "description": "<p>text for custom refund policy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.shipFrom",
            "description": "<p>Country for shipping location. Use <code>alpha2</code> code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "announcement",
            "description": "<p>announcement for shop which show in the user side</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/shop/routes/shop.route.js",
    "groupTitle": "Shop",
    "name": "PostV1Shops",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/shops/register",
    "title": "Register a shop",
    "description": "<p>Register a shop. allow for both unregistered and logged in user if user does not signin, we will check and verify this account in the db first</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address. if user did not login, system will create account with this email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>password. min 6 characters. if user did not login, system will create account with this password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Shop address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Shop phone number. if user did not login, system will create account with this phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Shop city. if user did not login, system will create account with this city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Shop state. if user did not login, system will create account with this state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Shop country. if user did not login, system will create account with this country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Shop zipcode. if user did not login, system will create account with this zipcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verificationIssueId",
            "description": "<p>mediaId - by using upload api</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/shop/routes/register.route.js",
    "groupTitle": "Shop",
    "name": "PostV1ShopsRegister",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/shops/register/document",
    "title": "Upload verification issue document",
    "description": "<p>Upload a document for shop verification. Use multipart/form-data to upload file and add additional fields</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>file data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/shop/routes/register.route.js",
    "groupTitle": "Shop",
    "name": "PostV1ShopsRegisterDocument"
  },
  {
    "group": "Shop",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/shops/:id",
    "title": "Update shop",
    "description": "<p>Update shop</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email address of shop</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Shop address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Shop phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>Shop city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Shop state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Shop country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>Shop zipcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "verificationIssueId",
            "description": "<p>mediaId - by using upload api</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logoId",
            "description": "<p>mediaId - media id by upload</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bannerId",
            "description": "<p>mediaId - media id by upload</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "returnAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "location",
            "description": "<p>array <code>[longitude, latitude]</code> of geo location</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "businessInfo",
            "description": "<p><code>{name, identifier, address}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo",
            "description": "<p>bank information</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.swiftCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankBranchId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.bankBranchName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.accountNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "bankInfo.accountName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "socials",
            "description": "<p><code>{facebook, twitter, google, linkedin, youtube, instagram, flickr}</code> object with key is social provider and value is url string to social profile</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "activated",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "featuredTo",
            "description": "<p>Just available for <code>admin</code> role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gaCode",
            "description": "<p>Google anyalytics code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "headerText",
            "description": "<p>Custom header text</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "notifications",
            "description": "<p>Notification settings</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "notifications.lowInventory",
            "description": "<p>Low inventory setting</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "storeWideShipping",
            "description": "<p>Store wide setting. use if not set in the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "shippingSettings",
            "description": "<p>Setting for store-wide shipping</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.defaultPrice",
            "description": "<p>default price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.perProductPrice",
            "description": "<p>Additional price for product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shippingSettings.perQuantityPrice",
            "description": "<p>Additional price for each product quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.processingTime",
            "description": "<p>Processing time in day <code>one2Three</code>, <code>Four2Five</code>, <code>Five2Eight</code>, <code>other</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.shippingPolicy",
            "description": "<p>text for shop policy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.refundPolicy",
            "description": "<p>text for custom refund policy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shippingSettings.shipFrom",
            "description": "<p>Country for shipping location. Use <code>alpha2</code> code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "announcement",
            "description": "<p>announcement for shop which show in the user side</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/shop/routes/shop.route.js",
    "groupTitle": "Shop",
    "name": "PutV1ShopsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Featured_Package",
    "version": "1.0.0",
    "name": "Create",
    "type": "post",
    "url": "/v1/packages/featured",
    "title": "",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payment/routes/shop-featured.js",
    "groupTitle": "Shop_Featured_Package",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numDays",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "group": "Shop_Featured_Package",
    "version": "1.0.0",
    "name": "Delete",
    "type": "delete",
    "url": "/v1/packages/featured/:shopFeaturedPackageId",
    "title": "",
    "description": "<p>Remove a post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopFeaturedPackageId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numDays",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payment/routes/shop-featured.js",
    "groupTitle": "Shop_Featured_Package"
  },
  {
    "group": "Shop_Featured_Package",
    "version": "1.0.0",
    "name": "FindOne",
    "type": "get",
    "url": "/v1/packages/featured/:shopFeaturedPackageId",
    "title": "",
    "description": "<p>Find one a package</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopFeaturedPackageId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numDays",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin or seller"
      }
    ],
    "filename": "server/module/payment/routes/shop-featured.js",
    "groupTitle": "Shop_Featured_Package"
  },
  {
    "group": "Shop_Featured_Package",
    "version": "1.0.0",
    "name": "Listing",
    "type": "get",
    "url": "/v1/packages/featured?:q",
    "title": "",
    "description": "<p>Get list packages/featured</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>search keywords</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payment/routes/shop-featured.js",
    "groupTitle": "Shop_Featured_Package"
  },
  {
    "group": "Shop_Featured_Package",
    "version": "1.0.0",
    "name": "Update",
    "type": "put",
    "url": "/v1/packages/featured/:shopFeaturedPackageId",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shopFeaturedPackageId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numDays",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ordering",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/payment/routes/shop-featured.js",
    "groupTitle": "Shop_Featured_Package",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "name": "Do_download_fie",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId/digitals/download",
    "title": "",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId",
    "title": "Get details of the sub order",
    "description": "<p>Get details of the sub order which managed by shop</p>",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "name": "GetV1OrdersDetailsOrderdetailid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId",
    "title": "Get details of the sub order",
    "description": "<p>Get details of the sub order which managed by shop</p>",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "name": "GetV1OrdersDetailsOrderdetailid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/shops?:status&:sort&:sortType&:page&:take&startDate&toDate&paymentMethod",
    "title": "Get list orders for shop",
    "description": "<p>Get list orders of shop. it is order details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>start time in UTC format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "toDate",
            "description": "<p>to time in UTC format</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "name": "GetV1OrdersShopsStatusSortSorttypePageTakeStartdateTodatePaymentmethod",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "name": "Get_download_invoice",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId/download/invoice",
    "title": "",
    "description": "<p>Download invoice content. Add access_token to query string</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order-delivery.js",
    "groupTitle": "Shop_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "name": "Get_download_invoice",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId/download/invoice",
    "title": "",
    "description": "<p>Download invoice content. Add access_token to query string</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "name": "Get_download_link",
    "type": "get",
    "url": "/v1/orders/details/:orderDetailId/digitals/download/link",
    "title": "",
    "description": "<p>Get details of the sub order which managed by shop</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true,\n       \"message\": \"An email with download link has been sent to your email\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/orders/details/:orderDetailId/status",
    "title": "Update shop order status",
    "description": "<p>Update shop order status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>pending</code>, <code>progressing</code>, <code>shipping</code>, <code>completed</code>, <code>refunded</code>, <code>cancelled</code></p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "name": "PutV1OrdersDetailsOrderdetailidStatus",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Shop_Order",
    "version": "1.0.0",
    "name": "Update_shipping_info",
    "type": "put",
    "url": "/v1/orders/details/:orderDetailId/shipping",
    "title": "",
    "description": "<p>Update shop order shipping info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingMethod",
            "description": "<p>Like UPS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shippingCode",
            "description": "<p>The shipping code of shipping method</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/order/routes/order-details.js",
    "groupTitle": "Shop_Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/seller/stats/sale?shopId",
    "title": "Sale stats",
    "description": "<p>Get stats sale. Allow admin or selle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>Allow to filter by shop if admin</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"balance\": 1,\n       \"commission\": 1,\n       \"totalPrice\": 1,\n       \"taxPrice\": 1,\n       \"totalProduct\": 1\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/order/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1OrdersSellerStatsSaleShopid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/orders/seller/stats?shopId",
    "title": "Order",
    "description": "<p>Get stats for order. Allow seller or admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shopId",
            "description": "<p>Allow to filter by shop if admin</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "seller\n {\n    \"code\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n        \"pending\": 1,\n        \"progressing\": 1,\n        \"shipping\": 1,\n        \"completed\": 1,\n        \"refunded\": 1,\n        \"cancelled\": 1,\n        \"all\": 1\n    },\n    \"error\": false\n }"
      }
    ],
    "filename": "server/module/order/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1OrdersSellerStatsShopid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/products/seller/stats",
    "title": "Products statistic",
    "description": "<p>Get stats for product</p>",
    "permission": [
      {
        "name": "seller"
      }
    ],
    "filename": "server/module/product/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1ProductsSellerStats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/shops/stats",
    "title": "Shop statistic",
    "description": "<p>Get stats for shop</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Success:",
          "content": "{\n   \"code\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n       \"verified\": 5,\n       \"unverified\": 0,\n       \"activated\": 0,\n       \"deactivated\": 0,\n       \"featured\": 0,\n       \"all\": 5\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/shop/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1ShopsStats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/users/line_stats",
    "title": "User statistic",
    "description": "<p>Get stats for user</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Success:",
          "content": "{\n   \"code\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n       \"activated\": 2,\n       \"deactivated\": 1,\n       \"all\": 3\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/user/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1UsersLine_stats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Statistic",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/users/stats",
    "title": "User statistic",
    "description": "<p>Get stats for user</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Success:",
          "content": "{\n   \"code\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n       \"activated\": 2,\n       \"deactivated\": 1,\n       \"all\": 3\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/module/user/routes/stats.route.js",
    "groupTitle": "Statistic",
    "name": "GetV1UsersStats",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "System",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/system/configs",
    "title": "Get list configs",
    "description": "<p>Get list configs</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/system/routes/config.route.js",
    "groupTitle": "System",
    "name": "GetV1SystemConfigs"
  },
  {
    "group": "System",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/system/configs",
    "title": "",
    "permission": [
      {
        "name": "all"
      }
    ],
    "filename": "server/module/system/routes/config.route.js",
    "groupTitle": "System",
    "name": "GetV1SystemConfigs"
  },
  {
    "group": "System",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/system/configs/:id",
    "title": "Update a config",
    "description": "<p>Update a config</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>config id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Any value type</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/system/routes/config.route.js",
    "groupTitle": "System",
    "name": "PutV1SystemConfigsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/users/:id",
    "title": "Delete user",
    "description": "<p>Delete user profile. just allow for non-admin user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "DeleteV1UsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/users/:id",
    "title": "Get user profile",
    "description": "<p>Get public user profile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "GetV1UsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"role\": \"user\",\n       \"provider\": \"local\",\n       \"_id\": \"5b99da5989b54c53851fa66c\",\n       \"type\": \"user\",\n       \"isActive\": true,\n       \"emailVerified\": false,\n       \"phoneNumber\": \"\",\n       \"phoneVerified\": false,\n       \"address\": \"\",\n       \"email\": \"tuongtest@yopmail.com\",\n       \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n       \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n       \"__v\": 0,\n       \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/users/me",
    "title": "Get my profile",
    "description": "<p>get current profle of logged in user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "GetV1UsersMe",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"role\": \"user\",\n       \"provider\": \"local\",\n       \"_id\": \"5b99da5989b54c53851fa66c\",\n       \"type\": \"user\",\n       \"isActive\": true,\n       \"emailVerified\": false,\n       \"phoneNumber\": \"\",\n       \"phoneVerified\": false,\n       \"address\": \"\",\n       \"email\": \"tuongtest@yopmail.com\",\n       \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n       \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n       \"__v\": 0,\n       \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/users/search?:name&:phoneNumber&:isActive&:phoneVerified&:emailVerified&:role",
    "title": "Search users",
    "description": "<p>Search users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phoneVerified",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "emailVerified",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"count\": 10,\n       \"items\": [\n           \"role\": \"user\",\n           \"provider\": \"local\",\n           \"_id\": \"5b99da5989b54c53851fa66c\",\n           \"type\": \"user\",\n           \"isActive\": true,\n           \"emailVerified\": false,\n           \"phoneNumber\": \"\",\n           \"phoneVerified\": false,\n           \"address\": \"\",\n           \"email\": \"tuongtest@yopmail.com\",\n           \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n           \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n           \"__v\": 0,\n           \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n       ]\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "GetV1UsersSearchNamePhonenumberIsactivePhoneverifiedEmailverifiedRole",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/phone/verify",
    "title": "Verify phone number",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"message\": \"Your phone number has been verifie\",\n       \"success\": true\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/phone.route.js",
    "groupTitle": "User",
    "name": "PostV1PhoneVerify",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/users",
    "title": "Create new user",
    "description": "<p>Create new user</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "PostV1Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phoneVerified",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "emailVerified",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"role\": \"user\",\n       \"provider\": \"local\",\n       \"_id\": \"5b99da5989b54c53851fa66c\",\n       \"type\": \"user\",\n       \"isActive\": true,\n       \"emailVerified\": false,\n       \"phoneNumber\": \"\",\n       \"phoneVerified\": false,\n       \"address\": \"\",\n       \"email\": \"tuongtest@yopmail.com\",\n       \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n       \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n       \"__v\": 0,\n       \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/users/avatar",
    "title": "Change current user avatar",
    "description": "<p>Change user avatar. Use multipart/formdata</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>file data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"url\": \"http://url/to/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "PostV1UsersAvatar",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/users/:id",
    "title": "Update profile",
    "description": "<p>Update profile</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "PostV1UsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phoneVerified",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "emailVerified",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"role\": \"user\",\n       \"provider\": \"local\",\n       \"_id\": \"5b99da5989b54c53851fa66c\",\n       \"type\": \"user\",\n       \"isActive\": true,\n       \"emailVerified\": false,\n       \"phoneNumber\": \"\",\n       \"phoneVerified\": false,\n       \"address\": \"\",\n       \"email\": \"tuongtest@yopmail.com\",\n       \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n       \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n       \"__v\": 0,\n       \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/users/:id/avatar",
    "title": "Change user avatar",
    "description": "<p>Change user avatar. Use multipart/formdata</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>file data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"url\": \"http://url/to/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "PostV1UsersIdAvatar",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/phone",
    "title": "Change user phone",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"message\": \"A verify code has been sent to your phone number\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/user/routes/phone.route.js",
    "groupTitle": "User",
    "name": "PutV1Phone",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "put",
    "url": "/v1/users",
    "title": "Update current user profile",
    "description": "<p>Update profile</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "server/module/user/routes/user.route.js",
    "groupTitle": "User",
    "name": "PutV1Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phoneVerified",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "emailVerified",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Success",
          "content": "{\n   \"code\": 200,\n   \"message\": \"OK\",\n   \"data\": {\n       \"role\": \"user\",\n       \"provider\": \"local\",\n       \"_id\": \"5b99da5989b54c53851fa66c\",\n       \"type\": \"user\",\n       \"isActive\": true,\n       \"emailVerified\": false,\n       \"phoneNumber\": \"\",\n       \"phoneVerified\": false,\n       \"address\": \"\",\n       \"email\": \"tuongtest@yopmail.com\",\n       \"createdAt\": \"2018-09-13T03:32:41.715Z\",\n       \"updatedAt\": \"2018-09-13T03:32:41.715Z\",\n       \"__v\": 0,\n       \"avatarUrl\": \"http://url/to/default/avatar.jpg\"\n   },\n   \"error\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Wishlist",
    "version": "1.0.0",
    "type": "delete",
    "url": "/v1/wishlist/:id",
    "title": "Remove a wishlist",
    "description": "<p>Remove a wishlist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Wishlist id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/wishlist.route.js",
    "groupTitle": "Wishlist",
    "name": "DeleteV1WishlistId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "Wishlist",
    "version": "1.0.0",
    "type": "get",
    "url": "/v1/wishlist?:sort&:sortType&:page&:take",
    "title": "Get list wishlist",
    "description": "<p>Get list wishlist of current user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "filename": "server/module/product/routes/wishlist.route.js",
    "groupTitle": "Wishlist",
    "name": "GetV1WishlistSortSorttypePageTake"
  },
  {
    "group": "Wishlist",
    "version": "1.0.0",
    "type": "post",
    "url": "/v1/wishlist",
    "title": "Create new wishlist",
    "description": "<p>Create new wishlist.</p>",
    "permission": [
      {
        "name": "superadmin"
      }
    ],
    "filename": "server/module/product/routes/wishlist.route.js",
    "groupTitle": "Wishlist",
    "name": "PostV1Wishlist",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"Authorization\": \"Bearer abcxyz1234\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product uuid</p>"
          }
        ]
      }
    }
  }
] });
