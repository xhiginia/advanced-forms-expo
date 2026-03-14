import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, ScrollView, Text, View } from "react-native";
import FormInput from "../src/components/FormInput";
import { loginSchema } from "../src/forms/loginSchema";
import { colors } from "../src/styles/colors";
import { typography } from "../src/styles/typography";

export default function Login() {
  const buttonBase = {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  };

  const buttonShadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  };
  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 60 }}>
      <Text style={typography.title}>Sign In</Text>

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
            <FormInput
              label="Email"
              icon="email"
              placeholder="Enter email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />

            <FormInput
              label="Password"
              icon="lock"
              placeholder="Enter password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />

            <Pressable
              onPress={handleSubmit}
              disabled={!isValid}
              style={{
                backgroundColor: isValid ? colors.primary : "#9bbce0",
                padding: 15,
                borderRadius: 6,
                marginTop: 10,
              }}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 16 }}
              >
                Sign In
              </Text>
            </Pressable>

            <Link
              href="/register"
              style={{
                marginTop: 20,
                color: colors.primary,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Don't have an account? Sign Up
            </Link>

            <Link
              href="/"
              style={{
                marginTop: 10,
                color: colors.primary,
                textAlign: "center",
              }}
            >
              Back to Home
            </Link>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
