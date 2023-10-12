import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetail from "./MealDetail";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => { pressed ? styles.buttonPressed : null }} onPress={selectMealItemHandler}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </Pressable>
            <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
        </View>
    )
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.5
    }
})