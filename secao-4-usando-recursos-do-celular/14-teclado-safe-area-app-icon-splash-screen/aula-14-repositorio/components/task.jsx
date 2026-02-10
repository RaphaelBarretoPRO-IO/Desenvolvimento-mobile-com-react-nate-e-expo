import { Ionicons } from "@expo/vector-icons"
import { Animated, StyleSheet, Text } from "react-native"
import { colors } from "../styles/colors"
import { useState, useRef } from "react"
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler"

export default function Task({ text, initialCompleted, deleteTask }) {
  const [completed, setCompleted] = useState(initialCompleted)
  const swipe = useRef(new Animated.Value(0)).current
  const flingGesture = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      Animated.timing(swipe, {
        toValue: 500,
        duration: 600,
        useNativeDriver: false
      }).start(() => deleteTask())
    })

  return (
    <GestureDetector gesture={flingGesture}>
      <Animated.View style={[style.rowContainer, { transform: [{ translateX: swipe }] }]}>
        <Ionicons
          name="checkmark-circle"
          size={32}
          color={completed ? colors.primary : "gray"}
          onPress={() => setCompleted(!completed)}
        />
        <Text>{text}</Text>
      </Animated.View>
    </GestureDetector>
  )
}

// Definição dos estilos visuais do componente
const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",   // Alinha ícone e texto horizontalmente
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    elevation: 3,           // Sombra para Android
    shadowColor: "#000000", // Configurações de sombra para iOS (shadow...)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10
  }
})




