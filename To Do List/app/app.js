Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    models: ['Task'],
    stores: ['TaskStore', 'StatusActive'],
    controllers: ['Task']
});