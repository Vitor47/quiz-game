import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: yupResolver(createTaskSchema),
  });

  function handleLogin() {
    signIn(email, password);
  }
  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    name={name}
                    placeholder={Name}
                    onChange={onChange}
                    value={value}
                    error={error}
                    secureTextEntry={false}
                  />
                </>
              )}
              name={name}
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    name={email}
                    placeholder="Email"
                    onChange={onChange}
                    value={value}
                    error={error}
                    secureTextEntry={false}
                  />
                </>
              )}
              name={email}
            />
          </InputContainer>

          <CustomSubmitButton
            activeOpacity={0.8}
            onPress={handleLogin}
            text="Start"
          />
        </FormArea>
      </ScrollViewContent>
    </Container>
  );
}
