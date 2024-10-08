import { z } from 'zod'

import { cpf } from "easy-cpf"

export const createUserSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório!"),
    avatarUrl: z.string().url(),
    email: z.string().min(1, "O email é obrigatório!").email("Esse email não é valido"),
    cpf: z.string().min(11, "Esse cpf não é valido!").refine(cpf.validate),
    password: z.string().min(8, "Digite um senha com no mínimo 8 caracteres"),
    role: z.enum(["STUDENT", "TEACHER", "ADMIN"]),
    phone: z.string().min(8, "Digite um telefone valido")
})
export const updateUserSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório!").optional(),
    avatarUrl: z.string().url().optional(),
    email: z.string().min(1, "O email é obrigatório!").email("Esse email não é valido").optional(),
    cpf: z.string().min(11, "Esse cpf não é valido!").refine(cpf.validate).optional(),
    password: z.string().min(8, "Digite um senha com no mínimo 8 caracteres").optional(),
    role: z.enum(["STUDENT", "TEACHER", "ADMIN"]).optional(),
    phone: z.string().min(8, "Digite um telefone valido").optional()
})