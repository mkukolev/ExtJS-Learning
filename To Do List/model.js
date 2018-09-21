// Сделал сущность для Задачи.
//var date = Ext.data.Types.DATE;

Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'header', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'createDate', type: 'date'},
        {name: 'endDate', type: 'date'},
        {name: 'status', type: 'string'}
    ],
    validations: [
        {type: 'length', field: 'header', max: 100},
        {type: 'length', field: 'description', max: 255}
    ]
});
