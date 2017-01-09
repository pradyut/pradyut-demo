import * as FundActionTypes from '../actiontypes/fundsActionTypes.js';

const initialState = [
  {
    name: 'California Pension Fund',
    id: 1,
    holdings: [
      {
        name: 'Apple Computer',
        ticker: 'AAPL',
        price: '120',
        units: '200'
      },
      {
        name: 'Alphabet',
        ticker: 'GOOG',
        price: '600',
        units: '300'
      },
      {
        name: 'Facebook',
        ticker: 'FB',
        price: '220',
        units: '100'
      },
    ]
  },
  {
    name: 'Harvard Endowment',
    id: 2,
    holdings: [
      {
        name: 'LG',
        ticker: 'LG',
        price: '320',
        units: '380'
      },
      {
        name: 'Microsoft',
        ticker: 'MSFT',
        price: '200',
        units: '840'
      },
      {
        name: 'Sony',
        ticker: 'SONY',
        price: '20',
        units: '890'
      },
    ]
  },
  {
    name: 'Commodities Fund',
    id: 3,
    holdings: [
      {
        name: 'Gold',
        ticker: 'GLD',
        price: '90',
        units: '1200'
      },
      {
        name: 'Bitcoin',
        ticker: 'XBT',
        price: '900',
        units: '1020'
      },
      {
        name: 'Oil',
        ticker: 'OIL',
        price: '80',
        units: '100'
      },
    ]
  },
  {
    name: 'Crops Fund',
    id: 4,
    holdings: [
      {
        name: 'Corn',
        ticker: 'CRN',
        price: '30',
        units: '480'
      },
      {
        name: 'Rice',
        ticker: 'RCE',
        price: '100',
        units: '410'
      },
      {
        name: 'Water',
        ticker: 'LIFE',
        price: '220',
        units: '48'
      },
    ]
  }
];

export default function Funds(state = initialState, action) {

  switch(action.type) {
    case FundActionTypes.ADD_FUND: {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
          holdings: action.holdings
        }
      ];
    }

    case FundActionTypes.REMOVE_FUND:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case FundActionTypes.EDIT_FUND:
      let fundToFind = state.find(function(fund) {
        return fund.id === parseInt(action.fundId);
      });
      let index = state.indexOf(fundToFind);

      return [
        ...state.slice(0, index),
        {
          name: action.name,
          id: fundToFind.id,
          holdings: fundToFind.holdings
        },
        ...state.slice(index + 1)
      ];

    case FundActionTypes.SORT_COLUMN:
      let fund = state.find(function(fund) {
        return fund.id === action.fundId;
      });
      let idx = state.indexOf(fund);
      let sortedHoldings = [...fund.holdings];

      // String or Number check
      if(!isNaN(parseInt(sortedHoldings[0][action.key]))) {
        sortedHoldings.sort(function(a,b) {
          return parseInt(a[action.key]) - parseInt(b[action.key]);
        });
      } else {
        sortedHoldings.sort(function(a,b) {
          return a[action.key].localeCompare(b[action.key]);
        });
      };

      let fundObj = {
        name: fund.name,
        id: fund.id,
        holdings: sortedHoldings
      };

      return [
        ...state.slice(0, idx),
        fundObj,
        ...state.slice(idx + 1),
      ];

    default:
      return state;
  }
}
