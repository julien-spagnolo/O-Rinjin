import { connect } from 'react-redux';

import { getUserServicesList } from '../actions/user';
import ServicesList from '../components/Member/ServicesList';

const mapStateToProps = (state) => ({
  services: state.user.services,
  isLogged: state.user.isLogged,
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getUserServicesList: () => dispatch(getUserServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
