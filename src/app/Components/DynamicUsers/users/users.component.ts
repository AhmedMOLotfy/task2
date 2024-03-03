import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { DynamicDataService } from 'src/app/services/dynamic-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  allUsers: IUser[] = [];

  constructor(private dynamicDat: DynamicDataService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dynamicDat.getAllUser().subscribe((d: IUser[]) => {
      this.allUsers = d
    })
  }

  deleteUser(id: number) {
    this.dynamicDat.deleteUserById(id).subscribe(() => {
      this.getUsers();
    });
  }

  goToAdd() {
    this.router.navigate(['/addUser'])
  }


}
