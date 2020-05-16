import React from 'react';
import { Panel } from '../../../common/components/panel';
import { AppState } from '../../../core/store/store';
import { connect } from 'react-redux';
import { selectPlatforms } from '../../selectors';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const mapStateToProps = (state: AppState) => {
  return {
    platforms: selectPlatforms(state),
  };
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & additionalProps;

const label = "Platforms";

const Component: React.FC<props> = ({ platforms }) => {
  return (
    <Panel label={ label } icon={ <VideogameAssetIcon /> }>
      <Table>
        <TableBody>
          {
            platforms.map(platform => {
              return (
                <TableRow key={ platform.uid }>
                  <TableCell>
                    {
                      platform.name
                    }
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </Panel>
  );
};

export const PlatformsStatusPanel = connect(mapStateToProps)(Component);
