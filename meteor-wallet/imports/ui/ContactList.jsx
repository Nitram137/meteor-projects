import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {useTracker} from "meteor/react-meteor-data";

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    });

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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}