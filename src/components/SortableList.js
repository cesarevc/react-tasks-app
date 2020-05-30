import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './SortableItem';

const SortableList = SortableContainer (({tasks}) => {
  console.log('chaviria',tasks)
    return (
      <ul className="list-group">
        {tasks.map((task, i) => <SortableItem  task={task} index={i} key={i} />)}
      </ul>)
})
  
export default SortableList;