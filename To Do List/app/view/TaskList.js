
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
            editor: {
                xtype: 'combobox',
                valueField: 'value',
                displayField: 'status',
                store: store = function() {
                    Ext.create('Ext.data.Store', {
                        fields: ['id', 'status'],
                        data: [
                            {'id': '0', 'status': 'Active'},
                            {'id': '1', 'status': 'Done'}
                        ]
                    });
                },
                renderer: function (value) {
                    var rec =  store.getById(value)
                        if(rec) {
                            return rec.get('status');
                        }
                        return '-';
                }
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
