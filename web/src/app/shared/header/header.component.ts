import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService, SystemService, CartService } from '../services';
import { NgbModal, NgbModalOptions, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ComplainComponent } from '../complain/complain.component';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';




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

  


  constructor(private router: Router, private authService: AuthService, private systemService: SystemService,
    private modalService: NgbModal, private translate: TranslateService, private cartService: CartService,
    config: NgbModalConfig, private toasty: ToastyService, auth: AuthService,) {
    this.userLoadedSubscription = authService.userLoaded$.subscribe(data => this.currentUser = data);
    this.cartLoadedSubscription = cartService.cartChanged$.subscribe(data => this.cart = data);
    this.systemService.configs().then(resp => {
      this.isLoaded = true;
      this.languages = resp.i18n.languages;
      this.flag = `/assets/images/flags/${this.userLang}.svg`;
      this.appConfig = resp;
    });
    config.backdrop = 'static';
    config.keyboard = false;
    this.Auth = auth;
  }

  ngOnInit() {
    this.cart = this.cartService.get();
    if (this.authService.isLoggedin()) {
      this.authService.getCurrentUser().then(resp => this.currentUser = resp);
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.userLoadedSubscription.unsubscribe();
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
        console.log("TESTING");
        window.location.reload();
        this.router.navigate(['/']);
      }
    })
      .catch(() => {
        this.toasty.error(this.translate.instant('Your account is not activated or register. Please recheck again or contact to our admin to resolve it.'));
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

  keyPress(event: any) {
    if (event.charCode === 13) {
      this.search();
    }
  }

  search() {
    if (!this.q.trim()) {
      return;
    }

    // nativate to search page
    this.router.navigate(['/products/search'], {
      queryParams: { q: this.q }
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  open_sign_up(content) {
    this.modalService.open(content);
  }
}
