import { Link } from "expo-router";
import { Formik } from "formik";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { employeeSchema } from "../src/forms/employeeSchema";

export default function Employee() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Employee Information Form
      </Text>

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
            {/* Full Name */}
            <Text>Full Name</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor:
                  touched.fullName && errors.fullName ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter full name"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={{ color: "red" }}>{errors.fullName}</Text>
            )}

            {/* Email */}
            <Text style={{ marginTop: 15 }}>Email</Text>
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

            {/* Phone */}
            <Text style={{ marginTop: 15 }}>Phone Number</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: touched.phone && errors.phone ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter phone number"
              keyboardType="number-pad"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <Text style={{ color: "red" }}>{errors.phone}</Text>
            )}

            {/* Employee ID */}
            <Text style={{ marginTop: 15 }}>Employee ID</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor:
                  touched.employeeId && errors.employeeId ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter employee ID"
              onChangeText={handleChange("employeeId")}
              onBlur={handleBlur("employeeId")}
              value={values.employeeId}
            />
            {touched.employeeId && errors.employeeId && (
              <Text style={{ color: "red" }}>{errors.employeeId}</Text>
            )}

            {/* Position */}
            <Text style={{ marginTop: 15 }}>Position</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor:
                  touched.position && errors.position ? "red" : "#ccc",
                padding: 10,
                borderRadius: 6,
                marginBottom: 5,
              }}
              placeholder="Enter position"
              onChangeText={handleChange("position")}
              onBlur={handleBlur("position")}
              value={values.position}
            />
            {touched.position && errors.position && (
              <Text style={{ color: "red" }}>{errors.position}</Text>
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
                Submit
              </Text>
            </Pressable>

            {/* Navigation */}
            <Link
              href="/"
              style={{ marginTop: 20, color: "blue", textAlign: "center" }}
            >
              Back to Home
            </Link>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
