
import db  from "../config/database";

export const exerciseService = {
    async getAll() {
        return await db.ejercicios.findMany({   
        })
    }, 
    async getByMuscleGroup (id: number)  {
        return await db.ejercicios.findMany({
            where: {muscle_group_id:id},
        })
    },

    async getByMaterial (id: number) {
        return await db.ejercicios.findMany({
            where: {material_id:id},
        })
    },

    getAllByUserId(userId: number) {
        return db.ejercicios.findMany({
            where: {
                OR: [
                    { user_id: null },
                    { user_id: userId }
                ]
            }
        });
    }
    
}

export const muscleGroupService = {
    async getAll() {
        return await db.grupo_muscular.findMany({   
        })
    },
    async getById(id: number) {
        return await db.grupo_muscular.findUnique({
            where: {muscle_group_id:id}
        })
    }
}

export const materialService = {
    async getAll() {
        return await db.material.findMany({   
        })
    },

    async getById(id: number) {
        return await db.material.findUnique({
            where: {material_id:id}
        })
    }
}

export const typeRegisterService = {
    async getAll() {
        return await db.tipo_de_registro.findMany({   
        })
    }
}