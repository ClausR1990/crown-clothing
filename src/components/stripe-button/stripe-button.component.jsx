import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const stripePubKey = 'pk_test_51HiNChD1HIVok8DeU9UxNtEnamCkmyeuixaGFkk6kSyXPgiq72Lv6IVw0vNofpdVpCocaMasu2knA3CE4B9TuRyL00RbvEcRVe';

    return(
        <StripeCheckout 
            name="Crown Clothing"
            label="Buy Now"
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your price is $${price}`}
            amount={priceForStripe}
            currency="USD"
            stripeKey={stripePubKey}
            shippingAddress
            billingAddress
            panelLabel="Pay now"
            token={onToken}
        />
    )
}
export default StripeCheckoutButton;