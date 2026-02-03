import { Pressable, TextInput, Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import logo from "../assets/images/check.png";
import { colors } from "../constants/colors";

export default function Home() {
  return (
    <ScrollView>
      <View style={estilo.rowContainer}>
        <Image source={logo} style={estilo.image} />
        <Text style={estilo.title}>Minhas tarefas</Text>
      </View>
      <TextInput style={estilo.input} placeholder="Digite sua tarefa" />
      <Pressable
        onPress={() => alert("Pressionado")}
        style={({ pressed }) => [
          estilo.button,
          {
            backgroundColor: pressed ? "blue" : colors.primary
          }
        ]}
      >
        <Text style={estilo.buttonText}>+</Text>
      </Pressable>


    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary,
    marginLeft: 10
  },
  container: {
    display: "flex"
    // padrão: flexDirection: "column"
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
  }




});

