import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection"


Meteor.methods({
    'contacts.insert'({name, email, imageUrl, walletId}) {
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        check(walletId, String);
        if(!name) throw new Meteor.Error("Give me your name, so I can find you.")
        if(!walletId) throw new Meteor.Error("Give me your Wallet ID, this is a robbery!")
        return ContactsCollection.insert({name, email, imageUrl, walletId, createdAt: new Date()});
    },
    'contacts.remove'({ contactId }) {
        check(contactId, String);
        ContactsCollection.remove(contactId);
    },
    'contacts.archive'({ contactId }) {
        check(contactId, String);
        ContactsCollection.update({ _id: contactId }, { $set: {archived: true }});
    }
})
