import { JobPosition } from './JobPosition';
import { connect } from "react-redux";
import { addFilter } from "../store/actions/filterActions.js";
import { selectVisiblePositions } from "../store/selectors/positionSelectors.js";

const _JobList = ({positions, addFilter}) => {

  const handleAddFilter = (filter) => {
    addFilter(filter)
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

export const JobList = connect(
    (state) => ({
      positions: selectVisiblePositions(state, state.filters)
    }),
    {addFilter}
)(_JobList);