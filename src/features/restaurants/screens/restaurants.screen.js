import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: 16px;
  width: 100%;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
  width: 100%;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // if StatusBar.currentHeight has a value -> use it
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
