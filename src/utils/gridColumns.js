const gridColumns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 30,
    sortable: false,
  },
  {
    field: 'date',
    headerName: '🗓 Date',
    type: 'date',
    minWidth: 140,
    editable: true,
    valueParser: (value) => value.toISOString().slice(0, 10),
  },
  {
    field: 'title',
    headerName: '🔗 Title',
    minWidth: 150,
    editable: true,
  },
  {
    field: 'notes',
    headerName: '📝 Notes',
    sortable: false,
    minWidth: 150,
    editable: true,
    flex: 1,
  },
  {
    field: 'amount',
    headerName: '💰 Amount',
    type: 'number',
    minWidth: 120,
    editable: true,
  },
];

export default gridColumns;
