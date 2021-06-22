import { Pipe, PipeTransform } from '@angular/core';

/*
 * show default cover photo if it is not provided
*/
@Pipe({
  name: 'mallBanner'
})
export class MallBannerPipe implements PipeTransform {
  transform(value: string): any {
    if (value) {
      return value;
    }

    return '/assets/images/mall-banner1.jpg';
  }
}
