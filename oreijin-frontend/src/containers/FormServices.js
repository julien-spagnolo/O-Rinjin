import { connect } from 'react-redux';

import FormServices from '../components/Member/FormServices';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormServices);
