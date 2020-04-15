import { connect } from 'react-redux';
import { logout } from '../actions/user';

import ConnectedMenu from '../components/Partials/ConnectedMenu';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);
