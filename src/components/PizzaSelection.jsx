import { toppings, doughTypes, pizzaTypes, pizzaSizes } from "../dataObject";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    FormFeedback,
} from 'reactstrap';

export default function PizzaSelection(props) {

    const { formData, handleChange, handleToppingChange, handleSubmit, handleQuantityChange, errors, isValid, handleClearForm } = props; // destructure props 
    return (
        <>
            <Form onSubmit={handleSubmit} className="order-pizza-grid-item">
                <FormGroup>
                    <Label for="pizzaType">
                        Pizza Tipi:
                    </Label>
                    <Input
                        id="pizzaType"
                        name="pizzaType"
                        onChange={handleChange}
                        value={formData.pizzaType}
                        type="select"
                        invalid={errors.pizzaType} // hata varsa true, yoksa false döner
                    > {pizzaTypes.map((pizza) => (
                        <option key={pizza.id} value={pizza.pizzaName}>
                            {pizza.pizzaName} - {pizza.prize} TL
                        </option>
                    ))}
                    </Input>
                    <FormFeedback>{errors.pizzaType}</FormFeedback>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>
                        Pizza Boyutu
                    </legend>
                    {pizzaSizes.map((size) => (
                        <FormGroup check key={size}>
                            <Input
                                name="pizzaSize"
                                id={size}
                                type="radio"
                                value={size}
                                checked={formData.pizzaSize === size}
                                onChange={handleChange}
                                invalid={errors.pizzaSize}
                            />
                            {' '}
                            <Label for={size} check>
                                {size === 'small' ? 'Küçük' : size === 'medium' ? 'Orta' : 'Büyük'}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>
                <FormGroup>
                    <Label for="doughType">
                        Hamur Tipi:
                    </Label>
                    <Input
                        id="doughType"
                        name="doughType"
                        type="select"
                        invalid={errors.doughType} // hata varsa true, yoksa false döner    
                        value={formData.doughType}
                        onChange={handleChange}
                    > {doughTypes.map((doughType) => (
                        <option key={doughType} value={doughType}>
                            {doughType === 'thin' ? 'İnce' : doughType === 'normal' ? 'Normal' : 'Kalın'}
                        </option>
                    ))}
                    </Input>
                    <FormFeedback>{errors.doughType}</FormFeedback>
                </FormGroup>

                <Label htmlFor="toppings">
                    Ekstra Malzemeler:
                </Label>
                <FormGroup id="toppings" className="order-pizza-grid-item-row">
                    {toppings.map((topping) => (
                        <FormGroup check inline key={topping}>
                            <Input
                                type="checkbox"
                                id={topping}
                                name={topping}
                                value={topping}
                                checked={formData.toppings.includes(topping)}
                                onChange={handleToppingChange}
                            />{' '}
                            <Label htmlFor={topping} check>
                                {topping.charAt(0).toUpperCase() + topping.slice(1)}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>
                <FormGroup>
                    <Label for="orderText">
                        Spariş Notu
                    </Label>
                    <Input
                        id="orderNotes"
                        name="orderNotes"
                        type="textarea"
                        onChange={handleChange}
                        value={formData.orderNotes}
                        invalid={errors.orderNotes} // hata varsa true, yoksa false döner 
                    />
                    <FormFeedback>{errors.orderNotes}</FormFeedback>
                </FormGroup>
                <FormGroup className="order-pizza-grid-item-row">
                    <Button disabled={!isValid} color="warning" name="minus" onClick={handleQuantityChange}>
                        -
                    </Button>
                    <Input
                        bsSize="lg"
                        className="mb-3"
                        placeholder="lg"
                        name="quantity"
                        value={formData.quantity}
                        invalid={errors.orderQuantity} // hata varsa true, yoksa false döner
                    />
                    <FormFeedback>{errors.orderQuantity}</FormFeedback>
                    <Button color="warning" name="plus" onClick={handleQuantityChange}>
                        +
                    </Button>
                </FormGroup>
                <Button disabled={!isValid} color="warning">
                    Sipariş Ver
                </Button>
                <Button color="success" onClick={handleClearForm}>
                    Formu Temizle
                </Button>
            </Form>
        </>
    )
}