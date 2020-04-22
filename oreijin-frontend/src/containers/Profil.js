import { connect } from 'react-redux';
import { deleteAccount, getUser } from '../actions/user';
import Profil from '../components/Member/Profil';


const mapStateToProps = (state, ownProps) => ({
  userInfos: state.user.infos,
  isLogged: state.user.isLogged,
  success: state.user.isSuccess,
  error: state.user.isError,
  // extract the user's id from the slug
  userId: ownProps.match.params.user.split('-')[2],
  profile: state.user.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteAccount: (payload) => dispatch(deleteAccount(payload)),
  getUser: (payload) => dispatch(getUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
