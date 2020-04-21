import { connect } from 'react-redux';
import { getServicesList } from '../actions/service';

import ServicesList from '../components/Member/ServicesList';


const mapStateToProps = (state) => ({
  services: state.services.list,
  isLogged: state.user.isLogged,
  isSuccess: state.services.isSuccess,
  isError: state.services.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
