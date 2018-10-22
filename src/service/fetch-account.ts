import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { userInfo } from '../model/user-info';

@Injectable()

export class fetch {

    user = {} as userInfo;

    constructor (private auth: AngularFireAuth, private db: AngularFireDatabase) {}

    fetchAccount() {

        var keyUid = this.auth.auth.currentUser.uid;
        this.db.database
                    .ref('users/')
                    .orderByKey()
                    .equalTo(keyUid)
                    .on("child_added", (snapshotChanges) => {
                        this.user.userID = snapshotChanges.val().uid;
                        this.user.firstname = snapshotChanges.val().firstname;
                        this.user.lastname = snapshotChanges.val().lastname;
            
                    })
        return this.user;

    }

}