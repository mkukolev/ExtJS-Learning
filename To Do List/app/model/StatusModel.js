Ext.define('ToDoApp.model.StatusModel', {
    extend: 'Ext.data.Store',
    fields:[
        {name: 'value', type: 'int'},
        {name: 'status', type: 'string'}
    ]
})