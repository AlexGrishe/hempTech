import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ProductDetailsComponent } from './details/product-details/product-details.component';
import { ProductListComponent } from './details/product-list/product-list.component';
import { ProductAlertsComponent } from './details/product-alerts/product-alerts.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './details/reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { CategoryComponent } from './category/category.component';
import { NutritionComponent } from './category/nutrition/nutrition.component';
import { EquipmentComponent } from './category/equipment/equipment.component';
import { SeedsComponent } from './category/seeds/seeds.component';
import { PartnersComponent } from './category/partners/partners.component';
import { HelpfulComponent } from './category/helpful/helpful.component';
import { CoconutComponent } from './category/nutrition/coconut/coconut.component';
import { LandComponent } from './category/nutrition/land/land.component';
import { StimulantsComponent } from './category/nutrition/stimulants/stimulants.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { NutritionCategoryComponent } from './category/nutrition/nutrition-category/nutrition-category.component';
import { NutritionCardsComponent } from './category/nutrition/nutrition-cards/nutrition-cards.component';
import { LightingComponent } from './category/equipment/lighting/lighting.component';
import { PotsComponent } from './category/equipment/pots/pots.component';
import { MeasuringInstrumentsComponent } from './category/equipment/measuring-instruments/measuring-instruments.component';
import { ReflectiveElementsComponent } from './category/equipment/reflective-elements/reflective-elements.component';
import { DriverComponent } from './category/equipment/driver/driver.component';
import { AirComponent } from './category/equipment/air/air.component';
import { OtherComponent } from './category/equipment/other/other.component';
import { EquipmentCardsComponent } from './category/equipment/equipment-cards/equipment-cards.component';
import { EquipmentCategoryComponent } from './category/equipment/equipment-category/equipment-category.component';
import { SideMenuNutritionComponent } from './category/nutrition/side-menu-nutrition/side-menu-nutrition.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { SideMenuEquipmentComponent } from './category/equipment/side-menu-equipment/side-menu-equipment.component';
import { PushkaComponent } from './category/equipment/lighting/pushka/pushka.component';
import { QbComponent } from './category/equipment/lighting/qb/qb.component';
import { X1proComponent } from './category/equipment/lighting/x1pro/x1pro.component';
import { LightingCardsComponent } from './category/equipment/lighting/lighting-cards/lighting-cards.component';
import { LightingCategoryComponent } from './category/equipment/lighting/lighting-category/lighting-category.component';
import { SideMenuLightingComponent } from './category/equipment/lighting/side-menu-lighting/side-menu-lighting.component';
import { SeedsCardsComponent } from './category/seeds/seeds-cards/seeds-cards.component';
import { AutofemComponent } from './category/seeds/autofem/autofem.component';
import { FemComponent } from './category/seeds/fem/fem.component';
import { RegComponent } from './category/seeds/reg/reg.component';
import { SideMenuSeedsComponent } from './category/seeds/side-menu-seeds/side-menu-seeds.component';
import { SeedsCategoryComponent } from './category/seeds/seeds-category/seeds-category.component';
import { FastGrowingComponent } from './category/seeds/fast-growing/fast-growing.component';
import { FaintlySmellingComponent } from './category/seeds/faintly-smelling/faintly-smelling.component';
import { FruitfulComponent } from './category/seeds/fruitful/fruitful.component';
import { PowerfulComponent } from './category/seeds/powerful/powerful.component';
import { HealingComponent } from './category/seeds/healing/healing.component';
import { SideMenuPartnersComponent } from './category/partners/side-menu-partners/side-menu-partners.component';
import { PartnersCardsComponent } from './category/partners/partners-cards/partners-cards.component';
import { PartnersCategoryComponent } from './category/partners/partners-category/partners-category.component';
import { SmokingAccessoriesComponent } from './category/partners/smoking-accessories/smoking-accessories.component';
import { ClothesComponent } from './category/partners/clothes/clothes.component';
import { FoodComponent } from './category/partners/food/food.component';
import { CosmeticsComponent } from './category/partners/cosmetics/cosmetics.component';
import { EventsComponent } from './category/partners/events/events.component';
import { VideoComponent } from './category/helpful/video/video.component';
import { ReportsComponent } from './category/helpful/reports/reports.component';
import { NewsComponent } from './category/helpful/news/news.component';
import { KitchenComponent } from './category/helpful/kitchen/kitchen.component';
import { ArticlesComponent } from './category/helpful/articles/articles.component';
import { SideMenuHelpfulComponent } from './category/helpful/side-menu-helpful/side-menu-helpful.component';
import { HelpfulCardsComponent } from './category/helpful/helpful-cards/helpful-cards.component';
import { HelpfulCategoryComponent } from './category/helpful/helpful-category/helpful-category.component';
import { VideoModule } from './category/helpful/video/video/video.module';
import { DialogPreOrderComponent } from './dialog-pre-order/dialog-pre-order.component';
import { DialogPreOrderDialogComponent } from './dialog-pre-order/dialog-pre-order-dialog/dialog-pre-order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogProductAvailabilityComponent } from './dialog-product-availability/dialog-product-availability.component';
import { DialogProductAvailabilityDialogComponent } from './dialog-product-availability/dialog-product-availability-dialog/dialog-product-availability-dialog.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SubstrateComponent } from './category/nutrition/substrate/substrate.component';
import { CustomersHostComponent } from './customers-host/customers-host.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { MatBadgeModule } from '@angular/material/badge';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductsSearchPipe } from './products-search.pipe';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'home',
    outlet: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'nutrition',
    component: NutritionComponent,
    children: [
      {
        path: '',
        component: NutritionCardsComponent
      },
      {
        path: 'coconut',
        component: CoconutComponent
      },
      {
        path: 'land',
        component: LandComponent
      },
      {
        path: 'stimulants',
        component: StimulantsComponent
      },
      {
        path: 'substrate',
        component: SubstrateComponent
      },
      {
        path: '',
        component: NutritionCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenunutrition',
        component: SideMenuNutritionComponent
      },
      {
        path: ':id',
        outlet: 'sidemenunutrition',
        component: SideMenuNutritionComponent
      },
    ]
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
    children: [
      {
        path: '',
        component: EquipmentCardsComponent
      },
      {
        path: 'lighting',
        component: LightingComponent,
        children: [
          {
            path: '',
            component: LightingCardsComponent
          },
          {
            path: 'pushka',
            component: PushkaComponent
          },
          {
            path: 'qb',
            component: QbComponent
          },
          {
            path: 'x1pro',
            component: X1proComponent
          },
          {
            path: '',
            component: LightingCategoryComponent,
          },
          {
            path: '',
            outlet: 'sidemenulighting',
            component: SideMenuLightingComponent
          },
          {
            path: 'sidemenulighting',
            component: SideMenuLightingComponent
          },
          {
            path: ':id',
            outlet: 'sidemenulighting',
            component: SideMenuLightingComponent
          },
        ]
      },
      {
        path: 'pots',
        component: PotsComponent,
      },
      {
        path: 'measuring-instruments',
        component: MeasuringInstrumentsComponent
      },
      {
        path: 'reflective-elements',
        component: ReflectiveElementsComponent,
      },
      {
        path: 'driver',
        component: DriverComponent
      },
      {
        path: 'air',
        component: AirComponent
      },
      {
        path: 'other',
        component: OtherComponent
      },
      {
        path: '',
        component: EquipmentCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenuequipment',
        component: SideMenuEquipmentComponent
      },
      {
        path: ':id',
        outlet: 'sidemenuequipment',
        component: SideMenuEquipmentComponent
      },
    ]
  },
  {
    path: 'seeds',
    component: SeedsComponent,
    children: [
      {
        path: '',
        component: SeedsCardsComponent
      },
      {
        path: 'auto-fem',
        component: AutofemComponent,
      },
      {
        path: 'fem',
        component: FemComponent,
      },
      {
        path: 'regular',
        component: RegComponent
      },
      {
        path: 'fast-growing',
        component: FastGrowingComponent
      },
      {
        path: 'faintly-smelling',
        component: FaintlySmellingComponent
      },
      {
        path: 'fruitful',
        component: FruitfulComponent
      },
      {
        path: 'powerful',
        component: PowerfulComponent
      },
      {
        path: 'healing',
        component: HealingComponent
      },
      {
        path: '',
        component: SeedsCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenuseeds',
        component: SideMenuSeedsComponent
      },
      {
        path: ':id',
        outlet: 'sidemenuseeds',
        component: SideMenuSeedsComponent
      },
    ]
  },
  {
    path: 'partners',
    component: PartnersComponent,
    children: [
      {
        path: '',
        component: PartnersCardsComponent
      },
      {
        path: 'smoking-accessories',
        component: SmokingAccessoriesComponent,
      },
      {
        path: 'clothes',
        component: ClothesComponent,
      },
      {
        path: 'food',
        component: FoodComponent
      },
      {
        path: 'cosmetics',
        component: CosmeticsComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: '',
        component: PartnersCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenupartners',
        component: SideMenuPartnersComponent
      },
      {
        path: ':id',
        outlet: 'sidemenupartners',
        component: SideMenuPartnersComponent
      },
    ]
  },
  {
    path: 'helpful',
    component: HelpfulComponent,
    children: [
      {
        path: '',
        component: HelpfulCardsComponent
      },
      {
        path: 'video',
        component: VideoComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'kitchen',
        component: KitchenComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: '',
        component: HelpfulCategoryComponent
      },
      {
        path: '',
        outlet: 'sidemenuhelpful',
        component: SideMenuHelpfulComponent
      },
      {
        path: ':id',
        outlet: 'sidemenuhelpful',
        component: SideMenuHelpfulComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ReviewsComponent,
    FooterComponent,
    CategoryComponent,
    NutritionComponent,
    EquipmentComponent,
    SeedsComponent,
    PartnersComponent,
    HelpfulComponent,
    CoconutComponent,
    LandComponent,
    StimulantsComponent,
    SideMenuComponent,
    HomeComponent,
    NutritionCategoryComponent,
    NutritionCardsComponent,
    LightingComponent,
    PotsComponent,
    MeasuringInstrumentsComponent,
    ReflectiveElementsComponent,
    DriverComponent,
    AirComponent,
    OtherComponent,
    EquipmentCardsComponent,
    EquipmentCategoryComponent,
    SideMenuNutritionComponent,
    CartComponent,
    ShippingComponent,
    FavoriteComponent,
    SideMenuEquipmentComponent,
    PushkaComponent,
    QbComponent,
    X1proComponent,
    LightingCardsComponent,
    LightingCategoryComponent,
    SideMenuLightingComponent,
    SeedsCardsComponent,
    AutofemComponent,
    FemComponent,
    RegComponent,
    SideMenuSeedsComponent,
    SeedsCategoryComponent,
    FastGrowingComponent,
    FaintlySmellingComponent,
    FruitfulComponent,
    PowerfulComponent,
    HealingComponent,
    SideMenuPartnersComponent,
    PartnersCardsComponent,
    PartnersCategoryComponent,
    SmokingAccessoriesComponent,
    ClothesComponent,
    FoodComponent,
    CosmeticsComponent,
    EventsComponent,
    // VideoComponent,
    ReportsComponent,
    NewsComponent,
    KitchenComponent,
    ArticlesComponent,
    SideMenuHelpfulComponent,
    HelpfulCardsComponent,
    HelpfulCategoryComponent,
    DialogPreOrderComponent,
    DialogPreOrderDialogComponent,
    DialogProductAvailabilityComponent,
    DialogProductAvailabilityDialogComponent,
    SubstrateComponent,
    CustomersHostComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    ProductsSearchPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    // MatProgressSpinnerModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyDmvwUuVc-DrBWpDhh4sPmlNCIAoVso_RU'}
    ),
    ReactiveFormsModule,
    VideoModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    NgImageFullscreenViewModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
