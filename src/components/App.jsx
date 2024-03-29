import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Profile } from './Profile/Profile';
import user from 'components/Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
