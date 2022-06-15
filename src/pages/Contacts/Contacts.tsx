import React from 'react';
import { Typography, Button } from '@/components';
import { getContacts } from '@/services/contactsService';
export const Contacts = () => {
  console.log(getContacts().then((res) => console.log(res.data[0])));
  return (
    <div>
      <Button>
        <Typography>Btn</Typography>
      </Button>
    </div>
  );
};

export default Contacts;
