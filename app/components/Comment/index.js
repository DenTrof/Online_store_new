import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { makeComments } from 'containers/HomePage/selectors';


function Comment({ comment }) { 
//console.log(comment)  
  return (
    <div>
      <div className="comment">
        <div className="user-img" style={{backgroundImage: `url(${comment.commentImage})`}}></div>
        <div className="user-comment"> { comment.user }</div>
      </div>
      <div className="text-comment">{ comment.text } </div>
    </div>  
    );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
	// from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};


// const mapStateToProps = (state, PropsId) => {
//   return createStructuredSelector({
//    comment: commentSelector(state, PropsId),
//   });
// };

const mapStateToProps = (state, PropsId) => {
  const commentSelector = makeComments();
  return (state, PropsId) => ({
    comment: commentSelector(state, PropsId),
  });
};


export default connect(mapStateToProps)(Comment);
