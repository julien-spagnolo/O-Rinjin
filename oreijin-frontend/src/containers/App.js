import { connect } from 'react-redux';
import { checkAuth } from '../actions/user';

import App from '../components/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
