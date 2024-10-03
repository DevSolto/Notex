import { z } from 'zod'

export const createReportSchema = z.object({
    title: z.string().min(1, "O título é obrigatório!"),
    description: z.string().min(1, "A descrição é obrigatória!"),
    creatorId: z.string().cuid()
})

export const updateReportSchema = z.object({
    title: z.string().min(1, "O título é obrigatório!").optional(),
    description: z.string().min(1, "A descrição é obrigatória!").optional()
})