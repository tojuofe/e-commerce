import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Hg1Z84tK2xbvtLvEc6IFaRcn00fPvHrllH';

  const onToken = (token) => {
    alert('Payment Successfully');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Nath Clothing LTD'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
