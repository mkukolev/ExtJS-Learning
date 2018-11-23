Ext.define('ToDoApp.controller.Task', {
    extend: 'Ext.app.Controller',
    views: ['TaskList', 'CreateTask'],

    init: function () {

        this.control({
            'tasklist': {
                render: this.onTaskListRender,
                cellclick: this.ClickOnActions
            },
            '#newTask': {
                click: this.OpenTaskWin
            },
            '#crtTask': {
                click: this.CreateTask
            },

            '#closeWin': {
                click: this.CloseWin
            },

            '#saveList': {
                click: this.SaveList
            },
            '#searchFld': {
                change: this.SearchTask
            }
        });

    },

    onTaskListRender: function(grid) {
        grid.getStore().load();

    },
    OpenTaskWin: function () {
        Ext.create('ToDoApp.view.CreateTask');


    },
    CreateTask: function (button) {


        var store = Ext.getStore('TaskStore'),
            taskWindow = button.findParentByType('window'),
            form = taskWindow.down('#task-fields').getForm(),
            dayFormCreate = Ext.Date.format(new Date(), 'd.m.Y'),
            record,
            props;

        props = Ext.apply({
            createDate: dayFormCreate
        }, form.getValues());

        record = Ext.create('ToDoApp.model.Task', props);
        record.save({
            success: function() {
                store.reload();
                taskWindow.close();
            },

            failure: function () {
                Ext.Msg.alert('Error', "Something wrong!");
            }
        });
    },

    CloseWin: function (button) {
        button.up('window').close();
    },

    SaveList: function (button) {
        var grid = button.findParentByType('grid'),
            dayFormEnd = Ext.Date.format(new Date(), 'd.m.Y'),
            store = grid.getStore(),
            statusValue;

            store.sync();

            store.each(function(rec) {
                statusValue = rec.get('status_id')
                if (statusValue == 'Inactive') {
                    rec.set({
                        endDate: dayFormEnd
                    });
                    rec.save();

                } else if (statusValue == 'Active') {
                    rec.set({
                        endDate: ""
                    });
                    rec.save();
                }
            });
    },

    ClickOnActions: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        var grid = view,
            store = grid.getStore(),
            eventTarget = Ext.get(e.target);

        if(eventTarget.hasCls('action-edit')) {
            Ext.create('ToDoApp.view.CreateTask').down('form').getForm().setValues(record.getData());
        }
        else if (eventTarget.hasCls('action-delete')){
            Ext.Msg.confirm(
                'Delete task', Ext.String.format('Delete this task?'),
                function (answer) {
                    if (answer === 'yes') {
                        store.remove(record);
                        store.sync();
                    }
                }
            )
        }
    },

    SearchTask: function (field) {
        var store = Ext.getStore('TaskStore'),
            fieldValue = field.getValue();

        store.clearFilter(true);
        var myFilters = [
            new Ext.util.Filter({
                filterFn: function (item) {

                    var str = [
                        item.get('task'),
                        item.get('description'),
                        item.get('createDate'),
                        item.get('endDate'),
                        item.get('status_id')
                    ].join(' ');

                    return str.toLowerCase().indexOf(fieldValue.toLowerCase()) !== -1;
                }
            })
        ];
        store.filter(myFilters);
    }
});