import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { userInfo } from '../model/user-info';

@Injectable()

export class Auth {

    message = null;
    user = {} as userInfo;

    constructor( private auth: AngularFireAuth, private db: AngularFireDatabase) {}

    login (email, password) {
        return new Promise ( resolve => {
            this.auth.auth.signInWithEmailAndPassword(email, password)
            .then (data => {
                if(this.auth.auth.currentUser.emailVerified == true) {
                    setTimeout ( () => {
                        resolve(true)
                    }, 2000 );
                }
                else if (this.auth.auth.currentUser.emailVerified == false) {
                    resolve(false);
                    this.passErrorMessage("Please verify your email address")
                }
            })
            .catch (e => {
                this.passErrorMessage(e);
                setTimeout ( () => {
                    resolve(false)
                }, 2000 );
            })
        });
    }

    printErrorMessage() {
        return this.message;
    }

    passErrorMessage(message) {
        this.message = message;
    }

    register(user) {

        this.user = user;
        
        return new Promise ( resolve => {
            this.auth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
            
            .then ( data => {

                this.auth.auth.currentUser.sendEmailVerification()
                .then ( data => {
                    setTimeout ( () => {
                        resolve(true)
                    }, 2000 );
                } )
                .catch ( e => {
                        resolve(false)
                        this.passErrorMessage(e);
                })

                this.user.userID = data.user.uid;
                console.log('user uid is: ', this.user.userID)
                this.db.database.ref(`users/${this.user.userID}`).set({
                uid: this.user.userID,
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                email: this.user.email
                })

            })       
            .catch ( e => {
                this.passErrorMessage(e);
                setTimeout ( () => {
                    resolve(false)
                }, 2000 );
            })

        });

    }

    forgot(email) {
        
        return new Promise ( resolve => {
            this.auth.auth.sendPasswordResetEmail(email)
            .then ( data => {
                setTimeout ( () => {
                    resolve(true)
                }, 2000 );
            } )
            .catch ( e => {
                setTimeout ( () => {
                    resolve(false)
                }, 2000 );
                this.passErrorMessage(e);
            } )
        } )
    }

}