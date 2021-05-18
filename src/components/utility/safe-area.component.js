import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // if StatusBar.currentHeight has a value -> use it
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
