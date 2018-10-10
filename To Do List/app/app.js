Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    models: ['Task'],
    stores: ['TaskStore'],// 'StatusActive'],
    controllers: ['Task'],

    launch: function() {
        Ext.create('ToDoApp.view.TaskList', {
            renderTo: Ext.getBody()
        });
    }
});