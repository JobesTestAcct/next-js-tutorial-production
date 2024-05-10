import Link from "next/link";

import prisma from "@/utils/db";


const PrismaPage = async () => {

  const prismaHandler = async () => {
    

    console.log('prisma example');

    // await prisma.task.create({
    //   data: {
    //     content: 'database entry',
    //   },
    // });

    const allTasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return allTasks;
  };

  const tasks = await prismaHandler();


  if (tasks.length === 0){
    return <h2
        className='mt-8 font-medium text-lg'
    >
        No tasks
    </h2>
  } else {
    return (
      <div>
        <h1 className="text-3xl">Prisma</h1>
        {tasks.map((task) => {
          return <h2
            className="text-xl py-2"
            key={task.id}
          >
            {task.content}
          </h2>
        })}
      </div>
    )
  }



}

export default PrismaPage;

