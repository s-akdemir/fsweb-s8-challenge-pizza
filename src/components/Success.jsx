import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const history = useHistory();

  const { orderData } = location.state || {};
 
 //Api'den gelen tarih bilgisi UTC formatında olduğu için, bunu yerel saat dilimine dönüştürmek için Date nesnesini kullanıyoruz.  
 const isoDate = orderData.createdAt;
 const localDate = new Date(isoDate).toLocaleString();

  const handleGoHome = () => {
    history.push('/');
  };


  return (
    <div className="order-pizza">
      <div className="order-pizza-grid">
        {
          orderData ? (
            <>
              <div className="order-pizza-grid-item">
                <h2>🎉 Siparişiniz Başarıyla Alındı!</h2>
              </div>

              <div className="order-pizza-grid-item">
                <h3>Spariş Bilgileri:</h3>
                <p><strong>Spariş ID:</strong> {orderData.id}</p>
                <p><strong>Spariş Tarihi: </strong> {localDate}</p>
                <p><strong>Tür:</strong> {orderData.pizzaType}</p>
                <p><strong>Boyut:</strong> {orderData.pizzaSize}</p>
                <p><strong>Hamur:</strong> {orderData.doughType}</p>
                <p><strong>Malzemeler:</strong> {orderData.toppings?.join(', ') || 'Yok'}</p>
                <p><strong>Not:</strong> {orderData.orderNotes || 'Not belirtilmedi'}</p>
                <p><strong>Adet:</strong> {orderData.quantity || 1}</p>
              </div>
            </>
          ) : 
          //Apiden gelen veriler yoksa, kullanıcıya bir hata mesajı gösteriyoruz. 
          (
            <div className="order-pizza-grid-item">
              <h2>Oops! Sipariş bilgisi bulunamadı.</h2>
            </div>
          )
        }

        <button className="button" onClick={handleGoHome}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default Success;
