import React, { useEffect, useState } from "react";
import { Typography, Button, Avatar, Status, Placeholder } from "@/components";
import { getContacts } from "@/services/contactsService";
import ContactsIcon from "@/assets/contacts.svg?component";
import styled from "styled-components";
import { StatusComponentProps } from "@/components/Status/Status";

export const StyledStatusIcon = styled(ContactsIcon)`
  width: 15px;
  height: 15px;
  path {
    stroke: white;
  }
`;
const iconsConfig: Pick<StatusComponentProps, "iconsConfig">["iconsConfig"] = {
  Sent: <StyledStatusIcon />,
};
export const Contacts = () => {
  useEffect(() => {
    console.log(getContacts().then((res) => console.log(res.data[0])));
  }, []);

  const [value, setValue] = useState<string>("");

  const handleOnInputText = React.useCallback((e: string) => {
    setValue(e);
  }, []);
  // const onChange = React.useCallback((e: any) => setValue(e), [setValue]);
  return (
    <>
      <Placeholder
        placeholderText="Jane"
        type="show"
        label="First name"
        value={value}
        onInputText={handleOnInputText}
      />
      <Status iconsConfig={iconsConfig} type="Sent" />
      <Avatar
        image="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg"
        isActive={false}
      />
      <Button>
        <Typography>Btn</Typography>
      </Button>
    </>
  );
};

export default React.memo((props) => <Contacts {...props} />);
