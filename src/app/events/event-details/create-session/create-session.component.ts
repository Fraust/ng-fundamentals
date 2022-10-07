import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  name : FormControl =  new FormControl('');
  presenter : FormControl = new FormControl('');
  duration : FormControl =  new FormControl('');
  level : FormControl =  new FormControl('');
  abstract : FormControl =  new FormControl('');

  @Output() cancelClick = new EventEmitter()
  @Output() savenNewSession = new EventEmitter()

  newSessionForm = new FormGroup({
    name : this.name,
    presenter : this.presenter,
    duration : this.duration,
    level : this.level,
    abstract : this.abstract
  })

  constructor() { }

  ngOnInit(): void {
    this.newSessionForm = new FormGroup({
      name : new FormControl('', Validators.required),
      presenter : new FormControl('', Validators.required),
      duration : new FormControl('', Validators.required),
      level : new FormControl('', Validators.required),
      abstract : new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo','nbar'])])
    })
  }

  saveSession(formsValues : any){
    let session: ISession = {
      id : 0,
      name : formsValues.name,
      presenter : formsValues.presenter,
      duration : formsValues.duration,
      level : formsValues.level,
      abstract : formsValues.abstract,
      voters : []
    }
    this.savenNewSession.emit(session);
  }

  cancel(){
    this.cancelClick.emit();
  }

  private restrictedWords(words : string[]) {
    return (control: FormControl): {[key:string]:any} => {
      if(!words) return {'undefined':''}

      var invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null)

      return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : {'undefined':''}
    }
  }

}
