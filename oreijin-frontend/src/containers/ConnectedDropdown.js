import { connect } from 'react-redux';
import slugify from 'slugify';
import { logout } from '../actions/user';

import ConnectedDropdown from '../components/Partials/ConnectedDropdown';

const mapStateToProps = () => ({
  userSlug: slugify(`${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')} ${sessionStorage.getItem('id')}`, { lower: true }),
  isAdmin: sessionStorage.getItem('roles').split(',').includes('ADMIN'),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedDropdown);
