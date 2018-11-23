Ext.define('ToDoApp.view.CreateTask', {
    extend: 'Ext.window.Window',
    alias: 'form-create-task',
    title: 'New task',
    closable: true,
    autoShow: true,
    modal: 'true',
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
                //{xtype: 'checkboxfield', fieldLabel: 'Activation'},
                {xtype: 'textfield', fieldLabel: 'ID', name: 'id', hidden: true, readOnly: true},
                {xtype: 'textfield', fieldLabel: 'Name new task', allowBlank: true, name: 'task'},
                {xtype: 'textfield', fieldLabel: 'Description', name: 'description'}
            ]
        }
    ],
    buttons: [
        {
            id: 'crtTask',
            text: 'Save'
        },
        {   id: 'closeWin',
            text: 'Close'
        },
    ]

});
