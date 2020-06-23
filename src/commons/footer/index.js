import React, { Component } from 'react';
import { FooterWrapper } from './style';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: [false, false, false],
    };
  }

  componentDidMount = () => {
    const urlParams = window.location.href;
    const keyword = urlParams.split('/')[3];
    if (keyword === '') {
      this.setState(() => {
        return { isSelected: [true, false, false] };
      });
    } else if (keyword === 'statistics') {
      this.setState(() => {
        return { isSelected: [false, true, false] };
      });
    } else {
      this.setState(() => {
        return { isSelected: [false, false, true] };
      });
    }
  };

  render() {
    return (
      <FooterWrapper>
        <div
          className={
            this.state.isSelected[0] ? 'navItem isSelected' : 'navItem'
          }
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <i className='iconfont'>&#xe689;</i>
          <div className='text'>Details</div>
        </div>
        <div
          className={
            this.state.isSelected[1] ? 'navItem isSelected' : 'navItem'
          }
          onClick={() => {
            window.location.href = '/statistics';
          }}
        >
          <i className='iconfont'>&#xe60a;</i>
          <div className='text'>Statistics</div>
        </div>
        <div
          className={
            this.state.isSelected[2] ? 'navItem isSelected' : 'navItem'
          }
          onClick={() => {
            window.location.href = '/setting';
          }}
        >
          <i className='iconfont'>&#xe781;</i>
          <div className='text'>Settings</div>
        </div>
      </FooterWrapper>
    );
  }
}

export default Footer;
