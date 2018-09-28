// Сделал store для комбобокса с возможностью смены статуса задачи.
Ext.create('ToDoApp.store.statusActiveStore', {
    extend: 'Ext.data.Store',
    fields: ['val', 'name'],
    data: [
        {value: '0', name: 'Active'},
        {value: '1', name: 'Done'}
    ]
});