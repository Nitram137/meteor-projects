import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export const App = () => (
  <div className='content'>
    <h1>Ye Old Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
