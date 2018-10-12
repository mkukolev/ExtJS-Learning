Ext.define('ToDoApp.view.CreateTask', {
// extend: 'Ext.form.Panel',
    extend: 'Ext.window.Window',
    alias: 'form-create-task',
    title: 'New task',
    closable: true,
    autoShow: true,
    width: 300,
    store: 'TaskStore',
    items: [
        {
            xtype: 'form',
            id: 'task-fields',
            border: false,
            layout: 'anchor',
            bodyPadding: 15,
            items: [
                {xtype: 'checkboxfield', fieldLabel: 'Activation'},
                {xtype: 'textfield', fieldLabel: 'Name new task', name: 'task'},
                {xtype: 'textfield', fieldLabel: 'Nescription', name: 'description'}
            ]
        }
    ],
    buttons: [
        {
            id: 'crtTask',
            text: 'Create'
        },
        {   id: 'closeWin',
            text: 'Close'
        },
    ]

});
