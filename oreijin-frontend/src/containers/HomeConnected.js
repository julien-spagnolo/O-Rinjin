import { connect } from 'react-redux';
import HomeConnected from '../components/Home/HomeConnected';
import { getServicesList } from '../actions/service';
import { getServicesWithUuid } from '../reducers/services';

const mapStateToProps = (state) => ({
 infos: {...state.user.infos},
 services: getServicesWithUuid(state.services),
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnected);

