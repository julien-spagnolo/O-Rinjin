import { connect } from 'react-redux';
import Map from '../components/Partials/Map';
import { onChangeViewport } from '../actions/map';

const mapStateToProps = (state) => ({
  viewport: state.map.viewport,
  services: state.services.list,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeViewport: (payload) => dispatch(onChangeViewport(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
