import styled from 'styled-components';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { TextBodySmall } from '../../../../common/components/common';

export const RowText = styled(TextBodySmall)``;

export const IndexedIcon = styled(CheckCircleOutlineIcon)`
  color: green;
`;

export const NotIndexedIcon = styled(CancelOutlinedIcon)`
  color: red;
`;
