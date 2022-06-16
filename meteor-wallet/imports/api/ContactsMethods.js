import { ContactsCollection } from "./ContactsCollection"


Meteor.methods({
    'contacts.insert'({name, email, imageUrl}) {
        if(!name) throw new Meteor.Error("Give me your name. I will take good care of it. Don't worry.")
        return ContactsCollection.insert({name, email, imageUrl});
    } 
})
