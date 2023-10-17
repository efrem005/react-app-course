import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../store/actions/filterActions.js";
import { selectFilters } from "../store/selectors/filterSelectors.js";
import { selectVisiblePositions } from "../store/selectors/positionSelectors.js";

const JobList = () => {

  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector(state =>
    selectVisiblePositions(state, currentFilters)
  )


  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
            key={item.id}
            handleAddFilter={handleAddFilter}
            {...item}
        />
      ))}
    </div>
  )
}

export {JobList};