import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Paiement = ({panier}) => {
  const handlePayment = async (token) => {
    try {
      const response = await fetch('/paiement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ token: token.id, panier, infos: token}),
      });

      if (response.ok) {
        window.location.href = '/paiement/success';
      } else {
        alert('Erreur de paiement');
      }
    } catch (error) {
      alert('Erreur de paiement', error);
    }
  };

  return (
    <StripeCheckout
      token={handlePayment}
      stripeKey="pk_test_51N7c9qExy3d78d8RDIO7C4yybFGxEHGFuGjY7mHd0LUPZ8iCpQkO64C87nTa9AjK2Br6oHsbMGSuQPx4FA5AsCHf00BMo9cTVN"
      amount={panier.reduce(
        (acc, article) => acc + article.nbr * article.prix,
        0)*100} // Montant en centimes (10 €)
      currency="EUR"
      email
      name="Vous y êtes presque!"
      shippingAddress
    >
      <button type="button" className='boutton_continuer'>Payer</button>
    </StripeCheckout>
  );
};

export default Paiement;