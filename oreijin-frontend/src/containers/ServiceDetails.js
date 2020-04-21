import { connect } from 'react-redux';
import { getServiceIdFromSlug } from '../reducers/services';
import { onChangeFieldReply, getService } from '../actions/service';
import { getCategoriesList } from '../actions/categories';
import ServiceDetails from '../components/Member/ServiceDetails';
import { findCategoryById } from '../reducers/categories';
import { addComment } from '../actions/comments';

const mapStateToProps = (state, ownProps) => ({
  service: state.services.service,
  reply: state.services.service.reply,
  id: getServiceIdFromSlug(ownProps.match.params.slug),
  category: findCategoryById(state.services.service.serviceCategory.id, state.categories),
  commentListLength: state.comments.list.length,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFieldReply: (payload) => dispatch(onChangeFieldReply(payload)),
  getService: (payload) => dispatch(getService(payload)),
  getCategoriesList: () => dispatch(getCategoriesList()),
  addComment: (payload) => dispatch(addComment(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
