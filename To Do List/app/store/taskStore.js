// Сделал store с полями, сюда в data должны записываться задачи для ту-ду-листа.
Ext.define('ToDoApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    model: 'ToDoApp.model.Task',
    autoLoad: false,
    remoteFilter: false,
    pageSize: 15,
    filters: [
        {property: 'id', value: ''},
        {property: 'task', value: ''},
        {property: 'description', value: ''},
        {property: 'createDate', value: ''},
        {property: 'endDate', value: ''},
        {property: 'status_id', value: ''}
    ]

});
