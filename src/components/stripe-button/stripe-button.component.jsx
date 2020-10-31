import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';
import { selectCurrentUser } from '../../redux/user/user.selector';


const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
}

const StripeCheckoutButton = ({ price, currentUser }) => {
    const priceForStripe = price * 100;
    const stripePubKey = 'pk_test_51HiNChD1HIVok8DeU9UxNtEnamCkmyeuixaGFkk6kSyXPgiq72Lv6IVw0vNofpdVpCocaMasu2knA3CE4B9TuRyL00RbvEcRVe';
    const email = currentUser ? currentUser.email : '';

    return(
        <StripeCheckout 
            name="Crown Clothing"
            email={email}
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
        >
        <CustomButton type="button">Pay Now</CustomButton>
        </StripeCheckout>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(StripeCheckoutButton);