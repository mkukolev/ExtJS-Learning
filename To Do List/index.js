
Ext.onReady(function() {
// Сделал store с полями, сюда в data должны записываться задачи для ту-ду-листа.
    var store = Ext.create('Ext.data.Store', {
        fields: ['id', 'header', 'description', 'createDate', 'endDate', 'done'],
        data: {
                id: '1', header: 'Developing todo-list', description: 'test', createDate: '123', endDate: '123', done: true
        },
    });

// Делаю грид с 6ю столбцами. Хочу сделать его расположение по центру.
    Ext.create('Ext.grid.Panel', {
        title: 'To Do List',
        width: 800,
        height: 600,
        align: 'center',
        store: store,
        columns: 
        [
            {
                dataIndex: 'id',
                width: 50,
                align: 'center',
                text: 'ID'
            },
            {
                dataIndex: 'header',
                width: 200,
                text: 'Header'
            },
            {   
                dataIndex: 'description',
                width: 200,
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
                xtype: 'checkcolumn',
                dataIndex: 'done',
                width: 100,
                align: 'center',
                text: 'Done work'
                // Проверялка чекбокса.
                // listeners: {
                //     checkchange: function () {
                //         alert("test");
                //     }
                // } 
            },
        ],
        renderTo: Ext.getBody()
    })
});