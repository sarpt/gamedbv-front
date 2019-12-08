import React from 'react';

import { 
  Content,
  SectionContainer,
  Label
} from './PanelSection.styles';

type Props = {
  label: string
};

export const PanelSection: React.FC<Props> = ({ label, children }) => {
  return (
    <SectionContainer>
      <Label variant="h6">
        { label }
      </Label>
      <Content>
        { children }
      </Content>
    </SectionContainer>
  );
};
