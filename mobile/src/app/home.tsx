import { useEffect, useState } from "react";
import { View, Alert, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { api } from "@/services/api";
import { Places } from "@/components/places";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import * as Location from 'expo-location';
import { colors, fontFamily } from "@/styles/theme"
import { router } from "expo-router";

type MarketProps = PlaceProps & {
    latitude: number
    longitude: number
}

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494,
}

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    const [markets, setMarkets] = useState<MarketProps[]>([])

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possivel carregar as categorias")
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }

            const { data } = await api.get("/markets/category/" + category)
            setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Estabelecimentos", "Não foi possivel carregar os estabelecimentos.")
        }
    }

    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();

            if (granted) {
                const location = await Location.getCurrentPositionAsync();
                console.log(location);
            }
        } catch (error) {
            console.log(error)
        }
    }
    // carregar as categorias
    useEffect(() => {
        fetchCategories()
    }, [])

    // carregar os estabelecimentos após selecionar a categoria
    useEffect(() => {
        fetchMarkets()
    }, [category])

    return (
        <View style={{ flex: 1}}>
            <Categories
                data={categories}
                onSelect={setCategory}
                selected={category}
            />

            <MapView style={{ flex: 1 }} showsUserLocation={true} zoomEnabled={true}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude
                    }}
                    image={require("@/assets/location.png")}
                />
                {
                    markets.map((item) => (
                        <Marker
                            key={item.id}
                            identifier={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}
                            image={require("@/assets/pin.png")}
                        >
                            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: fontFamily.medium,
                                            color: colors.gray[600],
                                            fontSize: 14
                                        }}
                                    >
                                        {item.name}
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily: fontFamily.regular,
                                            color: colors.gray[600],
                                            fontSize: 12
                                        }}
                                    >
                                        {item.address}
                                    </Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>

            <Places data={markets} />
        </View>
    )
}