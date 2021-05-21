import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MallDetailComponent } from './components/detail/detail.component';
import { MallResolver } from './resolvers/mall.resolver';
import { SearchResolver } from './resolvers/search.resolver';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    resolve: {
      search: SearchResolver
    }
  },
  {
    path: ':alias',
    component: MallDetailComponent,
    resolve: {
      shop: MallResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
