import axiosClient from "../../axiosClient.js";

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            // debugger;Salmon
            commit('setSearchMeals', data.meals)
        })
}
