import styled from 'styled-components';

import { TextBodyBig, TextBodySmall } from '../../common/components/common';

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const PlatformAndRegion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(TextBodyBig)`
  flex-grow: 0;
`;

export const Id = styled(TextBodyBig)`
  flex-grow: 0;
`;

export const Regions = styled(TextBodySmall)`
  flex-grow: 0;
`;

export const Platform = styled(TextBodySmall)`
  flex-grow: 0;
`;

export const Synopsis = styled(TextBodySmall)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-style: italic;
  margin-top: 1rem;
`;
