import React from 'react';

import {
  Content,
  SectionContainer,
  Label,
} from './panel-section.styles';

type Props = {
  label: string,
};

export const PanelSection: React.FC<Props> = ({ label, children }) => {
  return (
    <SectionContainer>
      <Label>
        { label }
      </Label>
      <Content>
        { children }
      </Content>
    </SectionContainer>
  );
};
