Ext.define('ToDoApp.store.StatusStore', {
    extend: 'Ext.data.Store',
    model: 'ToDoApp.model.Task',
    fields: ['value', 'status_id'],
    data: [
        {value: '0', status_id: 'Active'},
        {value: '1', status_id: 'Done'}
    ]
});