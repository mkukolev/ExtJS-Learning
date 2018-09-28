Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    models: ['Task'],
    stores: ['taskStore', 'statusActiveStore'],

});