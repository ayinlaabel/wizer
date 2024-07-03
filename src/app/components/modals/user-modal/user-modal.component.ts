import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser, IUserProps } from 'src/app/model/iuser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
})
export class UserModalComponent {
  @Input() showModal: any;
  @Output() isOpen = new EventEmitter<boolean>();
  @Output() userData = new EventEmitter<IUserProps>();
  @Input() editUser: any;
  user: IUserProps = {
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  constructor(private userService: UserService) {}

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes.editUser && this.editUser !== null) {
      console.log(this.editUser);
      this.userService.getUser(this.editUser.id).subscribe((res) => {
        this.user = res;
        console.log(res);
      });
      console.log(changes);
      // this.user = this.editUser;
      // this.commentService.
    } else {
      this.user = {
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      };
    }
  }
  closeModal() {
    this.isOpen.emit(false);
    this.user = {
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    };
  }

  handleSubmit(form: any) {
    this.userData.emit(this.user);
  }
}
