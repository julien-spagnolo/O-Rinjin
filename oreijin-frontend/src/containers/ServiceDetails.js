import { connect } from 'react-redux';
import { findServiceBySlug } from '../reducers/services';
import ServiceDetails from '../components/Member/ServiceDetails';

const mapStateToProps = (state, ownProps) => ({
  service: findServiceBySlug(state.services, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
