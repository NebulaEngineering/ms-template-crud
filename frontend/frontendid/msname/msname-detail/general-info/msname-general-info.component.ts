////////// ANGULAR //////////
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

////////// RXJS ///////////
import {
  map,
  mergeMap,
  switchMap,
  toArray,
  filter,
  tap,
  takeUntil,
  startWith,
  debounceTime,
  distinctUntilChanged,
  take
} from 'rxjs/operators';

import { Subject, fromEvent, of, forkJoin, Observable, concat, combineLatest } from 'rxjs';

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
import { locale as english } from '../../i18n/en';
import { locale as spanish } from '../../i18n/es';
import { FuseTranslationLoaderService } from '../../../../../core/services/translation-loader.service';

//////////// Other Services ////////////
import { KeycloakService } from 'keycloak-angular';
import { msnamecamelDetailService } from '../msname-detail.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'msname-general-info',
  templateUrl: './msname-general-info.component.html',
  styleUrls: ['./msname-general-info.component.scss']
})
// tslint:disable-next-line:class-name
export class msnamecamelDetailGeneralInfoComponent implements OnInit, OnDestroy {
  // Subject to unsubscribe
  private ngUnsubscribe = new Subject();

  @Input('pageType') pageType: string;
  @Input('msentitycamel') msentitycamel: any;

  msentitycamelGeneralInfoForm: any;
  msentitycamelStateForm: any;

  constructor(
    private translationLoader: FuseTranslationLoaderService,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private msnamecamelDetailservice: msnamecamelDetailService
  ) {
      this.translationLoader.loadTranslations(english, spanish);
  }


  ngOnInit() {
    console.log('GENERAL INFO (ngOnInit) ==> ', this.pageType, this.msentitycamel);

    this.msentitycamelGeneralInfoForm = new FormGroup({
      username: new FormControl( this.msentitycamel ? this.msentitycamel.name : '' ),
      description: new FormControl( this.msentitycamel ? this.msentitycamel.escription : '' )
    });

    this.msentitycamelStateForm = new FormGroup({
      state: new FormControl(this.msentitycamel  ? this.msentitycamel.state : true )
    });


  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createmsentityPascal(){
    console.log(' [CREATE] Form value ==> ', this.msentitycamelGeneralInfoForm.getRawValue());
    const formValue = this.msentitycamelGeneralInfoForm.getRawValue();

    this.msnamecamelDetailservice.createmsnamecamelentitycamel$(formValue);
  }

  updatemsentityPascalGeneralInfo(){
    console.log(' [UPDATE] Form value ==> ', this.msentitycamelGeneralInfoForm.getRawValue());

  }
  onmsentityPascalStateChange(){
    console.log(this.msentitycamel);
    console.log(this.msentitycamelStateForm.getRawValue());
  }

}
