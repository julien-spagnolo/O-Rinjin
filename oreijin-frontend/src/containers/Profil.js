import { connect } from 'react-redux';
import Profil from '../components/Member/Profil';


const mapStateToProps = (state) => ({
  userInfos: state.user.infos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
