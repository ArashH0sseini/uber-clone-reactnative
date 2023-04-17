import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: '123',
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: '456',
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]
const NavOptions = () => {
    return (
        <FlatList data={data} horizontal keyExtractor={(item) => item.id} renderItem={({ item }) => (
            <TouchableOpacity
                className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
            >
                <View>
                    <Image
                        className="w-28 h-28"
                        style={{ resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                    <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                    <Icon
                        className="p-2 bg-black rounded-full w-10 mt-4"
                        type="antdesign" color="white" name="arrowright"
                    />
                </View>
            </TouchableOpacity>
        )} />
    );
}

export default NavOptions;