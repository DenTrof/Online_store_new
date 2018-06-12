
import React from 'react';
import InputComment from './formCSS';
import Input from 'containers/HomePage/Input';
import { connect } from 'react-redux';
import { addComment, addCommentIdmockData } from 'containers/HomePage/actions';


class CommentForm extends React.Component {

    //  static propTypes = {
    // };

  state = {
    id: '',
    commentImage: '',
    user: '',
    text: '',
  }

  render() {
    return (
      <div className="form-n">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend> &nbsp;&nbsp; COMMENTS &nbsp;</legend>
            <Input
              className="form-input"
              value={this.state.user} autofocus
              onChange={this.handleChange('user')}
              placeholder="User name *" required

            /><br/><br/>
            <Input
              className="form-input"
              value={this.state.commentImage}
              onChange={this.handleChange('commentImage')}
              size=""
              placeholder="Image URL EX:(http://image.eveonline.com/Character/94136858_256.jpg)"
            /><br/><br/>
            <Input
              size=""
              className="form-input"
              value={this.state.text} name="comment"
              onChange={this.handleChange('text')}
              placeholder="Your's propose *" required
            />
          </fieldset><br/>
          <InputComment type="submit" value="Send Сomment" /> &nbsp;
            <InputComment type="reset" value="Reset" />
        </form>
      </div>
    );
  }

  handleSubmit = (ev) => {
    const uid = () => Math.random().toString(34).slice(2);
    ev.preventDefault();
    this.setState({
      id: uid(),
      commentImage: '',
      user: '',
      text: '',
    });
    this.props.addComment(this.state);
    this.props.addCommentIdmockData(this.state.id);
  }

  handleChange = (type) => (ev) => {
    const { value } = ev.target;
    this.setState({
      [type]: value,
    });
  }
}

function mapDispatchToProps(dispatch, ownProps) {
    // console.log(ownProps);
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    addCommentIdmockData: (randomCommentId) => dispatch(addCommentIdmockData(randomCommentId, ownProps)),
  };
}

// export default CommentForm
export default connect(null, mapDispatchToProps)(CommentForm);
