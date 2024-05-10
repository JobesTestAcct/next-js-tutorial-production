'use client';

import { editTask } from '@/utils/actions';

const EditForm = ({task}) => {

    const {id, completed, content} = task;

  return (
    <form 
        className='max-w-sm p-12 border border-base-300 rounded-lg'
        action={editTask}
    >
        <input type="hidden" name='id' value={id}/>
        {/* content */}
        <input 
            className='input input-bordered w-full'
            type="text" 
            name="content" 
            defaultValue={content} 
            required
        />
        {/* completed */}
        <div className="form-control my-4">
            <label className="label cursor-pointer" htmlFor="completed">
                <span className="label-text">
                    completed
                </span>
                <input 
                    className="checkbox checkbox-primary checkbox-sm" 
                    type="checkbox" 
                    name='completed' 
                    id='completed' 
                    defaultChecked={completed}
                />
            </label>
        </div>
        <button 
            className='btn btn-primary btn-block btn-sm'
            type='submit'
        >
            edit
        </button>
    </form>
  )
}

export default EditForm