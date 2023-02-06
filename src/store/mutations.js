import state from "./state.js";

export function setSearchMeals(state, meals) {
    state.searchMeals = meals;
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals;
}

export function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals;
}