import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import logo from "../assets/images/check.png";
import { colors } from "../constants/colors";

export default function RootLayout() {
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.rowContainer}>
        <Image source={logo} style={estilo.image} />
        <Text style={estilo.title}>
          Minhas Tarefas
        </Text>
      </View>
      <View style={estilo.rowContainer}>
        <TextInput style={estilo.input} placeholder="Adicione um item" />
        <Pressable
          onPress={() => alert("Oi")}
          style={({ pressed }) => [
            estilo.button,
            {
              backgroundColor: pressed
                ? "blue"
                : colors.primary
            }
          ]}
        >
          <Text style={estilo.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  image: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary,
    marginLeft: 10
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    lineHeight: 24,
    textAlign: "center"
  },
  mainContainer: {
    padding: 20
  }




});

