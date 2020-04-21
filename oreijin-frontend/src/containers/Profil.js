import { connect } from 'react-redux';
import { deleteAccount } from '../actions/user';
import Profil from '../components/Member/Profil';


const mapStateToProps = (state) => ({
  userInfos: state.user.infos,
  success: state.user.isSuccess,
  error: state.user.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteAccount: (payload) => dispatch(deleteAccount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
