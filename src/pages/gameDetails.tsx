
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/store';

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = {};

type additionalProps = {};

type props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & additionalProps;

const Component: React.FC<props> = () => {
  return (
    <React.Fragment>
    </React.Fragment>
  );
};

export const GameDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
