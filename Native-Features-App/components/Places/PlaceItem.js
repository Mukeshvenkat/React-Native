import { Image, Pressable, Text, View } from "react-native"

export const PlaceItem = ({ place }) => {
    return (
        <Pressable>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
};