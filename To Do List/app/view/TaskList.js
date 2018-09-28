

// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
    Ext.define('ToDoApp.view.TaskList', {
        extend: 'Ext.grid.Panel',
        renderTo: Ext.getBody(),
        title: 'To Do List',
        width: 850,
        height: 600,
        align: 'center',
        store: this.TaskStore,
        tbar: [
            { id: 'createTask', xtype: 'button', text: 'New task', },
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
                dataIndex: 'header',
                width: 210,
                text: 'Header'
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
                    store: this.StatusActive,
                    valueField: 'value',
                    displayField: 'name',
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
    Ext.create('ToDoApp.view.TaskList');
