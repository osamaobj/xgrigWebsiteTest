import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TestProject';

  output = [];
  allUsersData: any;
  usersData: any;
  objectKeys = [];
  showDetailComponent: boolean = false;
  rowData: any;

  constructor() {

  }

  async ngOnInit() {

    await this.getData();

  }


  async getData() {

    try {

      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {

          this.allUsersData = json;
          this.usersData = json;
          this.objectKeys = Object.keys(this.allUsersData[0]);
          console.clear();
          console.log(this.allUsersData);

        })

    } catch (err) {
      console.error(err);
    }

  }

  onSearchEvent(event) {

    let value = event?.target?.value;

    this.usersData = this.allUsersData?.filter(x => {
      return String(x?.id)?.includes(value) ||
        x?.name?.includes(value) ||
        String(x?.phone).includes(value) ||
        x?.username?.includes(value) ||
        x?.website?.includes(value) ||
        x?.company?.name?.includes(value) ||
        x?.address?.city?.includes(value) ||
        x?.address?.suite?.includes(value) ||
        x?.address?.street?.includes(value)
        ;

    });

  }

  updateRow(rowData) {

    this.showDetailComponent = true;
    this.rowData = rowData;

  }

  deleteRow(index: number) {

    this.usersData.splice(index, 1);
    console.log(this.usersData);

  }


}

