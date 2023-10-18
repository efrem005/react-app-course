import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";
import { connect } from "react-redux";
import { clearFilter, removeFilter } from "../store/actions/filterActions.js";


const _FilterPanel = ({currentFilters,removeFilter,clearFilter}) => {

    if (!currentFilters.length) {
        return null
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter =>
                        <Badge key={filter} variant="clearable" onClear={() => removeFilter(filter)}>{filter}</Badge>
                    )}
                </Stack>

                <button className="link" onClick={clearFilter}>Clear</button>
            </div>
        </Card>
    );
};

export const FilterPanel = connect(
    (state) => ({
        currentFilters: state.filters
    }),
    {removeFilter,clearFilter}
)(_FilterPanel);