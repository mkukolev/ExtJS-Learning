
// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
Ext.define('ToDoApp.view.TaskList', {
    id: 'task-list',
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasklist',
    title: 'To Do List',
    width: 800,
    height: 420,
    store: 'TaskStore',
    layout: 'fit',
    plugins: [new Ext.grid.plugin.CellEditing({clicksToEdit: 1})],
    tbar: [
        { id: 'newTask', xtype: 'button', iconCls: 'action-new-task', text: 'New task'},
        { id: 'searchFld', xtype: 'textfield', emptyText: 'Search...'},
        {xtype: 'tbfill'},
        {id: 'saveList', xtype: 'button', iconCls: 'action-save', text: 'Save status',  disabled: false}
    ],
    columns: [
        {
            dataIndex: 'id',
            resizable: false,
            width: 30,
            header: 'ID'
        },
        {
            dataIndex: 'task',
            flex: 1,
            minWidth: 160,
            header: 'Task'
        },
        {
            dataIndex: 'description',
            flex: 1,
            minWidth: 160,
            header: 'Description'
        },
        {
            dataIndex: 'createDate',
            resizable: false,
            align: 'center',
            header: 'Create date'
        },
        {
            dataIndex: 'endDate',
            resizable: false,
            align: 'center',
            header: 'End date',
        },
        {
            // Комбобокс для выбора статуса задачи.
            dataIndex: 'status_id',
            id: 'status',
            resizable: false,
            align: 'center',
            header: 'Status',
            editor: {
                xtype: 'combobox',
                id: 'status-list',
                displayField: 'status',
                valueField: 'status',
                selectOnTab: true,
                editable: false,
                store: Ext.create('Ext.data.Store', {
                    fields: [
                        {name: 'id', type: 'int'},
                        {name: 'status', type: 'string'}
                    ],
                    data: [
                        {id: '0', status: 'Active'},
                        {id: '1', status: 'Inactive'}
                    ]
                })
            }
        },
        {
            xtype: 'actioncolumn',
            id: 'actions',
            width: 120,
            align: 'center',
            header: 'Actions',
            items:
            [
                {id: 'editTask', iconCls: 'action-edit', tooltip: 'Edit task', scope: this},
                {id: 'deleteTask', iconCls: 'action-delete', tooltip: 'Delete task', scope: this}
            ],
        },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true,
        store: Ext.create('ToDoApp.store.TaskStore', {
            autoLoad: {start: 0, limit: 15},
            remoteFilter: true,
            autoSync: true,
        })

    }],
});
