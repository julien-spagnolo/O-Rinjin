import { connect } from 'react-redux';
import { deleteAccount, getUser, changeProfileField, updateProfile } from '../actions/user';
import Profil from '../components/Member/Profil';
import auth from '../auth';

const mapStateToProps = (state, ownProps) => ({
  isLogged: auth.isAuthenticated() !== null,
  success: state.user.isSuccess,
  error: state.user.isError,
  // extract the user's id from the slug
  userId: ownProps.match.params.user.split('-')[2],
  profile: state.user.profile,
  form: state.user.profileForm,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteAccount: (payload) => dispatch(deleteAccount(payload)),
  getUser: (payload) => dispatch(getUser(payload)),
  onChangeProfileField: (payload) => dispatch(changeProfileField(payload)),
  onUpdateProfile: () => dispatch(updateProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
