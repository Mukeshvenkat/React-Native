import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate } from "../../util/dateUtils";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, amount, date }) {
    const navigation = useNavigation();

    const expenseItemHandler = () => {
        navigation.navigate('ManageExpense', {
            expenseId: id
        })
    }
    return (
        <Pressable onPress={expenseItemHandler} style={(pressed) => pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
};

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        marginVertical: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    amountContainer: {
        paddingHorizontal: 4,
        paddingVertical: 12,
        backgroundColor: GlobalStyles.colors.primary50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    }
})