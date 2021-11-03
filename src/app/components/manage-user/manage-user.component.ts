import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute
} from '@angular/router';
import {
  User
} from 'src/app/core/user.model';
import {
  UserService
} from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  userForm: FormGroup;
  editUser: string;
  userDetails: User;
  alertSuccessClosed = true;
  alertErrorClosed = true;
  usersList: User[] = [];
  errorMessage = '';
  successMessage = '';

  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      role: [''],
      isActive: [true]
    });

    this.getUsers();

    this.route.params
      .subscribe(param => {
        this.editUser = param.userName;
        this.getUser(this.editUser);
      });
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.usersList = response;
    });
  }

  userNameUnique(): boolean {
    let userNameInput = this.userForm.controls['userName'].value;
    if (userNameInput.length > 0) {
      let userExists = this.usersList.filter((user) => {
        return user.userName === userNameInput;
      });

      if ( userExists && userExists.length > 0) {
        return false;
      }
    }
    return true;
  }

  submitUser() {
    if (this.userForm.valid) {
      if (this.editUser) {
        let updatedUser = this.userForm.value;
        updatedUser.userId = this.editUser;
        this.userService.updateUser(updatedUser)
        .then(()=> {this.showSuccess('User updated successfully.')})
        .catch(()=> {this.showError('Error updating user. Please try again.')});
      } else {
        if (this.userNameUnique()) {
          console.log(this.userForm.value);
          this.userService.addUser(this.userForm.value)
          .then(()=> {this.showSuccess('User created successfully.');})
          .catch(()=> {this.showError('Error creating user. Please try again.')});
        } else {
          this.showError('User Name already exists');
        }
      }
    }
  }

  showSuccess(message:string){
    this.alertSuccessClosed = false;
    this.successMessage = message;
  }
  showError(message: string){
    this.alertErrorClosed = false;
    this.errorMessage = message;
  }

  getUser(userName: string) {
    this.userService.getUser(userName).subscribe((response) => {
      if (response) {
        this.userDetails = response;
        this.populateForm();
      }
    });
  }

  populateForm() {
    this.userForm.patchValue(this.userDetails);
  }

  onCancel() {
    this.userForm.reset(this.userDetails);
    this.alertSuccessClosed = true;
    this.alertErrorClosed = true;
    this.errorMessage = '';
  }
}
