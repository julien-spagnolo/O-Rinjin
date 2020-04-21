import { connect } from 'react-redux';
import { getServiceIdFromSlug } from '../reducers/services';
import { onChangeFieldReply, getService } from '../actions/service';
import ServiceDetails from '../components/Member/ServiceDetails';

const mapStateToProps = (state, ownProps) => ({
  service: state.services.service,
  reply: state.services.service.reply,
  id: getServiceIdFromSlug(ownProps.match.params.slug),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFieldReply: (payload) => dispatch(onChangeFieldReply(payload)),
  getService: (payload) => dispatch(getService(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
