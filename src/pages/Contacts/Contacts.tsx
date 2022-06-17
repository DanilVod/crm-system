import React from 'react';
import { Typography, Button, Avatar } from '@/components';
import { getContacts } from '@/services/contactsService';

export const Contacts = () => {
  console.log(getContacts().then((res) => console.log(res.data[0])));
  return (
    <div>
      <Avatar image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg" />
      <Button>
        <Typography>Btn</Typography>
      </Button>
    </div>
  );
};

export default Contacts;
