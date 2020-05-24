import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/store';

import { PlatformsStatusPanel } from '../../../status/components/panels/platforms';
import { fetchAvailablePlatforms } from '../../../status/actions/availability';

const mapDispatchToProps = {
  dispatchFetchAvailablePlatforms: fetchAvailablePlatforms,
};

const mapStateToProps = (state: AppState) => {
  return {};
};

type additionalProps = {};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = ({ dispatchFetchAvailablePlatforms }) => {
  useEffect(() => {
    dispatchFetchAvailablePlatforms();
  }, [dispatchFetchAvailablePlatforms]);

  return (
    <PlatformsStatusPanel></PlatformsStatusPanel>
  );
};

export const StatusPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
