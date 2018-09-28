// Сделал сущность для Задачи.
//var date = Ext.data.Types.DATE;

Ext.define('TodoApp.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'header', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'createDate', type: 'date'},
        {name: 'endDate', type: 'date'},
        {name: 'status', type: 'string'},
        {name: 'actions', type: 'string'}
    ],
    validations: [
        {type: 'length', field: 'header', max: 100},
        {type: 'length', field: 'description', max: 255}
    ]
});
