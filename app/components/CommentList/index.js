import React from 'react';
import Comment from 'components/Comment';
import { connect } from 'react-redux';
import CommentForm from 'components/CommentForm';
import { makeMockDataData } from 'containers/HomePage/selectors';
import { createStructuredSelector } from 'reselect';


class CommentList extends React.Component {
    // static defaultProps = {
    //     comments: []
    // }


  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    );
  }


  getBody() {
    const { mockData, mockDataItemId } = this.props; //-- mockDataItemId it's from CharacterPage

    //---------------- take comments for unique character ------------------------
    const mockDataId = mockData.filter((data) => data.id === mockDataItemId);
    console.log(mockDataId)
    const arrComments = mockDataId[0].commentsId
  
    const commentsElements = arrComments.map((id) => 
      <li key={id}><Comment id={id} /></li>);
    if (!mockDataId.length) {
      return (<div> <p>No comments yet</p>
        <p><CommentForm id={mockDataItemId} /></p></div>);
    }

    return (
      <div>
        <ul className="comment-li">
          {commentsElements}
        </ul>
        <p><CommentForm id={mockDataItemId} /></p>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  mockData: makeMockDataData(),
});

export default connect(mapStateToProps, null)(CommentList);
