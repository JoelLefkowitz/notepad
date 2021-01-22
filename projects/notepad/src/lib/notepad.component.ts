import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  text: string = "";
  
  @Output() update = new EventEmitter<string>();
  @Output() submit = new EventEmitter<string>();
  
  @Input() width: number = 500;
  @Input() height: number = 200;
  @Input() submitButton: boolean = true;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  textUpdate($event: string) {
    this.text = $event;
    this.update.emit(this.text);
  }
  
  textSubmit() {
    this.submit.emit(this.text);
  }

}
