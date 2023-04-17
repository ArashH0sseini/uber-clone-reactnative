import { View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <View className="p-5">
                <Image className="w-[100px] h-[100px]" style={{ resizeMode: 'contain' }} source={{
                    uri: "https://links.papareact.com/gzs"
                }} />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen