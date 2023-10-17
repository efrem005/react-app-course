import { TheHeader } from "./components/TheHeader.jsx";
import { FilterPanel } from "./components/FilterPanel.jsx";
import { JobList } from "./components/JobList.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPositions } from './store/actions/positionActions.js'

import data from './mock/data.json'

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addPositions(data))
    }, []);

  return (
      <>
          <TheHeader />
          <div className='container'>
              <FilterPanel />
              <JobList />
          </div>
      </>
  )
}

export default App
