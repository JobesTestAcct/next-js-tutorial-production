'use client';

import { createTaskCustom } from "@/utils/actions";
import {useFormStatus} from 'react-dom';


const TaskFormCustom = () => {

  const SubmitButton = () => {
    const {pending} = useFormStatus(); 


    return(
      <button
        className='btn btn-primary join-item'
        type="submit"
        disabled={pending}
      >
       {pending ? 'Sent...': 'Submit'}  
      </button>
    )
  }

  return (
    <form action={createTaskCustom}>
        <div className='join w-full'>
            <input 
                className='input input-bordered join-item w-full'
                type="text" 
                placeholder='enter task here...'
                name='content'
                required
            />
            <SubmitButton/>
        </div>
    </form>
  )
}

export default TaskFormCustom