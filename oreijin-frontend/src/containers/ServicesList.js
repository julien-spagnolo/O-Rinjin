import { connect } from 'react-redux';


import ServicesList from '../components/Member/ServicesList';


const mapStateToProps = (state) => ({
  services: state.services.list,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
