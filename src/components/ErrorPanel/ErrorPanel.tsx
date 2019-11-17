import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';

import { Panel } from '../Panel/Panel';

type Props = {
  message: string,
  label: string
};
export const ErrorPanel: React.FC<Props> = ({ message, label }) => {
  return (
    <Panel
      label={ label }
      icon={ <ErrorIcon /> }
    >
      { message }
    </Panel>
  );
};
