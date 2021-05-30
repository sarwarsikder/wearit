import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService, SystemService, CartService, UtilService } from '../services';
import { NgbModal, NgbModalOptions, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ComplainComponent } from '../complain/complain.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';
import { ProductService } from '../../product/services';
import { WishlistService } from '../../profile/services/wishlist.service';
import { WishListService } from '../services/wish-list.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentUser: any;
  public isShowed: any = false;
  private userLoadedSubscription: Subscription;
  public appConfig: any = {};
  public userLang: any = 'en';
  public languages: any = [];
  public flag: any = `/assets/images/flags/en.svg`;
  public isLoaded: any = false;
  private cartLoadedSubscription: Subscription;
  public cart: any = [];
  public q: string = '';

  private Auth: AuthService;
  public credentials = {
    email: '',
    password: ''
  };

  public dialCode: any = '';
  public account: any = {
    email: '',
    password: '',
    phoneNumber: '',
    name: ''
  };

  public name: any = {
    firstName: '',
    lastName: ''
  };
  public input: any = {
    rePassword: ''
  };

  public submitted: boolean = false;
  public modalReference: any; 
  public modalReferenceSignUp: any; 

  keyword = 'name';
  public search_results = [];
  public product;

  public items: any = [];
  public page: number = 1;
  public itemsPerPage: number = 1;
  public searchFields: any = {};

  private wishListLoadedSubscription: Subscription;
  public whishListJson: any = [];

  public showCart = false;
  public cartTotal = 0.00;


  constructor(private router: Router, private authService: AuthService, private systemService: SystemService, private utilService: UtilService,
    private modalService: NgbModal, private translate: TranslateService, private cartService: CartService,private wishlistService: WishlistService,
    config: NgbModalConfig, private toasty: ToastyService, auth: AuthService,private productService: ProductService,private wishListService: WishListService) {

    this.systemService.configs().then(resp => {
      this.isLoaded = true;
      this.languages = resp.i18n.languages;
      this.flag = `/assets/images/flags/${this.userLang}.svg`;
      this.appConfig = resp;
    });
    config.backdrop = 'static';
    config.keyboard = false;
    this.Auth = auth;

    this.userLoadedSubscription = authService.userLoaded$.subscribe(data => this.currentUser = data);
    this.cartLoadedSubscription = cartService.cartChanged$.subscribe(
        data => {
          this.cart = data;
          this.updateCartTotal();
        });
    this.wishListLoadedSubscription = wishListService.wishListChanged$.subscribe(data => this.whishListJson = data);

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.showCart = false;
      }
    });
  }

  ngOnInit() {
    this.cart = this.cartService.get();
    this.updateCartTotal();
    this.whishListJson = this.wishListService.get();
    if (this.authService.isLoggedin()) {
      this.authService.getCurrentUser().then(resp => this.currentUser = resp);
      this.whishList();
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.userLoadedSubscription.unsubscribe();
    this.cartLoadedSubscription.unsubscribe();
    this.wishListLoadedSubscription.unsubscribe();
  }

  selectDial(event) {
    this.dialCode = event;
  }

  public onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  whishList() {
    this.utilService.setLoading(true);
    const params = Object.assign({
      page: this.page,
      take: this.itemsPerPage
    }, this.searchFields);

    this.wishlistService.list(params).then((res) => {
      this.utilService.setLoading(false);
    }).catch(err => {
      this.toasty.error(this.translate.instant('Something went wrong, please try again!'));
      this.utilService.setLoading(false);
    });
  }

  sign_in(frm: any) {
    this.submitted = true;
    if (frm.invalid) {
      return;
    }
    
    this.Auth.login(this.credentials).then(() => {
      const redirectUrl = sessionStorage.getItem('redirectUrl');
      if (redirectUrl) {
        sessionStorage.removeItem('redirectUrl');
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
      this.modalReference.dismiss();
    })
      .catch(() => {
        this.toasty.error(this.translate.instant('Your account is not activated or register. Please recheck again or contact to our admin to resolve it.'));
      });
  }

  public submit(frm: any) {
    this.submitted = true;

    if (frm.invalid) {
      return;
    }

    if (this.account.password !== this.input.rePassword) {
      return this.toasty.error(this.translate.instant('Confirm password doest not match'));
    }

    this.account.name = this.name.firstName + " " + this.name.lastName;
    this.account.phoneNumber = `${this.dialCode}${this.account.phoneNumber}`;

    this.Auth.register(this.account)
      .then(resp => {
        this.toasty.success(this.translate.instant('Your account has been created, please verify your email then login'));
        this.router.navigate(['/auth/login']);
      })
      .catch(err => {
        this.account = {
          email: '',
          password: '',
          phoneNumber: '',
          name: ''
        };
        this.name = {
          firstName: '',
          lastName: ''
        };
        this.input = {
          rePassword: ''
        };
        this.toasty.error(this.translate.instant(err.data.data.message));
      });
  }


  logout() {
    this.authService.removeToken();
    window.location.href = '/';
  }

  dropdown() {
    this.isShowed = !this.isShowed;
  }

  complain() {
    const ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    this.modalService.open(ComplainComponent, ngbModalOptions);
  }

  changeLang(lang: any) {
    // this.systemService.setUserLang(lang);
    this.translate.use(lang);
    this.userLang = lang;
    this.flag = `/assets/images/flags/${this.userLang}.svg`;
  }

  // keyPress(event: any) {
  //   if (event.charCode === 13) {
  //     this.search();
  //   }else{
  //     this.search();
  //   }
  // }

  // search() {
  //   if (!this.q.trim()) {
  //     return;
  //   }

  //   // nativate to search page
  //   this.router.navigate(['/products/search'], {
  //     queryParams: { q: this.q }
  //   });
  // }

  keyPress(event: any) {
    if(typeof(this.q) == 'object'){
      console.log(typeof(this.q)+ "OBJECT");
      this.product = this.q;
      this.search(this.product.name);
    }else{
      console.log(typeof(this.q)+ "STRING");
      this.search(this.q);
    }


    // if (event.charCode === 13) {
    //   this.search(event);
    // }else{
    //   this.search(event);
    // }
  }

  search(search: string) {
    console.log("SEACH FAC");
    console.log(search);

    if (!this.search) {
      return;
    }

    // nativate to search page
    this.router.navigate(['/products/search'], {
      queryParams: { q: search }
    });
  }

  selectEvent(item) {
    // do something with selected item
    if (!item) {
      return;
    }
    // nativate to search page
    this.router.navigate(['/products/search'], {
      queryParams: { q: item.name }
    });
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log(search);

    this.router.navigate(['/products/search'], {
      queryParams: { q: search }
    });

    this.productService.search({ name: search }).then((res) => {
      if (res) {
        this.search_results  = res.data.items;
      }
    })
  }

  onFocused(e) {
    // do something
  }


  open(content) {
    this.modalService.dismissAll();
    this.modalReference = this.modalService.open(content,  { size: 'lg' });
  }

  open_sign_up(content) {
    this.modalService.dismissAll();
    this.modalReferenceSignUp = this.modalService.open(content,  { size: 'lg' });
  }

  removeAllItemFromCart() {
    this.cartService.clean();
  }

  removeItemFromCart(index: number) {
    this.cartService.remove(this.cart[index]);
  }

  private updateCartTotal() {
    this.cartTotal = 0.0;
    if (this.cart.length === 0) {
      return;
    }
    this.cart.forEach(item => {
      if (item.product.discounted) {
        this.cartTotal += item.quantity * item.product.salePrice;
      } else {
        this.cartTotal += item.quantity * item.product.price;
      }
    });
  }

}
