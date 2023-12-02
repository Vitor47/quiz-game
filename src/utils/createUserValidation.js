import * as yup from "yup";

export const createGameSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: yup
    .string()
    .email("Deve estar no formato de e-mail")
    .required("O e-mail é obrigatório"),
  numberOfQuestions: yup
    .number()
    .required("O número de questões é obrigatório"),
  difficulty: yup.number().required("A dificuldade é obrigatória"),
});
