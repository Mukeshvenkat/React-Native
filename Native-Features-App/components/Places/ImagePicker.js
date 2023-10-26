import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";
import { OutlinedButton } from "../UI/OutlinedButton";

export const ImagePicker = () => {
    const [pickedImaged, setPickedImage] = useState('');
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    const verifyPermission = async () => {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permission', 'You need to grant camera permission to use this app.');
            return false;
        }

        return true;
    }
    const takeImageHandler = async () => {
        const permission = await verifyPermission();

        if (!permission) {
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        console.log(image);
        setPickedImage(image.uri);
    }

    let imagePreview = pickedImaged;

    if (imagePreview === '') {
        imagePreview = <Text>No image found</Text>
    } else {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImaged }} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image</OutlinedButton>
        </View>
    )
};

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

