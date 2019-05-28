import React from 'react';
import { Show , SimpleShowLayout, TextField, DateField, ChipField } from 'react-admin';

const UsersTitle = ({ record }) => {
    return <span>User {record ? `"${record.login}"` : ''}</span>;
};

export const UsersShow = (props) => (
    <Show title={UsersTitle} {...props}>
        <SimpleShowLayout>
        <TextField source="login" />
        <DateField source="registered" />
        <ChipField source="roleName" label="Role"/>
        </SimpleShowLayout>
    </Show>
);

export default UsersShow;