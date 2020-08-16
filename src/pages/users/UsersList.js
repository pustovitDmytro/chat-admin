import React from 'react';
import { List , Datagrid, TextField, DateField, ChipField } from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
        <TextField source="login" />
        <DateField source="registered" />
        <ChipField source="roleName" label="Role"/>
        </Datagrid>
    </List>
);

export default UsersList;