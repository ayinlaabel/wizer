import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser, IUserProps } from '../model/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  tableHeader: string[] = [
    'name',
    'username',
    'email',
    'address',
    'phone',
    'company',
  ];
  tableData: IUser[] = [];
  showModal: boolean = false;
  editUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      console.log(users);
      users.forEach((user: IUserProps) => {
        this.tableData.push({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address:
            user.address.suite +
            ', ' +
            user.address.street +
            ', ' +
            user.address.city,
          company: user.company.name,
          phone: user.phone,
        });
      });
    });
  }

  openModal() {
    this.editUser = null;
    this.showModal = true;
  }

  openEditUser(e: any) {
    this.editUser = e;
    this.showModal = true;
  }
  closeModal(item: boolean) {
    this.showModal = false;
  }

  handleSubmit(userData: any) {
    if (this.editUser !== null) {
      this.updateUser(userData);
    } else {
      this.addNewUser(userData);
    }
  }

  addNewUser(payload: IUserProps) {
    this.userService.addNewUser(payload).subscribe((res) => {
      this.tableData.push({
        name: res.name,
        username: res.username,
        email: res.email,
        address:
          res.address.suite +
          ', ' +
          res.address.street +
          ', ' +
          res.address.city,
        company: res.company.name,
        phone: res.phone,
      });

      this.showModal = false;
    });
  }

  updateUser(payload: IUserProps) {
    this.userService.updateUser(payload?.id, payload).subscribe((res) => {
      const indexToUpdate = this.tableData.findIndex(
        (e) => e.id === payload.id
      );

      this.tableData[indexToUpdate] = {
        name: res.name,
        username: res.username,
        email: res.email,
        address:
          res.address.suite +
          ', ' +
          res.address.street +
          ', ' +
          res.address.city,
        company: res.company.name,
        phone: res.phone,
      };
      this.showModal = false;
    });
  }
}
