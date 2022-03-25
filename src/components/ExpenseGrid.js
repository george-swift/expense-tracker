import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { gridColumns } from '../utils';

const ExpenseGrid = ({ rows, editCell, deleteCell }) => {
  const columns = useMemo(() => [
    ...gridColumns,
    {
      field: 'actions',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => deleteCell(params.id)}
        />,
      ],
    },
  ]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      density="comfortable"
      rowsPerPageOptions={[10]}
      onCellEditCommit={editCell}
      disableSelectionOnClick
      disableColumnSelector
      disableColumnFilter
      autoHeight
    />
  );
};

ExpenseGrid.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
  editCell: PropTypes.func.isRequired,
  deleteCell: PropTypes.func.isRequired,
};

export default ExpenseGrid;
