import { connect } from 'react-redux';
import slugify from 'slugify';
import { logout } from '../actions/user';


import ConnectedMenu from '../components/Partials/ConnectedMenu';

const mapStateToProps = (state) => ({
  userSlug: slugify(`${state.user.infos.firstname} ${state.user.infos.lastname} ${state.user.infos.id}`, { lower: true }),
  isAdmin: state.user.infos.roles[0] === 'ROLE_ADMIN' || state.user.infos.roles[0] === 'ROLE_MODO',
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);
