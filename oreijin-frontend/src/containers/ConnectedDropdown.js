import { connect } from 'react-redux';
import { logout } from '../actions/user';

import ConnectedDropdown from '../components/Partials/ConnectedDropdown';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedDropdown);
