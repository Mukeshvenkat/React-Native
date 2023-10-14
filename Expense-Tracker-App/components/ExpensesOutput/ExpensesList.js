import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
    function renderListHandler(itemData) {
        return <ExpenseItem {...itemData.item} />
    }
    return (
        <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderListHandler} />
    )
};

export default ExpensesList;