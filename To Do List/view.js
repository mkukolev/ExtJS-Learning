
Ext.onReady(function() {
// Сделал store с полями, сюда в data должны записываться задачи для ту-ду-листа.
    var store = Ext.create('Ext.data.Store', {
        fields: ['id', 'header', 'description', 'createDate', 'endDate', 'status'],
        data: [
            {id: '1', header: 'Developing todo-list', description: 'test', createDate: '123', endDate: '123', status: 'Active'}
        ],

    });
//     var workStatus = Ext.create('Ext.data.Store', {
//         fields: ['val', 'name'],
//         data: [
//             {val: '0', name: 'Active'},
//             {val: '1', name: 'Done'}
//         ]
//     });
// // Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
    Ext.create('Ext.grid.Panel', {
        renderTo: Ext.getBody(),
        title: 'To Do List',
        width: 800,
        height: 600,
        align: 'center',
        store: store,
        getStatusChoicesStore: function () {
            return Ext.create('Ext.data.Store', {
                data: [
                    {val: '0', name: 'Active'},
                    {val: '1', name: 'Done'}
                ]
            });
        },
        tbar: [
            { id: 'createTask', xtype: 'button', text: 'New task', },
            { id: 'searchBtn', xtype: 'button', text: 'Search'},
            { id: 'searchFld', xtype: 'textfield'}
        ],
        columns: [
            {
                dataIndex: 'id',
                width: 50,
                align: 'center',
                text: 'ID'
            },
            {
                dataIndex: 'header',
                width: 224,
                text: 'Header'
            },
            {   
                dataIndex: 'description',
                width: 224,
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
                text: 'End date'
            },
            {
                // Последний столбец - чекбокс для выполненных задач.
                dataIndex: 'status',
                width: 100,
                align: 'center',
                text: 'Done work',
                editor: {
                    xtype: 'combobox',
                    store: this.getStatusChoicesStore()
                    // typeAhead: true,
                    // triggerAction: 'all',
                    // valueField: 'val',
                    // displayField: 'name',
                    // queryMode: 'local',
                    // lazyRender: true,
                    // editable: false,
                    // value: '0'
                }
                // Проверялка чекбокса.
                // listeners: {
                //     checkchange: function () {
                //         alert("test");
                //     }
                // } 
            }
        ]
    });
});