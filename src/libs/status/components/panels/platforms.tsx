import React from 'react';

import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Table from '@material-ui/core/Table';

import { Panel } from '../../../common/components/panel';

import { PlatformsStatusTableHead } from '../tables/platforms/head';
import { PlatformsStatusTableBody } from '../tables/platforms/body';

type props = {};

const label = "Platforms";

export const PlatformsStatusPanel: React.FC<props> = () => {
  return (
    <Panel label={ label } icon={ <VideogameAssetIcon /> }>
      <Table>
        <PlatformsStatusTableHead></PlatformsStatusTableHead>
        <PlatformsStatusTableBody></PlatformsStatusTableBody>
      </Table>
    </Panel>
  );
};
