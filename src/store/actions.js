import axiosClient from "../../axiosClient.js";

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            // debugger;Salmon
            commit('setSearchMeals', data.meals)
        })
}

export function mealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
}

export function mealsByIngredient({commit}, ingredient) {
    axiosClient.get(`search.php?f=${ingredient}`)
        .then(({data}) => {
            commit('setMealsByIngredient', data.meals)
        })
}