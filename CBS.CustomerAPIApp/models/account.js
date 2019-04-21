var account = {
    id: '5995d6a2-01b3-423c-a173-5481df49bdaf',
    bank_id: 'String',
    label: 'String',
    number: 'String',
    owners: [
      {
        id: '5995d6a2-01b3-423c-a173-5481df49bdaf',
        provider: 'OBP',
        display_name: 'OBP'
      }
    ],
    type: 'String',
    balance: {
      currency: 'EUR',
      amount: '10'
    },
    account_routings: [
      {
        scheme: 'AccountNumber',
        address: '4930396'
      }
    ],
    account_rules: [
      {
        scheme: 'OVERDRAFT',
        value: '10'
      }
    ]
  }

module.exports = account;