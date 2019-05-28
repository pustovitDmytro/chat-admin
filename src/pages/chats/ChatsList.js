import React from 'react';
import { List , Datagrid, TextField, DateField, ChipField, ReferenceManyField, SingleFieldList, ReferenceArrayField, ArrayField, NumberField
} from 'react-admin';

const ChatsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <DateField source="created"/>
            <ArrayField source="users" label="Members">
            <SingleFieldList linkType="show" reference="users">
                <ChipField source="login" />
            </SingleFieldList>
            </ArrayField>
            </Datagrid>
            </List>
            );
  
            export default ChatsList
            // <ArrayField source="users">>
            // <SingleFieldList>
            //     <ChipField source="login" />
            // </SingleFieldList>
            // </ArrayField>