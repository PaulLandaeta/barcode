import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../models/user/user.model";

@Injectable()
export class UserService {

  private userListRef = this.db.list<User>("/User");

  constructor(private db: AngularFireDatabase) {}

  getTestList() {
    return this.userListRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  createUser(user: User) {
    return this.userListRef.push(user);
  }

  updateTest(test: User) {
    console.log(test);
    return this.userListRef.update(test.email, test);
  }

  getTestListByChild(childId) {
    return this.db
      .list("/test", ref => ref.orderByChild("childId").equalTo(childId))
      .valueChanges();
  }

  removeTest(test: User) {
    return this.userListRef.remove(test.email);
  }

}
