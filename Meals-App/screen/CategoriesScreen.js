import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../component/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    function renderItemHandler(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
        )
    }
    return (
        <View>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderItemHandler} numColumns={2} />
        </View>
    )
};

export default CategoriesScreen;