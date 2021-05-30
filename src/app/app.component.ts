import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('userNameRef', { static: false })
  // userNameRefElement!: ElementRef;  
  // @ViewChild('skillsSetRef', { static: false })
  // skillsSetRefElement!: ElementRef;  
  
  skillsSet: any;  
  skills: any =[];  
  
  
  onSkillsSetKeydown() {  
    if (this.skillsSet == "" || this.skillsSet == null) return;  
    this.skills.push(this.skillsSet);  
    this.skillsSet = "";  
    console.log(this.skills)
  }  
  
  dropSkill(index: any) {  
    this.skills.splice(index, 1); 
  }  
  
  
  
  // newOrCancel() {  
  //   this.isInsert = true;  
  //   this.userName = "";  
  //   this.skillsSet = "";  
  //   this.skills = [];  
  //   this.userNameRefElement.nativeElement.focus();  
  // }  
  
  // saveUser() {  
  //   var user: User = {  
  //     userName: "",  
  //     skillsSets: []  
  //   };  
  //   user.userName = this.userName;  
  //   user.skillsSets = this.skills;
  //   this.users.push(user);  
  //   this.newOrCancel();  
  // }  
  
  // skillsSetFocus() {  
  //   this.skillsSetRefElement.nativeElement.focus();  
  // }  
  
  // @HostListener('window:keydown', ['$event'])  
  // onKeyPress($event: KeyboardEvent) {  
  //   if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 83) {  
  //     $event.preventDefault();  
  //     if (this.skills.length > 0 && this.userName != null && this.userName != '' && this.isInsert == true) {  
  //       this.saveUser();  
  //     }  
  //   }  
  
  // }

  
}
