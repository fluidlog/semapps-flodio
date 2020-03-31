import React from 'react';
import Icon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';
import { linkToRecord, Record, Button } from 'react-admin';

const defaultIcon = <Icon />;
const stopPropagation = e => e.stopPropagation();

const InboxButton = ({
  basePath = '',
  label = 'Inbox',
  record,
  icon = defaultIcon,
  ...rest
}) => (
  <Button
    component={Link}
    to={`${linkToRecord(basePath, record && record.id)}/inbox`}
    label={label}
    onClick={stopPropagation}
    {...rest}
  >
    {icon}
  </Button>
);

export default InboxButton;
