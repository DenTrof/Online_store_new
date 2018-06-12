import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCharacter } from 'containers/HomePage/actions';


class Search extends Component {

  state = {
    value: '',
  }

  render() {
    return (

      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
          onChange={this.handleChange.bind(this)}
          type="text"
          className="form-control"
        /><button type="reset" className=""> x </button>
        <button className="btn-1"><img  src={require('./icons-search-wight-32.png')} /></button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchCharacter(this.state.value);
  }
}

const mapDispatchToProps = {
  searchCharacter,
};

export default connect(null, mapDispatchToProps)(Search);
