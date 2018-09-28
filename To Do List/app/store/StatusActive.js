// Сделал store для комбобокса с возможностью смены статуса задачи.
Ext.define('ToDoApp.store.StatusActive', {
    extend: 'Ext.data.Store',
    fields: ['val', 'name'],
    data: [
        {value: '0', name: 'Active'},
        {value: '1', name: 'Done'}
    ]
});
var stActive = Ext.create('ToDoApp.store.StatusActive');