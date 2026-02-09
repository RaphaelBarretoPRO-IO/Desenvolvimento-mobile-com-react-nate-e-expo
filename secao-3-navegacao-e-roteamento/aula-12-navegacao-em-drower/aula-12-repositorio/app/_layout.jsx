import { StatusBar } from "expo-status-bar"
import Drawer from "expo-router/drawer"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { FontAwesome } from "@expo/vector-icons"
import { router } from "expo-router"

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={({ color }) => (<FontAwesome name="user" size={20} color={color} />)}
        label="Usuário"
        onPress={() => router.push("/user")}
      />
    </DrawerContentScrollView>
  )
}

export default function RootLayout() {
  return (
    <>
      <Drawer
        drawerContent={() =>
          <CustomDrawerContent />
        }
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E94560"
          },
          headerTintColor: "#FFFFFF"
        }}
      >

        <Drawer.Screen name="tabs" options={{ headerShown: false }} />
        <Drawer.Screen name="user" options={{ headerTitle: "Usuário" }} />
        <Drawer.Screen name="+not-found" options={{ headerTitle: "Erro" }} />
      </Drawer>
      <StatusBar style="auto" />
    </>
  )
}








