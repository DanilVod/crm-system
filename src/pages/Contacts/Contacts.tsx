import React from 'react';
import { Typography, Button, Avatar, Status } from '@/components';
import { getContacts } from '@/services/contactsService';
import ContactsIcon from '@/assets/contacts.svg?component';
import styled from 'styled-components';
import { StatusComponentProps } from '@/components/Status/Status';

const StyledStatusIcon = styled(ContactsIcon)`
  width: 15px;
  height: 15px;
  path {
    stroke: white;
  }
`;
const iconsConfig: Pick<StatusComponentProps, 'iconsConfig'>['iconsConfig'] = {
  Sent: <StyledStatusIcon />,
};
export const Contacts = () => {
  console.log(getContacts().then((res) => console.log(res.data[0])));
  return (
    <div>
      <Status iconsConfig={iconsConfig} type="Sent" />
      <Avatar image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg" />
      <Button>
        <Typography>Btn</Typography>
      </Button>
    </div>
  );
};

export default Contacts;
