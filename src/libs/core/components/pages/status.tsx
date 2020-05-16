import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { PlatformsStatusPanel } from '../../../status/components/panels/platforms';

const mapDispatchToProps = {

};

const mapStateToProps = (state: AppState) => {
  return {};
};

type additionalProps = {};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = ({}) => {
  return (
    <PlatformsStatusPanel></PlatformsStatusPanel>
  );
};

export const StatusPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
