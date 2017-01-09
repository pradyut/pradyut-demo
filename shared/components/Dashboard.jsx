// Libs
import React, {Component}           from 'react';
import {bindActionCreators}         from 'redux';
import {Link}                       from 'react-router';

import * as FundActions             from '../actions/fundActions';
import FundList                     from './FundList';

export default class Dashboard extends Component {

  render() {
    const removeFund = bindActionCreators(FundActions.removeFund, this.props.dispatch);

    return (
      <div>
        <div className='top-bar'>
          <span className='heading'>Manage Your Funds</span>
          <button><Link to={`/funds-edit/`}><span>Add New Fund</span></Link></button>
        </div>
        <div className='workspace'>
          <FundList removeFund={removeFund} funds={this.props.funds}/>
        </div>
      </div>
    );
  }
}