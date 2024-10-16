enum PizzaSize {
    Small,
    Medium,
    Large,
    Familie
}

enum PizzaIngredients {
    Cheese, 
    Onion,
    Salami,
    Olives,
    Tomato,
    Jalapeno
}

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[]
}

const pizzaSmall: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Tomato, PizzaIngredients.Cheese]
};
console.log(pizzaSmall);

const PizzaMedium: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Onion]
};

const PizzaLarge: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Jalapeno]
};

const PizzaFamilie: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Olives, PizzaIngredients.Tomato]
};

console.log(PizzaFamilie);
console.log(PizzaMedium.ingredients);





