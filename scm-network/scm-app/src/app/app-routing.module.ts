/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CommodityTypeComponent } from './CommodityType/CommodityType.component';
import { CommodityComponent } from './Commodity/Commodity.component';
import { SupplyComponent } from './Supply/Supply.component';

import { OrganizationComponent } from './Organization/Organization.component';

import { SupplyTradeComponent } from './SupplyTrade/SupplyTrade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CommodityType', component: CommodityTypeComponent },
  { path: 'Commodity', component: CommodityComponent },
  { path: 'Supply', component: SupplyComponent },
  { path: 'Organization', component: OrganizationComponent },
  { path: 'SupplyTrade', component: SupplyTradeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
