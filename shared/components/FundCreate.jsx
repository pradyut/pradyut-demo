// Libs
import React, {Component}       from 'react';
import { bindActionCreators }   from 'redux';
import { browserHistory }       from 'react-router';

import * as FundActions         from '../actions/fundActions';

export default class FundCreate extends Component {
  constructor(props) {
    super(props);
    let name = '';
    if(this.props.params.id){
      let fund = this.props.funds.find((fund) => {
        return fund.id === parseInt(this.props.params.id);
      });
      name = fund.name;
    }
    this.state = {name: name};
    this.addFund = bindActionCreators(FundActions.addFund, this.props.dispatch);
    this.editFund = bindActionCreators(FundActions.editFund, this.props.dispatch);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._goHome = this._goHome.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this._goHome();
  }
  _goHome() {
   browserHistory.push('/');
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleSubmit(event) {
    if(this.props.params.id){
      this.editFund(this.state.name, this.props.params.id);
      event.preventDefault();
    } else {
      this.addFund(this.state.name);
      event.preventDefault();
    }
    event.preventDefault();
  }
  render() {  
    return (
      <div>
        <div className='top-bar'>
          <span className='heading'>Add New Fund</span>
        </div>
        <div className='workspace'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <div className='div-form-control'>
              <span onClick={this._goHome}>Cancel</span>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}