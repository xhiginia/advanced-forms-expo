import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome</Text>

      <Link href="/login" style={{ fontSize: 18, color: "blue" }}>
        Go to Login
      </Link>

      <Link href="/register" style={{ fontSize: 18, color: "blue" }}>
        Create an Account
      </Link>

      <Link href="/employee" style={{ fontSize: 18, color: "blue" }}>
        Employee Information Form
      </Link>
    </View>
  );
}
