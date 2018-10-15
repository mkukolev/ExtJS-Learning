

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
            dataIndex: 'status_id',
            width: 100,
            align: 'center',
            text: 'Done work',
            editor: {
                xtype: 'combobox',
                valueField: 'value',
                displayField: 'status',
                store: store = function() {
                    Ext.create('ToDoApp.store.StatusStore', {
                        model: 'ToDoApp.model.StatusModel',
                        extend: 'Ext.data.Store',
                        autoLoad: true,
                        data: [
                            {value: '2', status: 'Active'},
                            {value: '1', status: 'Done'}
                        ]
                    });
                },

                renderer: function(value) {
                    var rec = store.getById(value);
                    if (rec) {
                        return rec.get('status')
                    }
                        return('Done');
                },
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
