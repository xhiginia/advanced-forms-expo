import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { loginSchema } from "../src/forms/loginSchema";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Sign In
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log("Login:", values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View>
            {/* Email */}
            <Text>Email</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: touched.email && errors.email ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}

            {/* Password */}
            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor:
                  touched.password && errors.password ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}

            {/* Submit */}
            <Pressable
              onPress={handleSubmit}
              disabled={!isValid}
              style={{
                backgroundColor: isValid ? "#007bff" : "#9bbce0",
                padding: 15,
                borderRadius: 6,
                marginTop: 25,
              }}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 16 }}
              >
                Sign In
              </Text>
            </Pressable>

            {/* Navigation */}
            <Link
              href="/register"
              style={{ marginTop: 20, color: "blue", textAlign: "center" }}
            >
              Don't have an account? Sign Up
            </Link>

            <Link
              href="/"
              style={{ marginTop: 10, color: "blue", textAlign: "center" }}
            >
              Back to Home
            </Link>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
