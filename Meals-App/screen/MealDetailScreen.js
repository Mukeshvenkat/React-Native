import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../component/MealDetail";
import Subtitle from "../component/MealItem/Subtitle";
import List from "../component/MealItem/List";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeals = MEALS.find((item) => item.id === mealId);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeals.title}</Text>
            <MealDetail duration={selectedMeals.duration} complexity={selectedMeals.complexity} affordability={selectedMeals.affordability} textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeals.ingredients} />
                    <Subtitle>Step</Subtitle>
                    <List data={selectedMeals.steps} />
                </View>
            </View>
        </ScrollView>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        margin: 8
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})