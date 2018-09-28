// Сделал store с полями, сюда в data должны записываться задачи для ту-ду-листа.
Ext.create('ToDoApp.store.taskStore', {
    extend: 'Ext.data.Store',
    requires  : ['ToDoApp.Task', 'Ext.data.proxy.LocalStorage'],

    proxy: {
        type: 'localstorage',
        id  : 'Task'
    }
});