import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { StoreState } from '../store';
import { Dispatch } from 'redux';
import { toggleProfile } from '../store/profile/actions';

interface AboutProps {
  visible: boolean;
  toggle: () => void;
}

export const About: FC<AboutProps> = (props) => {
  console.log(props);
  return (
    <>
      <h2>About</h2>
      <input type="checkbox" checked={props.visible} />
      <Button onClick={() => props.toggle()} variant="contained">
        VISIBLE
      </Button>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
});

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
