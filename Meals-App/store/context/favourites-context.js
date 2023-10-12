import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: () => { },
    removeFavourite: () => { }
})

function FavouritesContextProvider({ children }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    function addFavourite(id) {
        setFavouriteMealIds((currentMealIds) => [...currentMealIds, id]);
    }

    function removeFavourite(id) {
        setFavouriteMealIds((currentMealIds) => currentMealIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }
    return (
        <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
    )
};

export default FavouritesContextProvider;