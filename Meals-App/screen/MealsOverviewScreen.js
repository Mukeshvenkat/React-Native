import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../component/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const id = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0;
    });

    function renderMealItem(itemData) {
        const mealItemData = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemData} />
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [id, navigation])
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})