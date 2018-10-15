// Сделал сущность для Задачи.
Ext.define('ToDoApp.model.Task', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'task', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'createDate', type: 'date'},
        {name: 'endDate', type: 'date'},
        {name: 'status_id', type: 'int'},
        {name: 'actions', type: 'string'}
    ],
    validations: [
        {type: 'length', field: 'header', max: 100},
        {type: 'length', field: 'description', max: 255}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'newtasks'
    }
});

