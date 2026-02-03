import { Pressable, TextInput, Image, ScrollView, Text } from 'react-native';
import logo from "../assets/images/check.png";

export default function Home() {
  return (
    <ScrollView>
      <Image source={logo} />
      <Text>Minhas tarefas</Text>
      <TextInput placeholder="Digite sua tarefa" />
      <Pressable onPress={() => alert("Pressionado!")}>
        <Text>Adicionar</Text>
      </Pressable>

    </ScrollView>
  );
}

