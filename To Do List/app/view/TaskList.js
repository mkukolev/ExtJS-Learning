

// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
Ext.define('ToDoApp.view.TaskList', {
    extend: 'Ext.grid.Panel',
    title: 'To Do List',
    width: 850,
    height: 600,
    align: 'center',
    store: 'TaskStore',
    tbar: [
        { id: 'newTask', xtype: 'button', text: 'New task'},
        { id: 'searchBtn', xtype: 'button', text: 'Search'},
        { id: 'searchFld', xtype: 'textfield'}
    ],
    columns: [ 
        {   
            xtype: 'rownumberer',
            sortable: false,
            width: 30,
            text: 'ID'
        },
        {
            dataIndex: 'task',
            width: 210,
            text: 'Task'
        },
        {   
            dataIndex: 'description',
            width: 210,
            text: 'Description'
        },
        {
            dataIndex: 'createDate',
            width: 100,
            align: 'center',
            text: 'Create date'
        },
        {
            dataIndex: 'endDate',
            width: 100,
            align: 'center',
            text: 'End date',
        },
        {
            // Комбобокс для выбора статуса задачи.
            dataIndex: 'status',
            width: 100,
            align: 'center',
            text: 'Done work',
            editor: 
            {
                xtype: 'combobox',
                store: store = function() {
                    Ext.define('ToDoApp.store.StatusActive', {
                        extend: 'Ext.data.Store',
                        fields: [
                            {name: 'value', type: 'int'},
                            {name: 'status', type: 'string'}
                        ],
                        data: [
                            {value: '0', status: 'Active'},
                            {value: '1', status: 'Done'}
                        ]
                    });
                },

                valueField: 'value',
                displayField: 'status',
                value: '0'
            }
        },
        {   
            xtype: 'actioncolumn',
            dataIndex: 'actions',
            width: 100,
            align: 'center',
            text: 'Actions',
            items: 
            [
                {iconCls: 'action-edit', tooltip: 'Edit'},
                {iconCls: 'action-delete', tooltip: 'Delete'}
            ]
        }
    ]
});
