import React from 'react';


export default function OrderSummary(props) {
    const { orderedPizza } = props;

    const pizzaSize = orderedPizza.pizzaSize === 'small' 
    ? 'Küçük' 
    : orderedPizza.pizzaSize === 'medium' 
    ? 'Orta' 
    : orderedPizza.pizzaSize === 'large' 
    ? 'Büyük' 
    : 'Belirtilmedi';
   
    const doughType = orderedPizza.doughType === 'thin' 
    ? 'İnce' 
    : orderedPizza.doughType === 'normal'
    ? 'Normal' 
    : orderedPizza.doughType === 'thick'      
    ? 'Kalın' 
    : 'Belirtilmedi';

    return (
        <>
            <section>
                <div className="order-pizza-grid-item">
                    <h2>Spariş Özeti:</h2>
                    <p>Seçilen Pizza: {orderedPizza.pizzaType}</p>
                    <p>Pizza Boyu:{pizzaSize}</p>
                    <p>Pizza Hamuru: {doughType}</p>
                    <p>Ek Malzemeler: {orderedPizza.toppings.join(', ')}</p>
                    <p>Adet: {orderedPizza.quantity}</p>
                    <p>Spariş Notları: {orderedPizza.orderNotes}</p>
                </div>
            </section>
        </>
    );
}