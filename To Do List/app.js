Ext.application({
    name: 'ToDoApp',
    appFolder: 'app',
    
    model: ['Task'],
    store: ['taskStore', 'statusActiveStore'],

})