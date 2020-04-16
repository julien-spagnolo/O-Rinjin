import { connect } from 'react-redux';
import HomeConnected from '../components/Home/HomeConnected';
import { getServicesList } from '../actions/service';

const mapStateToProps = (state) => ({
 infos: {...state.user.infos},
 services: [...state.services.services],
});

const mapDispatchToProps = (dispatch) => ({
  getServicesList: () => dispatch(getServicesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnected);

