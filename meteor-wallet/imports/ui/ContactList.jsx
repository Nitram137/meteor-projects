import React, { memo } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";

export const ContactList = () => {
  const isLoading = useSubscribe('contacts');
  const contacts = useFind(() => ContactsCollection.find({ archived: {$ne: true}}, {sort: {createdAt: -1}}));
  
  const archiveContact = (event, _id) => {
    event.preventDefault();
    Meteor.call('contacts.archive', {contactId: _id });
  }

  if(isLoading()) {
    return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Loading...</h3>
      </div>
    </div>
    )
  }

  const ContactItem = memo(({ contact }) => {
    return (
      <li className="flex items-center justify-between py-4 space-x-3">
      <div className="flex items-center flex-1 min-w-0 space-x-3">
        <div className="flex-shrink-0">
          <img className="w-10 h-10 rounded-full" src={contact.imageUrl} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
          <p className="text-sm font-medium text-gray-500 truncate">{contact.email}</p>
        </div>
        <div>
          <a
            href="#"
            onClick={(event) => archiveContact(event, contact._id)}
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
            data-test={"archive " + contact.name}
          >
            Archive
          </a>
        </div>
      </div>
    </li>
    )
  });

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Contact List
        </h3>
        <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  )
}