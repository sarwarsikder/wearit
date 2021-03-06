import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/starter', title: 'Dashboard', icon: 'fa fa-dashboard', class: '', label: 'starter', labelClass: '', extralink: false, submenu: []
  },
  {
    path: '/users/list', title: 'Users', icon: 'fa fa-users', class: 'has-arrow', label: 'users', labelClass: '', extralink: false,
    submenu: [
      { path: '/users/list/admin', title: 'Admin users', icon: 'fa fa-users', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/users/list/seller', title: 'Seller Users', icon: 'fa fa-users', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/users/list/user', title: 'Normal Users', icon: 'fa fa-users', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/users/list/courier', title: 'Courier users', icon: 'fa fa-users', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/users/create', title: 'Create new', icon: 'fa fa fa-user-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },
  {
    path: '/shops', title: 'Shops', icon: 'fa fa-shopping-cart', class: 'has-arrow', label: 'shops', labelClass: '', extralink: false,
    submenu: [
      { path: '/shops', title: 'Shops', icon: 'fa fa-shopping-cart', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/shops/create', title: 'Shop Create', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/products', title: 'Products', icon: 'fa fa-database', class: 'has-arrow', label: 'products', labelClass: '', extralink: false, submenu: [
      { path: '/products', title: 'Products', icon: 'fa fa-database', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/pending', title: 'Pending Products', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/create', title: 'Product Create', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/categories', title: 'Products categories', icon: 'fa fa-cubes', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/categories/create', title: 'Create new category', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/brands/create', title: 'Create new brand', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/brands', title: 'Products Brands', icon: 'fa fa-cubes', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/options', title: 'Products options', icon: 'fa fa-cubes', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/products/options/create', title: 'Create new option', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ]
  },
  {
    path: '/orders/list', title: 'Orders', icon: 'fa fa-bars', class: 'has-arrow', label: 'orders', labelClass: '', extralink: false, submenu: [
      { path: '/orders/list', title: 'Orders', icon: 'fa fa-usd', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/refunds', title: 'Refunds', icon: 'fa fa-undo', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/banners', title: 'Banners', icon: 'fa fa-image', class: 'has-arrow', label: 'banners', labelClass: '', extralink: false, submenu: [
      { path: '/banners', title: 'Banners', icon: 'fa fa-image', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/banners/create', title: 'New banner', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/malls', title: 'Malls', icon: 'fa fa-image', class: 'has-arrow', label: 'malls', labelClass: '', extralink: false, submenu: [
      { path: '/malls', title: 'Malls', icon: 'fa fa-image', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/malls/create', title: 'New Mall', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/offers', title: 'Offers', icon: 'fa fa-image', class: 'has-arrow', label: 'offers', labelClass: '', extralink: false, submenu: [
      { path: '/offers', title: 'Offers', icon: 'fa fa-image', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/offers/create', title: 'New offer', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/posts', title: 'Posts', icon: 'fa fa-pagelines', class: 'has-arrow', label: 'posts', labelClass: '', extralink: false, submenu: [
      { path: '/posts', title: 'Listing', icon: 'fa fa-pagelines', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
      // { path: '/posts/create', title: 'New post', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/newsletter/contact', title: 'Newsletter', icon: 'fa fa-envelope', class: 'has-arrow', label: 'newsletter', labelClass: '', extralink: false, submenu: [
      { path: '/newsletter/contacts', title: 'Contacts', icon: 'fa fa-users', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/newsletter/sendmail', title: 'Sendmail', icon: 'fa fa-envelope', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/complaints', title: 'Complaints', icon: 'fa fa-comment', class: 'has-arrow', label: 'complaints', labelClass: '', extralink: false, submenu: [
      { path: '/complaints', title: 'Listing', icon: 'fa fa-comment', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/faqs', title: 'FAQs', icon: 'fa fa-comment', class: 'has-arrow', label: 'faqs', labelClass: '', extralink: false, submenu: [
      { path: '/faqs', title: 'Questions', icon: 'fa fa-comment', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/requestPayout', title: 'Requests Payout', icon: 'fa fa-dollar', class: 'has-arrow', label: 'requestPayout', labelClass: '', extralink: false, submenu: [
      { path: '/requestPayout', title: 'Listing', icon: 'fa fa-dollar', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/report', title: 'Report', icon: 'fa fa-flag', class: 'has-arrow', label: 'report', labelClass: '', extralink: false, submenu: [
      { path: '/report/sales', title: 'Sales', icon: 'fa fa-shopping-cart', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/report/payout', title: 'Payout', icon: 'fa fa-dollar', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/configs', title: 'Config', icon: 'fa fa-cogs', class: '', label: 'configs', labelClass: '', extralink: false, submenu: [
      { path: '/configs', title: 'Config', icon: 'fa fa-cogs', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      {
        path: '/i18n/languages', title: 'I18n', icon: 'fa fa-flag', class: '', label: '', labelClass: '', extralink: false, submenu: [
          { path: '/i18n/languages', title: 'Languages', icon: 'fa fa-flag', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
          { path: '/i18n/text', title: 'Text', icon: 'fa fa-font', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
        ]
      }
    ]
  },
  {
    path: '/packages', title: 'Packages', icon: 'fa fa-product-hunt', class: '', label: '', labelClass: '', extralink: false, submenu: [
      { path: '/packages', title: 'Packages', icon: 'fa fa-product-hunt', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/packages/create', title: 'Package Create', icon: 'fa fa-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/packages/history', title: 'Package Payment History', icon: 'fa fa-dollar', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  }
];
