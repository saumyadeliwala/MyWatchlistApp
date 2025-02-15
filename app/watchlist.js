import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const windowWidth = Dimensions.get('window').width;

const stocks = [
    { name: "RELIANCE", price: "3,000.00", change: "+5.35 (+0.12%)", color: "green" },
    { name: "MRF", price: "1,23,000.00", change: "-300.35 (-0.21%)", color: "red" },
    { name: "TATAINVEST", price: "3,600.00", change: "+15.35 (+0.18%)", color: "green" },
    { name: "TATASTEEL", price: "1,600.00", change: "+5.35 (+0.12%)", color: "green" },
    { name: "ADANIENT", price: "3,500.00", change: "+1.60 (+0.06%)", color: "green" },
    { name: "PAYTM", price: "500.00", change: "-5.35 (-0.12%)", color: "red" },
    { name: "NYKAA", price: "1,000.00", change: "+8.95 (+0.08%)", color: "green" },
    { name: "ASIANPAINT", price: "3,000.00", change: "", color: "red" },
];

//Watchst component
const Watchlist_tab = () => (
    <FlatList
        data={stocks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <View style={styles.stockItem}>
                <View>
                    <Text style={styles.stockName}>{item.name}</Text>
                    <Text style={styles.marketText}>NSE | EQ</Text>
                </View>
                <View style={styles.priceSection}>
                    <Text style={[styles.stockPrice, { color: item.color }]}>{item.price}</Text>
                    {item.change ? <Text style={[styles.stockChange, { color: item.color }]}>{item.change}</Text> : null}
                </View>
            </View>
        )}
    />
);

// CustomTabBar Component
const CustomTabBar = ({ navigationState, position, setIndex }) => {
    const tabItemWidth = windowWidth / navigationState.routes.length;

    return (
        <View style={[styles.tabBar, { width: windowWidth }]}>
            
                {navigationState.routes.map((route, index) => {
                    const isActive = index === navigationState.index;
                    
                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => setIndex(index)}
                            style={[styles.tabItem, { width: tabItemWidth }]}
                        >
                            <Text 
                                style={[
                                    styles.tabLabel,
                                    { 
                                        color: isActive ? 'black' : 'grey',
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    }
                                ]}
                            >
                                {route.title}
                            </Text>
                            {isActive && <View style={[styles.tabIndicator, { width: tabItemWidth }]} />}
                        </TouchableOpacity>
                    );
                })}
            
        </View>
    );
};

export default function WatchlistScreen() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "watchlist1", title: "Watchlist 1" },
        { key: "watchlist2", title: "Watchlist 2" },
        { key: "watchlist3", title: "Watchlist 3" },
        { key: "watchlist4", title: "Watchlist 4" },
    ]);

    const renderScene = SceneMap({
        watchlist1: Watchlist_tab,
        watchlist2: Watchlist_tab,
        watchlist3: Watchlist_tab,
        watchlist4: Watchlist_tab,
    });

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Watchlist</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => (
                    <CustomTabBar {...props} setIndex={setIndex} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 10,
    },
     tabBar: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",

    },

    tabItem: {
        padding: 5,
    },
    tabLabel: {
        textAlign: 'center',
        fontSize: 15, 
        paddingBottom: 5,
    },
    tabIndicator: {
        width: '100%', 
        height: 3, 
        backgroundColor: 'black', 
        position: 'absolute',
        bottom: 0,
    },
    stockItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    stockName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    marketText: {
        fontSize: 12,
        color: "gray",
    },
    priceSection: {
        alignItems: "flex-end",
    },
    stockPrice: {
        fontSize: 14,
        fontWeight: "bold",
    },
    stockChange: {
        fontSize: 12,
        marginTop: 5,
    },
});