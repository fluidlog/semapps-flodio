import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '@semapps/archipelago-layout';
import { UriArrayInput } from '@semapps/semantic-data-provider';

export const OrganizationTypeEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" label="Titre" fullWidth />
      <TextInput source="pair:comment" label="Courte description" fullWidth />
      <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
      <UriArrayInput label="Organisations" reference="Organization" source="pair:typeOfSubject">
        <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} fullWidth />
      </UriArrayInput>
    </SimpleForm>
  </Edit>
);

export default OrganizationTypeEdit;
