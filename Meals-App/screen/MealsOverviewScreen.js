import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../component/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
    const id = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0;
    });

    function renderMealItem(itemData) {
        const mealItemData = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemData} />
    }
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