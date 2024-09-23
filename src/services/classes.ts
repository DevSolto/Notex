import { createClassModel, getClassesModel, getClassesByIdModel, updateClassModel, getClassAndDeleteModel } from "../models/classes";
import { CreateClassParams, updateClassParams } from "../types/class";

export async function getClassesService() {
    return await getClassesModel();
}

export async function getClassesByIdService(id: string) {
    return await getClassesByIdModel(id)
}

export async function createClassService(createClassParams: CreateClassParams) {

    const createClass = await createClassModel({
        ...createClassParams
    })
    return createClass
}

export async function updateClassService(id: string, updateClassParams: updateClassParams) {
    if (updateClassParams.code) {
        const isCodeInUse = await getClassesByIdModel(updateClassParams.code)
        if (isCodeInUse) {
            return ({
                message: "Este código está sendo usado por outra turma"
            })
        }
    }

    return await updateClassModel(id, updateClassParams)
}

export async function getClassAndDeleteService(id: string) {

    const getAndDelete = await getClassAndDeleteModel(id)

    return getAndDelete
}