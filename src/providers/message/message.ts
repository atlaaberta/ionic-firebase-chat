import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


interface Message {
  name: String,
  text: String,
  createdAt: Date
}

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  private messages: Observable<Message[]>;
  private messagesCollection: AngularFirestoreCollection<Message>;

  constructor(private fs: AngularFirestore) {
    this.messagesCollection = this.fs.collection('messages', ref => ref.orderBy('createdAt'));
    this.messages = this.messagesCollection.valueChanges();
  }

  getAll() {
    // return this.messages.pipe(map(results => results.sort()));
    // console.log(this.messages);
    return this.messages;
  }

  addMessage(name: String, text: String) {
    this.messagesCollection.add({ name, text, createdAt: new Date() });
  }
}
