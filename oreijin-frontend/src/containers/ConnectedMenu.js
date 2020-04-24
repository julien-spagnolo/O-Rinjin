import { connect } from 'react-redux';
import slugify from 'slugify';
import { logout } from '../actions/user';


import ConnectedMenu from '../components/Partials/ConnectedMenu';

const mapStateToProps = () => ({
  userSlug: slugify(`${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')} ${sessionStorage.getItem('id')}`, { lower: true }),
  isAdmin: sessionStorage.getItem('roles').split(',').includes('ROLE_ADMIN') || sessionStorage.getItem('roles').split(',').includes('ROLE_MODO'),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);
