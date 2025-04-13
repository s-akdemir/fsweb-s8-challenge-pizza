import { toppings, pizzaTypes } from "../dataObject"; 
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    FormFeedback,
} from 'reactstrap';

export default function PizzaSelection({ formData, handleChange, handleToppingChange, handleSubmit }) {

    return (
        <>
            <Form onSubmit={handleSubmit}  className="order-pizza-grid-item">
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
                    >
                        <option value="İtalyan Pizza">
                            İtalyan Pizza
                        </option>
                        <option value="Türk Pizza">
                            Türk Pizza
                        </option>
                        <option value="Meksika Pizza">
                            Meksika Pizza
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>
                        Pizza Boyutu
                    </legend>
                    <FormGroup check>
                        <Input
                            name="pizzaSize"
                            id="smallPizza"
                            type="radio"
                            value="small"
                            checked={formData.pizzaSize === 'small'}
                            onChange={handleChange}
                        />
                        {' '}
                        <Label for="smallPizza" check>
                            Küçük
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="pizzaSize"
                            id="mediumPizza"
                            type="radio"
                            value="medium"
                            checked={formData.pizzaSize === 'medium'}
                            onChange={handleChange}
                        />
                        {' '}
                        <Label for="mediumPizza" check>
                            Orta
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="pizzaSize"
                            id="largePizza"
                            type="radio"
                            value="large"
                            checked={formData.pizzaSize === 'large'}
                            onChange={handleChange}
                        />
                        {' '}
                        <Label for="largePizza" check>
                            Büyük
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="doughType">
                        Hamur Tipi:
                    </Label>
                    <Input
                        id="doughType"
                        name="doughType"
                        type="select"
                        value={formData.doughType}
                        onChange={handleChange}
                    >
                        <option value="thin">
                            İnce
                        </option>
                        <option value="normal">
                            Normal
                        </option>
                        <option value="thick">
                            Kalın
                        </option>
                    </Input>
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
                    />
                </FormGroup>
                <Button className="button">
                    Gönder
                </Button>
            </Form>
        </>
    )
}