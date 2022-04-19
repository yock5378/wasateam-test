import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { getSashimiList } from '~/helper/api';
import Fish0 from '~/assets/0.jpg';
import Fish1 from '~/assets/1.jpg';
import Fish2 from '~/assets/2.jpg';
import Fish3 from '~/assets/3.jpg';
import Fish4 from '~/assets/4.jpg';
import Fish5 from '~/assets/5.jpg';
import Fish6 from '~/assets/6.jpg';
import Fish7 from '~/assets/7.jpg';

const fishImage = { Fish0, Fish1, Fish2, Fish3, Fish4, Fish5, Fish6, Fish7 };

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#56733E",
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardFirst: {
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  textContainer: {
    flex: 2,
    marginHorizontal: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
  }
});

const ListingScreen = () => {
  const [sashimi, setSashimi] = useState(null);

  const getSashimi = async () => {
    try {
        const rep = await getSashimiList();
        setSashimi(rep.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getSashimi();
  }, []);

  return (
    <FlatList
      data={sashimi}
      renderItem={({item, index}) => {
        return (
          <View style={index ? styles.card : [styles.card, styles.cardFirst]}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={fishImage[item.image]} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description} numberOfLines={4} ellipsizeMode={'tail'}>{item.description}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ListingScreen;