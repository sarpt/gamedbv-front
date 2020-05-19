import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import { TextBodyBig, TextBodySmall } from '../../../common/components/common';


export const HeadText = styled(TextBodyBig)`
  font-weight: bold;
`;

export const RowText = styled(TextBodySmall)``;

export const IndexedIcon = styled(CheckCircleIcon)`
  color: green;
`;

export const NotIndexedIcon = styled(CancelIcon)`
  color: red;
`;
