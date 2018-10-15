Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    models: ['Task', 'StatusModel'],
    stores: ['TaskStore'],
    controllers: ['Task'],

    launch: function() {
        Ext.create('ToDoApp.view.TaskList', {
            renderTo: Ext.getBody()
        });
    }
});