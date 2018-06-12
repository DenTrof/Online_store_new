import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from './A';
// import Img from './Img';
// import Banner from './banner.jpg';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Basket from 'components/Basket';
import Search from 'components/Search';
import { reloadItem, reloadDataHomePage } from 'containers/HomePage/actions';
import { connect } from 'react-redux';
import { eveData } from 'containers/HomePage/mockEveData.js';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  //  componentDidMount() {
  //   () => forceUpdate()
  // }

  render() {
    const { reloadItem, reloadDataHomePage, eveData } = this.props;
    return (
      <div>
        <A href="#">
          {/* <Img src={Banner} alt="react-boilerplate - Logo" />*/}
        </A>
        <NavBar>
          <HeaderLink
            to="/" onClick={ () => reloadItem('') }
            // onClick={() => {
            //   func1 = () => reloadItem('');
            //   func2 = () => reloadDataHomePage(eveData);
            // }}
          >
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <Basket />
          <Search />

        </NavBar>
      </div>
    );
  }
}

const mapDispatchToProps = {
  reloadItem,
  reloadDataHomePage,
};

export default connect(null, mapDispatchToProps)(Header);
