import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Header } from "./Header";
import { Wallet } from './Wallet';

export const App = () => (
  <div>
    <Header />
    <div className='min-h-full'>
      <div className='max-w-4xl p-2 mx-auto'>
        <Wallet />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </div>
);
