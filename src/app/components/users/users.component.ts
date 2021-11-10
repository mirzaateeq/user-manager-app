import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[] = [];
  searchForm: FormGroup;

  alertClosed = true;
  constructor(private userService: UserService, private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response)=>{
      this.usersList = response;
    });
  }

  onEdit(userName: string){
    this.router.navigate([`edit-user/${userName}`]);
  }
  onDelete(userName: string){
    this.userService.deleteUser(userName)
    .then(()=> { this.alertClosed = false;} )
    .catch(()=> { console.log('error deleting'); } );
  }

  search() {
    this.userService.getUsers().subscribe((response)=>{
      this.usersList = response.filter(user => {
        let keyword = this.searchForm.get('keyword')?.value.toLowerCase();
        
        return (user.userName.toLowerCase().match(keyword) || 
        user.role.toLowerCase().match(keyword));
      });
    });
  }

  searchReset() {
    this.searchForm.patchValue({keyword: ''});
    this.search();
  }

}
