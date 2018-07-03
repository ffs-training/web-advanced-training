import { Component } from '@angular/core';
import { User } from './user';
import { deserialize, serialize } from 'serializer.ts/Serializer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kid:';

  public constructor() {
    const json1: any = [
      {
        'id': 1,
        'firstName': 'Johny',
        'lastName': 'Cage',
        'age': 27
      },
      {
        'id': 2,
        'firstName': 'Ismoil',
        'lastName': 'Somoni',
        'age': 50
      },
      {
        'id': 3,
        'firstName': 'Luke',
        'lastName': 'Dacascos',
        'age': 12
      }
    ];

    const users: User[] = deserialize<User[]>(User, json1);

    users.forEach(user => {
      if ( user.isKid() )
      {
        this.title += user.firstName;
      }
    });

    const json2: any = serialize(users);
    if ( JSON.stringify(json1) === JSON.stringify(json2) ) {
      alert( 'same!!' );
    }
  }
}
