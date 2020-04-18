import { connect } from 'react-redux';
import HomeConnected from '../components/Home/HomeConnected';
import { getServicesList } from '../actions/service';
import { getServicesWithSlug } from '../reducers/services';

const mapStateToProps = (state) => ({
  infos: { ...state.user.infos },
  services: getServicesWithSlug(state.services),
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnected);
