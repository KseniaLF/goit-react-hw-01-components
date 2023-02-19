import PropTypes from 'prop-types';

import { Table, HistoryItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <HistoryItem key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </HistoryItem>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
