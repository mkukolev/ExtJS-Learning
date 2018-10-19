// Сделал store с полями, сюда в data должны записываться задачи для ту-ду-листа.
Ext.define('ToDoApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    model: 'ToDoApp.model.Task'
});

