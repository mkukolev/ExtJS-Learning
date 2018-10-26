
// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
Ext.define('ToDoApp.view.TaskList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasklist',
    title: 'To Do List',
    width: 850,
    height: 600,
    align: 'center',
    store: 'TaskStore',
    plugins: [new Ext.grid.plugin.CellEditing({clicksToEdit: 1})],
    tbar: [
        { id: 'newTask', xtype: 'button', iconCls: 'action-new-task', text: 'New task'},
        { id: 'searchBtn', xtype: 'button', text: 'Search'},
        { id: 'searchFld', xtype: 'textfield'},
        {xtype: 'tbfill'},
        {id: 'saveList', xtype: 'button', iconCls: 'action-save', text: 'Save status',}
    ],
    columns: [
        {
            dataIndex: 'id',
            sortable: false,
            width: 30,
            header: 'ID'
        },
        {
            dataIndex: 'task',
            width: 210,
            header: 'Task'
        },
        {
            dataIndex: 'description',
            width: 210,
            header: 'Description'
        },
        {
            dataIndex: 'createDate',
            width: 100,
            align: 'center',
            header: 'Create date'
        },
        {
            dataIndex: 'endDate',
            width: 100,
            align: 'center',
            header: 'End date',
        },
        {
            // Комбобокс для выбора статуса задачи.
            dataIndex: 'status_id',
            id: 'status',
            width: 100,
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
            width: 100,
            align: 'center',
            header: 'Actions',
            items:
            [
                {id: 'editTask', iconCls: 'action-edit', tooltip: 'Edit task', scope: this},
                {id: 'deleteTask', iconCls: 'action-delete', tooltip: 'Delete task', scope: this}
            ],
        },
    ]
});
