import { Alert, Button, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

export const ImagePicker = () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    const verifyPermission = async () => {
        await askPermissionsAsync();
        if (cameraPermissionInformation === PermissionStatus.UNDETERMINED) {
            const response = await requestPermission();
            return response.granted;
        }

        if (cameraPermissionInformation === PermissionStatus.DENIED) {
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
    }

    return (
        <View>
            <View></View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    )
};

