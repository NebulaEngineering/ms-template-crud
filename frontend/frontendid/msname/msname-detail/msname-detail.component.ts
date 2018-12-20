////////// ANGULAR //////////
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";

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
} from "rxjs/operators";

import { Subject, fromEvent, of, forkJoin, Observable, concat, combineLatest } from "rxjs";

//////////// ANGULAR MATERIAL ///////////
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatSnackBar
} from "@angular/material";

//////////// i18n ////////////
import {
  TranslateService
} from "@ngx-translate/core";
import { locale as english } from "../i18n/en";
import { locale as spanish } from "../i18n/es";
import { FuseTranslationLoaderService } from "../../../../core/services/translation-loader.service";

//////////// Other Services ////////////
import { KeycloakService } from "keycloak-angular";
import { msnamecamelDetailService } from './msname-detail.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'msname',
  templateUrl: './msname-detail.component.html',
  styleUrls: ['./msname-detail.component.scss']
})
export class msnamecamelDetailComponent implements OnInit, OnDestroy {
  //Subject to unsubscribe 
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
    private msnamecamelDetailservice: msnamecamelDetailService  
  ) {    
      this.translationLoader.loadTranslations(english, spanish);
  }
    

  ngOnInit() {
    this.pageType = this.msentitycamel.id ? 'edit' : 'new';

  }

  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
