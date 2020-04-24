import { connect } from 'react-redux';
import HomeConnected from '../components/Home/HomeConnected';
import { getServicesList, setSelectedList } from '../actions/service';
import { getServicesWithSlug, getServicesByPostalcodeWithSlug } from '../reducers/services';

const mapStateToProps = (state) => ({
  infos: { ...state.user.infos },
  services: getServicesWithSlug(state.services),
  servicesPostalcode: getServicesByPostalcodeWithSlug(state.services),
  selectedList: state.services.selectedList,
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
  setSelectedList: (payload) => dispatch(setSelectedList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnected);
