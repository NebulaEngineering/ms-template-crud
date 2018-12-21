////////// ANGULAR //////////
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

////////// RXJS ///////////
import { map, mergeMap, tap } from 'rxjs/operators';
import { Subject, of} from 'rxjs';

//////////// ANGULAR MATERIAL ///////////
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatSnackBar
} from '@angular/material';

//////////// i18n ////////////
import {
  TranslateService
} from '@ngx-translate/core';
import { locale as english } from '../i18n/en';
import { locale as spanish } from '../i18n/es';
import { FuseTranslationLoaderService } from '../../../../core/services/translation-loader.service';

//////////// Other Services ////////////
import { KeycloakService } from 'keycloak-angular';
import { msnamecamelDetailService } from './msname-detail.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'msname',
  templateUrl: './msname-detail.component.html',
  styleUrls: ['./msname-detail.component.scss']
})
// tslint:disable-next-line:class-name
export class msnamecamelDetailComponent implements OnInit, OnDestroy {
  // Subject to unsubscribe
  private ngUnsubscribe = new Subject();

  pageType: string;

  msentitycamel: any;

  constructor(
    private translationLoader: FuseTranslationLoaderService,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private msnamecamelDetailservice: msnamecamelDetailService,
    private route: ActivatedRoute
  ) {
      this.translationLoader.loadTranslations(english, spanish);
  }


  ngOnInit() {
    this.route.params
    .pipe(
      map(params => params['id']),
      tap(id => console.log('El ID es ==> ', id) ),
      mergeMap(entityId => entityId !== 'new' ? this.msnamecamelDetailservice.getmsnamecamelentity$(entityId) : of(null)  ),
      tap((msentitycamel: any) => this.msentitycamel = msentitycamel),
      map((msentitycamel: any) => (msentitycamel && msentitycamel.id ) ? 'edit' : 'new' ),
      tap((pageType: string) => this.pageType = pageType )
    )
    .subscribe(() => {}, e => console.log(e), () => {});

  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
