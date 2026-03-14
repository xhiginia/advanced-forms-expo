import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, ScrollView, Text, View } from "react-native";
import FormInput from "../src/components/FormInput";
import { registerSchema } from "../src/forms/registerSchema";
import { colors } from "../src/styles/colors";
import { typography } from "../src/styles/typography";

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

export default function Register() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={typography.title}>Create an Account</Text>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => console.log("Registered:", values)}
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
              label="Full Name"
              icon="person"
              placeholder="Enter full name"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
              error={errors.fullName}
              touched={touched.fullName}
            />

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

            <FormInput
              label="Confirm Password"
              icon="lock-outline"
              placeholder="Confirm password"
              secureTextEntry
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />

            <Pressable
              onPress={handleSubmit}
              disabled={!isValid}
              style={({ pressed }) => [
                buttonBase,
                buttonShadow,
                {
                  backgroundColor: !isValid
                    ? "#bcd4f5"
                    : pressed
                      ? "#1f8a3a"
                      : colors.success,
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Sign Up
              </Text>
            </Pressable>

            <View style={{ marginTop: 30 }}>
              <Link
                href="/login"
                style={{
                  textAlign: "center",
                  color: colors.primary,
                  fontSize: 15,
                  marginBottom: 10,
                }}
              >
                Already have an account? Sign In
              </Link>

              <Link
                href="/"
                style={{
                  textAlign: "center",
                  color: colors.primary,
                  fontSize: 15,
                }}
              >
                Back to Home
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
