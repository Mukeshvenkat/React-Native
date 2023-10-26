import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { OutlinedButton } from "../UI/OutlinedButton";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { useState } from "react";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";

export const LocationPicker = () => {
    const [pickedLocation, setPickedLocation] = useState({});
    const navigation = useNavigation();
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    const verifyPermission = async () => {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permission', 'You need to grant location permission to use this app.');
            return false;
        }

        return true;
    }

    const locateUserHandler = async () => {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    }

    const pickOnMapHandler = () => {
        navigation.navigate('Map');
    };

    let mapImagePreview = <Text>No Map preview add a location</Text>

    if (pickedLocation) {
        mapImagePreview = <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} />
    }
    return (
        <View>
            <View style={styles.locationPreview}>{mapImagePreview}</View>
            <View style={styles.actions}>
                <OutlinedButton icon='location' onPress={locateUserHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon='map' onPress={pickOnMapHandler}>Pick On Map</OutlinedButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    locationPreview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

