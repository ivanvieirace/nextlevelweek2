import React from "react";
import { View } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import { ScrollView } from "react-native-gesture-handler";
import TeacherItem from "../../components/TeacherItem";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meu Proffys Favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 6,
          paddingBottom: 6,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
