// Libs
import React, {Component}   from 'react';
import {Link}               from 'react-router';

export default class FundList extends Component {
  render() {
    let funds = this.props.funds.map((fund,index) => {
      return (
        <FundItem key={fund.id} index={index} removeFund={this.props.removeFund} fund={fund}/>
      );
    });

    return (
      <ul>{funds}</ul>
    );
  }
}

const FundItem = class FundItem extends Component {
  render() {
    return (
      <li onClick={this.toggleMenu}>
        <label className="collapse" htmlFor={this.props.fund.id}>
          <span className='span-fund-name'>{this.props.fund.name}</span>
        </label>
        <input id={this.props.fund.id} type="radio" name="c1"/>

        <div className='menu'>
          <ul>
            <li>...</li>
            <li><Link to={`/funds/${this.props.fund.id}`}>View</Link></li>
            <li onClick={ () => this.props.removeFund(this.props.index) }>Delete</li>
          </ul>
        </div>
      </li>
    );
  }
};