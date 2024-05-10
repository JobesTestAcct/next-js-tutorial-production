import { createTask } from "@/utils/actions";

const TaskForm = () => {

  return (
    <form action={createTask}>
        <div className='join w-full'>
            <input 
                className='input input-bordered join-item w-full'
                type="text" 
                placeholder='enter task here...'
                name='content'
                required
            />
            <button
            className='btn btn-primary join-item'
            >
                Submit
            </button>
        </div>
    </form>
  )
}

export default TaskForm