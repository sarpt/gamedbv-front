import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

import {
  PanelPaper,
  Header,
  IconContainer,
  Label,
  Content,
} from './panel.styles';

const isExpandedInitially = true;

type Props = {
  label: string,
  icon?: React.ReactNode,
};
export const Panel: React.FC<Props> = ({ label, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedInitially);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
        <Label>
          { label }
        </Label>
          <IconButton onClick={ toggleIsExpanded } size="small">
            {
              isExpanded
              ? <ArrowDropUp></ArrowDropUp>
              : <ArrowDropDown></ArrowDropDown>
            }
          </IconButton>
      </Header>
      {
        isExpanded && (
          <Content>
            {
              children
            }
          </Content>
        )
      }
    </PanelPaper>
  );
};
