import React from 'react';

import { PanelPaper, Header, IconContainer, Label, Content } from './Panel.styles';

type Props = {
  label: string,
  icon?: React.ReactNode
};
export const Panel: React.FC<Props> = ({ label, icon, children }) => {
  return (
    <PanelPaper>
      <Header>
        {
          icon && (
            <IconContainer>
              { icon }
            </IconContainer>
          )
        }
        <Label variant="h5">
          { label }
        </Label>
      </Header>
      <Content>
        {
          children
        }
      </Content>
    </PanelPaper>
  );
};
