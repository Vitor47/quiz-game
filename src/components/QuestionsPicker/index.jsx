import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from "./styles";

const QuestionPicker = ({ control, value, onChange, errors }) => {
  return (
    <>
      <PickerContainer style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker
              style={{
                padding: "2%",
                color: "#fff",
              }}
              selectedValue={value}
              onValueChange={onChange}
            >
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
            </Picker>
          )}
          name="numberOfQuestions"
        />
      </PickerContainer>
      {errors.numberOfQuestions && (
        <ErrorText>{errors.numberOfQuestions.message}</ErrorText>
      )}
    </>
  );
};

export default QuestionPicker;
