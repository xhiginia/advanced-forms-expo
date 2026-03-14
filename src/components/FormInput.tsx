import { MaterialIcons } from "@expo/vector-icons";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";

interface FormInputProps extends TextInputProps {
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
  touched?: boolean;
}

export default function FormInput({
  label,
  icon,
  error,
  touched,
  ...props
}: FormInputProps) {
  const borderColor = touched && error ? colors.danger : colors.gray;

  return (
    <View style={{ marginBottom: spacing.lg }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: spacing.xs,
        }}
      >
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color={colors.primary}
            style={{ marginRight: spacing.xs }}
          />
        )}

        <Text style={typography.label}>{label}</Text>
      </View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor,
          paddingVertical: spacing.sm + 2,
          paddingHorizontal: spacing.md,
          borderRadius: 6,
          fontSize: 16,
          backgroundColor: "#fff",
        }}
        {...props}
      />

      {touched && error && (
        <Text style={[typography.error, { marginTop: spacing.xs }]}>
          {error}
        </Text>
      )}
    </View>
  );
}
