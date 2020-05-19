import React from 'react';
import { connect } from 'react-redux';

import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import { Panel } from '../../../common/components/panel';
import { AppState } from '../../../core/store/store';

import { selectPlatforms } from '../../selectors';

import { HeadText, RowText, IndexedIcon, NotIndexedIcon } from './platforms.styles';

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
        <TableHead>
          <TableRow>
            <TableCell>
              <HeadText>
                Name
              </HeadText>
            </TableCell>
            <TableCell>
              <HeadText>
                Indexed
              </HeadText>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            platforms.map(platform => {
              return (
                <TableRow key={ platform.uid }>
                  <TableCell>
                    <RowText>
                        {
                          platform.name
                        }
                    </RowText>
                  </TableCell>
                  <TableCell>
                    <RowText>
                        {
                          platform.indexed ? <IndexedIcon></IndexedIcon> : <NotIndexedIcon></NotIndexedIcon>
                        }
                    </RowText>
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
