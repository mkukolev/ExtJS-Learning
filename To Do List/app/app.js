Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    models: ['Task'],
    stores: ['TaskStore', 'StatusStore'],
    controllers: ['Task'],

    launch: function() {
        Ext.create('ToDoApp.view.TaskList', {
            renderTo: Ext.getBody()
        });
    }
});