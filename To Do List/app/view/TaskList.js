
// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
Ext.define('ToDoApp.view.TaskList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tasklist',
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
            width: 100,
            align: 'center',
            header: 'Work status',
            // renderer: function (status_id) {
            //     return {
            //         xtype: 'combobox',
            //         store: 'StatusStore',
            //         valueField: 'value',
            //         displayField: 'status_id',
            //         value: status_id
            //     };
            // }
            editor: {
                xtype: 'combobox',
                displayField: 'status_id',
                valueField: 'value',
                triggerAction: 'all',
                store: 'ToDoApp.store.StatusStore',
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
                {iconCls: 'action-edit', tooltip: 'Edit', scope: this},
                {iconCls: 'action-delete', tooltip: 'Delete', scope: this}
            ]
        }
    ]
});
