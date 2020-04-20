import { connect } from 'react-redux';
import { findServiceBySlug } from '../reducers/services';
import { onChangeFieldReply } from '../actions/service';
import ServiceDetails from '../components/Member/ServiceDetails';

const mapStateToProps = (state, ownProps) => ({
  service: findServiceBySlug(state.services, ownProps.match.params.slug),
  reply: state.services.service.reply,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFieldReply: (payload) => dispatch(onChangeFieldReply(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
