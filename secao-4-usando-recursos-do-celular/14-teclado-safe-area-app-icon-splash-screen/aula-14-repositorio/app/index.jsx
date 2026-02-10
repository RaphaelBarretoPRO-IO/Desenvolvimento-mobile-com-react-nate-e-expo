import { Image, Pressable, StyleSheet, Text, TextInput, View, Animated } from 'react-native';
import logo from "../assets/images/check.png";
import { colors } from "../styles/colors";
import { FlatList } from 'react-native';
import Task from '../components/task';
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaView } from 'react-native-safe-area-context'


const initialtasks = [
  { id: 1, completed: true, text: "Fazer café" },
  { id: 2, completed: false, text: "Estudar React Native" },
  { id: 3, completed: false, text: "Academia" }
];

export default function RootLayout() {

  const [tasks, setTasks] = useState(initialtasks)
  const [text, setText] = useState("")

  const addTask = () => {
    const newTask = { id: tasks.length + 1, completed: false, text }
    setTasks([...tasks, newTask])
    setText("")
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={estilo.mainContainer}>
        <View style={estilo.rowContainer}>
          <Image source={logo} style={estilo.image} />
          <Text style={estilo.title}>Minhas Tarefas</Text>
        </View>

        <View style={estilo.rowContainer}>
          <TextInput value={text} onChangeText={setText} style={estilo.input} placeholder="Adicione um item" />
          <Pressable
            onPress={addTask}
            style={({ pressed }) => [
              estilo.button,
              {
                backgroundColor: pressed ? "blue" : colors.primary
              }
            ]}
          >
            <Text style={estilo.buttonText}>+</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              text={item.text}
              initialCompleted={item.completed}
              deleteTask={() => setTasks(tasks.filter((t) => t.id !== item.id))}
            />
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
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