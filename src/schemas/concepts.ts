import { z } from 'zod'

export const createConceptsSchema = z.object({
    url: z.string().min(1, "A url é obrigatório!").url(),
    creatorId: z.string().min(1, "O id do criador é obrigatório!").cuid(),
    studentId: z.string().min(1, "O id do estudante é obrigatório!").cuid()
})

export const updateConceptsSchema = z.object({
    url: z.string().min(1, "A url é obrigatório!").url().optional(),
    creatorId: z.string().min(1, "O id do criador é obrigatório!").cuid().optional(),
    studentId: z.string().min(1, "O id do estudante é obrigatório!").cuid().optional()
})