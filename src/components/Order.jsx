
import { Link, NavLink } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { pizzaSelection } from "../dataObject";
import OrderSummary from "./OrderSummary";
import PizzaSelection from "./PizzaSelection";
import axios from "axios";

export default function Order() {

    const history = useHistory();
    const [formData, setFormData] = useState(pizzaSelection);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const errorMessages = {
        pizzaType: 'En az bir pizza tipi seçmelisiniz',
        doughType: 'Lütfden bir hamur tipi seçin',
        orderNotes: 'Lütfen spariş notunuzu giriniz',
        orderQuantity: "Sipariş miktarı 1'den büyük olmalıdır", 
        pizzaSize: 'Lütfen bir pizza boyutu seçin',
    };

    let { userName } = useParams();

    const isValidFunction = () => {
        const newErrors = {};

        if (formData.orderNotes.length < 4) {
            newErrors.orderNotes = errorMessages.orderNotes;
        }
        if (!formData.pizzaType) {
            newErrors.pizzaType = errorMessages.pizzaType;
        }
        if (!formData.doughType) {
            newErrors.doughType = errorMessages.doughType;
        }
        if (formData.quantity < 1) {
            newErrors.orderQuantity = errorMessages.orderQuantity;
        }
        if (!formData.pizzaSize) {
            newErrors.pizzaSize = errorMessages.pizzaSize;  
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    useEffect(() => {
        isValidFunction();
    }, [formData]);

      
    const handleToppingChange = (e) => {
        const { value, checked } = e.target;
        const newToppings = checked
            ? [...formData.toppings, value]
            : formData.toppings.filter(t => t !== value);
        setFormData({ ...formData, toppings: newToppings });
    };
    /*
     const handleToppingChange1 = (event) => {
         const { value, checked } = event.target;
         const newToppings = formData.toppings.includes(value) ?
             formData.toppings.filter((topping) => topping !== value) :
             [...formData.toppings, value];  
         setFormData({ ...formData, toppings: newToppings }); 
 
     };

 */
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/pizza', formData);
            console.log('Order Response:', response.data);
            history.push('/success', { orderData: response.data });
        } catch (error) {
            console.error('Order Error:', error);
        }

    };
     
    const handleClearForm = () => {
        setFormData(pizzaSelection);
        setErrors({});
        setIsValid(false);
    }   

    const handleChange = (event) => {
        let { name, value, type, checked } = event.target;
        //value = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuantityChange = (event) => {
        const { name } = event.target;
        name === 'plus' ? setFormData({ ...formData, quantity: formData.quantity + 1 }) :
            setFormData({ ...formData, quantity: formData.quantity - 1 })
    };

    return (
        <>
            <div className="order-pizza-header">Teknolojik Yemekler</div>
            <div className="order-pizza"></div>
                <div className="order-pizza-grid">
                    <div className="order-pizza-grid-item">
                        <h2>Hoşgeldiniz: {userName}</h2>
                        <p><strong>{formData.pizzaType}</strong></p>
                    </div>
                    <PizzaSelection
                        formData={formData}
                        handleChange={handleChange}
                        handleToppingChange={handleToppingChange}
                        handleQuantityChange={handleQuantityChange}
                        errors={errors}
                        isValid={isValid}
                        handleClearForm={handleClearForm}   
                        handleSubmit={handleSubmit} />

                    <OrderSummary orderedPizza={formData} />
                </div>
                <div/>
            
        </>
    );
}  