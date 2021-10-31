import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.submitUser();
  }

  submitUser() {
    const user: User = {
      userName:'Johny English',
      role: 'Agent'
    }

    this.userService.saveUser(user);
  }

  getUser() {
    this.userService.getUser('Johny English').subscribe((data)=>{
      console.log(data);
    });
  }

}
