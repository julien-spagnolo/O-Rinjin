import { connect } from 'react-redux';
import Service from '../components/Partials/Service';


const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged, 
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
