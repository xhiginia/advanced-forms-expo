import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, ScrollView, Text, View } from "react-native";
import FormInput from "../src/components/FormInput";
import { employeeSchema } from "../src/forms/employeeSchema";
import { colors } from "../src/styles/colors";
import { typography } from "../src/styles/typography";

export default function Employee() {
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
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={typography.title}>Employee Information Form</Text>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          employeeId: "",
          position: "",
        }}
        validationSchema={employeeSchema}
        onSubmit={(values) => console.log("Employee Submitted:", values)}
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
              label="Phone Number"
              icon="phone"
              placeholder="Enter phone number"
              keyboardType="number-pad"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
            />

            <FormInput
              label="Employee ID"
              icon="badge"
              placeholder="Enter employee ID"
              onChangeText={handleChange("employeeId")}
              onBlur={handleBlur("employeeId")}
              value={values.employeeId}
              error={errors.employeeId}
              touched={touched.employeeId}
            />

            <FormInput
              label="Position"
              icon="work"
              placeholder="Enter position"
              onChangeText={handleChange("position")}
              onBlur={handleBlur("position")}
              value={values.position}
              error={errors.position}
              touched={touched.position}
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
                Submit
              </Text>
            </Pressable>

            <Link
              href="/"
              style={{
                marginTop: 20,
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
