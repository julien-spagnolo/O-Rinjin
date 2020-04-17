import { connect } from 'react-redux';
import slugify from 'slugify';
import { logout } from '../actions/user';

import ConnectedDropdown from '../components/Partials/ConnectedDropdown';

const mapStateToProps = (state) => ({
  user: slugify(`${state.user.infos.firstname} ${state.user.infos.lastname} ${state.user.infos.id}`, { lower: true }),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedDropdown);
