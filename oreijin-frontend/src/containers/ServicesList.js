import { connect } from 'react-redux';
import { getServicesList } from '../actions/service';

import ServicesList from '../components/Member/ServicesList';


const mapStateToProps = (state) => ({
  services: state.services.list,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
