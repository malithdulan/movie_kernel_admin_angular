import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public firebase: AngularFireDatabase, public datePipe: DatePipe) { }

  movieList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    secondimgurl: new FormControl(''),
    mainimgurl: new FormControl(''),
    imdb: new FormControl(''),
    filmname: new FormControl('', Validators.required),
    searchname: new FormControl(''),
    bollywood: new FormControl(false),
    hollywood: new FormControl(false),
    kollywood: new FormControl(false),
    populer: new FormControl(false),
    superhero: new FormControl(false),
    director: new FormControl(''),
    runtime: new FormControl(''),
    actors: new FormControl(''),
    subcategory: new FormControl(''),
    maincategory: new FormControl(''),
    b720p: new FormControl(''),
    b1080p: new FormControl(''),
    w720p: new FormControl(''),
    w1080p: new FormControl(''),
    sb720p: new FormControl(''),
    sb1080p: new FormControl(''),
    sw720p: new FormControl(''),
    sw1080p: new FormControl(''),
    mb720p: new FormControl(''),
    mb1080p: new FormControl(''),
    mw720p: new FormControl(''),
    mw1080p: new FormControl(''),
    smb720p: new FormControl(''),
    smb1080p: new FormControl(''),
    smw720p: new FormControl(''),
    smw1080p: new FormControl(''),
    cam: new FormControl(''),
    uploaddate: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      secondimgurl: '',
      mainimgurl: '',
      imdb: '',
      filmname: '',
      searchname: '',
      bollywood: false,
      hollywood: false,
      kollywood: false,
      populer: false,
      superhero: false,
      director: '',
      runtime: '',
      actors: '',
      subcategory: '',
      maincategory: '',
      b720p: '',
      b1080p: '',
      w720p: '',
      w1080p: '',
      sb720p: '',
      sb1080p: '',
      sw720p: '',
      sw1080p: '',
      mb720p: '',
      mb1080p: '',
      mw720p: '',
      mw1080p: '',
      smb720p: '',
      smb1080p: '',
      smw720p: '',
      smw1080p: '',
      cam: '',
      uploaddate: ''
    });
  }


  getEmployees() {
    this.movieList = this.firebase.list('movies');
    return this.movieList.snapshotChanges();
  }

  insertEmployee(movies) {
    this.movieList.push({
        secondimgurl: movies.secondimgurl,
        mainimgurl: movies.mainimgurl,
        imdb: movies.imdb,
        filmname: movies.filmname,
        searchname: movies.searchname,
        bollywood: movies.bollywood,
        hollywood: movies.hollywood,
        kollywood: movies.kollywood,
        populer: movies.populer,
        superhero: movies.superhero,
        director: movies.director,
        runtime: movies.runtime,
        actors: movies.actors,
        subcategory: movies.subcategory,
        maincategory: movies.maincategory,
        b720p: movies.b720p,
        b1080p: movies.b1080p,
        w720p: movies.w720p,
        w1080p: movies.w1080p,
        sb720p: movies.sb720p,
        sb1080p: movies.sb1080p,
        sw720p: movies.sw720p,
        sw1080p: movies.sw1080p,
        mb720p: movies.mb720p,
        mb1080p: movies.mb1080p,
        mw720p: movies.mw720p,
        mw1080p: movies.mw1080p,
        smb720p: movies.smb720p,
        smb1080p: movies.smb1080p,
        smw720p: movies.smw720p,
        smw1080p: movies.smw1080p,
        cam: movies.cam,
        uploaddate: movies.uploaddate == "" ? "" : this.datePipe.transform(movies.uploaddate, 'yyyy-MM-dd')
    });
  }

  updateEmployee(movies) {
    this.movieList.update(movies.$key,
      {
        secondimgurl: movies.secondimgurl,
        mainimgurl: movies.mainimgurl,
        imdb: movies.imdb,
        filmname: movies.filmname,
        searchname: movies.searchname,
        bollywood: movies.bollywood,
        hollywood: movies.hollywood,
        kollywood: movies.kollywood,
        populer: movies.populer,
        superhero: movies.superhero,
        director: movies.director,
        runtime: movies.runtime,
        actors: movies.actors,
        subcategory: movies.subcategory,
        maincategory: movies.maincategory,
        b720p: movies.b720p,
        b1080p: movies.b1080p,
        w720p: movies.w720p,
        w1080p: movies.w1080p,
        sb720p: movies.sb720p,
        sb1080p: movies.sb1080p,
        sw720p: movies.sw720p,
        sw1080p: movies.sw1080p,
        mb720p: movies.mb720p,
        mb1080p: movies.mb1080p,
        mw720p: movies.mw720p,
        mw1080p: movies.mw1080p,
        smb720p: movies.smb720p,
        smb1080p: movies.smb1080p,
        smw720p: movies.smw720p,
        smw1080p: movies.smw1080p,
        cam: movies.cam,
        uploaddate: movies.uploaddate == "" ? "" : this.datePipe.transform(movies.uploaddate, 'yyyy-MM-dd')
      });
  }

  deleteEmployee($key: string) {
    this.movieList.remove($key);
  }

  populateForm(movies) {
    if(!movies.sb720p){
      movies.sb720p = null;
    }
    if(!movies.sb1080p){
      movies.sb1080p = null;
    }
    if(!movies.sw720p){
      movies.sw720p = null;
    }
    if(!movies.sw1080p){
      movies.sw1080p = null;
    }

    if(!movies.mb720p){
      movies.mb720p = null;
    }
    if(!movies.mb1080p){
      movies.mb1080p = null;
    }
    if(!movies.mw720p){
      movies.mw720p = null;
    }
    if(!movies.mw1080p){
      movies.mw1080p = null;
    }

    if(!movies.smb720p){
      movies.smb720p = null;
    }
    if(!movies.smb1080p){
      movies.smb1080p = null;
    }
    if(!movies.smw720p){
      movies.smw720p = null;
    }
    if(!movies.smw1080p){
      movies.smw1080p = null;
    }

    this.form.setValue(_.omit(movies));
  }
}
