import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}, {sort: {createdAt: -1}}).fetch();
    });
    
    const removeContact = (event, _id) => {
      event.preventDefault();
      Meteor.call('contacts.remove', {contactId: _id });
    }

    return (
      <div>
        <div className="mt-10">
          <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Contact List
          </h3>
          <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            {contacts.map((person, personIdx) => (
              <li key={personIdx} className="flex items-center justify-between py-4 space-x-3">
                <div className="flex items-center flex-1 min-w-0 space-x-3">
                  <div className="flex-shrink-0">
                    <img className="w-10 h-10 rounded-full" src={person.imageUrl} alt="" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                    <p className="text-sm font-medium text-gray-500 truncate">{person.email}</p>
                  </div>
                  <div>
                    <a href="#" onClick={(e) => removeContact(e, person._id)} className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-grey-700 bg-white hover:bg-grey-50">Remove</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}