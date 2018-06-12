import React from 'react';
import Helmet from 'react-helmet';
import H3 from 'components/H3';
import { getLinkId } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makelinkIdData } from './selectors';
import HeaderLink from 'components/Header/HeaderLink';
import CommentList from 'components/CommentList';
import { addItemToBasket } from 'containers/HomePage/actions';


class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getLinkId(this.props.params.id);
    const mockDataItemId = this.props.params.id;
  }

  renderContent() {
    const { linkIdData } = this.props;
    const ImgId = linkIdData.image;
    const mockDataItemId = this.props.params.id;
    // console.log(addItemToBasket);

    return (
      <div>
        <div className="box-container-character">

          <div className="character-page-img" style={{ backgroundImage: `url(${linkIdData.image})` }}>
          </div>
          <div className="character-page-options">
            {this.renderSidebar()}
            <p><b>cpu: </b>{linkIdData.cpu}</p>
            <p><b>camera: </b>{linkIdData.camera}</p>
            <p><b>size: </b>{linkIdData.size}</p>
            <p><b>weight: </b>{linkIdData.weight}</p>
            <p><b>display: </b>{linkIdData.display}</p>
            <p><b>battery: </b>{linkIdData.battery}</p>
            <p><b>memory: </b>{linkIdData.memory}</p>
          </div>
        </div>
        <div className="character-page-title">
          <H3 >${linkIdData.price} <span className="character-name">{linkIdData.name}</span></H3>
          <p>{linkIdData.description}</p>
        </div>
        <CommentList mockDataItemId={mockDataItemId}/>
      </div>
    );
  }

  renderSidebar() {
    const { linkIdData, addItemToBasket } = this.props;
    return (
        <HeaderLink
          style={{ border: '2px solid #48dd41',
            color: '#41ADDD' }}
          onClick={() => addItemToBasket(linkIdData.id)}> Buy Now!
        </HeaderLink>
    );
  }

  render() {
    return (
      <div className="main-container">
        <Helmet
          title="Character Page"
          meta={[{ name: 'description', content: 'Character Page' }]}
        />
        {/* <H1>Character Page</H1>*/}
        <div className="box-container-character" >
          <div className="box-content-char">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getLinkId,
  addItemToBasket,
};

const mapStateToProps = createStructuredSelector({
  linkIdData: makelinkIdData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);
