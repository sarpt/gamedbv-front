import React from 'react';

import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Table from '@material-ui/core/Table';

import { Panel } from '../../../common/components/panel';

import { PlatformsStatusTableHead } from '../tables/platforms/head';
import { PlatformsStatusTableBody } from '../tables/platforms/body';
import { connect } from 'react-redux';
import { AppState } from '../../../core/store/store';
import { selectPlatformsToUpdate } from '../../selectors/updates';

const mapStateToProps = (state: AppState) => {
  return {
    selectedPlatforms: selectPlatformsToUpdate(state),
  };
};

const mapDispatchToProps = {};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const label = 'Platform databases';

const Component: React.FC<props> = ({ selectedPlatforms }) => {
  return (
    <Panel label={ label } icon={ <VideogameAssetIcon /> }>
      <div>
        <Button
          disabled={ selectedPlatforms.length === 0}
          variant="contained"
          color="secondary"
          startIcon={<UpdateIcon />}
        >
          Update
        </Button>
      </div>
      <Table>
        <PlatformsStatusTableHead></PlatformsStatusTableHead>
        <PlatformsStatusTableBody></PlatformsStatusTableBody>
      </Table>
    </Panel>
  );
};

export const PlatformsStatusPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
