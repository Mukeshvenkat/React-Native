import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../component/CategoryGridTile";

function renderItemHandler(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    )
}

function CategoriesScreen() {
    return (
        <View>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderItemHandler} numColumns={2} />
        </View>
    )
};

export default CategoriesScreen;