import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { DynamicDataService } from 'src/app/services/dynamic-data.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  userId: number = 0;
  user: IUser | undefined;

  constructor(private active: ActivatedRoute, private dynamicData: DynamicDataService) { }

  ngOnInit(): void {
    this.userId = Number(this.active.snapshot.paramMap.get("id"));
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.dynamicData.getUserById(this.userId).subscribe((user: IUser) => {
      this.user = user;
    });
  }

}
