import React from "react";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/ivanvieirace.png" }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ivan Vieira</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta de Novas Tecnologias em Programação{"\n"}
        {"\n"}
        Apaixonado em disseminar o conhecimento no Desenvolvimento de
        Aplicações.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora{"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
