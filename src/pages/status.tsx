import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/store';

const mapDispatchToProps = {

};

const mapStateToProps = (state: AppState) => {
  return {};
};

type additionalProps = {};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = ({}) => {
  return (
    <React.Fragment>
    </React.Fragment>
  );
};

export const StatusPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
