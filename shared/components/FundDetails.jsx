import React, {Component}     from 'react';
import {bindActionCreators}   from 'redux';
import {Link}     from 'react-router';

import * as FundActions         from '../actions/fundActions';
export default class FundDetails extends Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.sortColumnFunc = bindActionCreators(FundActions.sortColumn, this.dispatch);
  }

  sortColumn(key, fundId) {
    this.sortColumnFunc(key, fundId);
  }

  render() {
    let fund = this.props.funds.find((fund) => {
      return fund.id === parseInt(this.props.params.id);
    });
    let holdings =  <tr><td>No holdings assigned to this fund</td></tr>;

    if(fund.holdings && fund.holdings.length > 0) {
      holdings = fund.holdings.map(function(stock) {
        return (
          <tr className='li-stock-data' key={stock.ticker}>
            <td className='blue'>{stock.name}</td>
            <td>{stock.ticker}</td>
            <td>{stock.price}</td>
            <td>{stock.units}</td>
          </tr>
        );
      });
    }

    return (
      <div>
        <div className='top-bar'>
          <span className='heading'>{fund.name}</span>
          <button><Link to={`/funds-edit/${fund.id}`}><span>Edit Fund</span></Link></button>
          <div className='link-home'>&lt; <Link to='/'>Home</Link></div>
        </div>

        <div className='workspace'>
          <table className='table-holdings'>
            <thead>
              <tr>
                <th onClick={ () => this.sortColumn('name', fund.id) }>Company</th>
                <th onClick={ () => this.sortColumn('ticker',fund.id) }>Ticker Symbol</th>
                <th onClick={ () => this.sortColumn('price', fund.id) }>Current Price</th>
                <th onClick={ () => this.sortColumn('units', fund.id) }>Shares Held</th>
              </tr>
            </thead>
            <tbody>
              {holdings}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}