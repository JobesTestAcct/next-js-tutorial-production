'use server';

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}

export const createTask = async (formData) => {
    
    const content = formData.get('content');

    await prisma.task.create({
        data: {
            content,
        },
    });

    revalidatePath('/tasks');
}

export const createTaskCustom = async (formData) => {
    
    const content = formData.get('content');

    await prisma.task.create({
        data: {
            content,
        },
    });

    revalidatePath('/tasks');
}

export const deleteTask = async (formData) => {
    
    const id = formData.get('id');

    await prisma.task.delete({
        where: {
            id
        },
    });

    revalidatePath('/tasks');
}


export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: {
            id,
        }
    });
}


export const editTask = async (formData) => {
    
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {
            id
        },
        data: {
            content,
            completed: completed === 'on' ? true : false
        },
    });

    redirect('/tasks');


}