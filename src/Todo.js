import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './constants';

const Todo = ({ id, title, tag, userId, status, priority }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TODO,
    item: { id, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      id="todo1"
      className={`Todo ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      
      <div>
        <div className='todo-top'>
        <div>{id}</div>
        <div><img height={'25px'} src ='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' alt = 'bg'/></div>
        </div>
        <div style={{height:'35px'}}>
        <p style={{fontSize:'13px', fontWeight:'bold'}}>{title}</p>

        </div>
        {/* <div><strong>User ID:</strong> {userId}</div>
        <div><strong>Status:</strong> {status}</div>
        <div><strong>Priority:</strong> {priority}</div> */}
      </div>
      <div>
      <div className='todo-bottom'>
      <div><span className="material-icons">
        signal_cellular_alt
      </span></div>
      <div style={{color:'gray',  marginLeft:'10px'}}>
      <img height={"10px"} style={{marginRight:'4px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png"/>

      {tag.join(', ')}
      </div>
    </div> 
      </div>
    </div>
  );
};

export default Todo;
