import React from 'react';
import PropTypes from 'prop-types';
import { fetchTX } from '@common/lib/client/api';
import { TransactionCard } from '@containers/cards/transaction';
import { TransactionDetails } from '@containers/cards/transaction-details';
import { Page } from '@components/page';

class TransactionSinglePage extends React.Component {
  static async getInitialProps({ req, query }) {
    let id = req && req.params ? req.params.tx : query.tx;
    if (!id && typeof document !== 'undefined') {
      // eslint-disable-next-line prefer-destructuring
      id = document.location.pathname.split('/')[2];
    }
    console.log(query);
    let data;
    if (query.data) {
      data = JSON.parse(query.data);
    } else {
      data = await fetchTX(id);
    }
    // const data = query.data || (await fetchTX(id));

    return {
      tx: {
        id,
        ...data,
      },
      meta: {
        title: `Transaction: ${id}`,
      },
    };
  }

  render() {
    const { tx } = this.props;
    const { valueOut, confirmations, vin, vout, fee } = tx;
    return (
      <Page>
        <TransactionCard mr={[0, 0, 5]} mb={[5, 5, 0]} width={['100%', '100%', '380px']} transaction={tx} />
        <Page.Main>
          <TransactionDetails confirmations={confirmations} fees={fee} valueOut={valueOut} vin={vin} vout={vout} />
        </Page.Main>
      </Page>
    );
  }
}

TransactionSinglePage.propTypes = {
  tx: PropTypes.object.isRequired,
};

export default TransactionSinglePage;
