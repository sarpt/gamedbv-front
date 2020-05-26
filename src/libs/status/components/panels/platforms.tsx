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
import { selectPlatformsToUpdate, platformsUpdateInProgress } from '../../selectors/updates';
import { updatePlatforms } from '../../actions/updates';

const mapStateToProps = (state: AppState) => {
  return {
    selectedPlatforms: selectPlatformsToUpdate(state),
    updateInProgress: platformsUpdateInProgress(state),
  };
};

const mapDispatchToProps = {
  dispatchUpdatePlatforms: updatePlatforms,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const label = 'Platform databases';

const Component: React.FC<props> = ({
  selectedPlatforms,
  dispatchUpdatePlatforms,
  updateInProgress,
}) => {
  const handleUpdateClick = () => {
    dispatchUpdatePlatforms({ platforms: selectedPlatforms });
  };

  return (
    <Panel label={ label } icon={ <VideogameAssetIcon /> }>
      <div>
        <Button
          onClick={ handleUpdateClick }
          disabled={ selectedPlatforms.length === 0 || updateInProgress }
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
