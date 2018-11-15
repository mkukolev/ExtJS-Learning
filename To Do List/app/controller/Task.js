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
        console.log(record.getData());
        record.save({
            success: function() {
                store.reload();
                taskWindow.close();
            },

            failure: function () {
                Ext.Msg.alert('Error', "Somthing wrong!");
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

            store.sync({
                success: function () {
                    console.log('success')
                },
                failure: function () {
                    console.log('failure')
                }
            });

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
            console.log(grid.down('button'));
            // if (store.getUpdatedRecords() > 0) {
            //
            // }
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
            value = field.getValue();
        console.log(value);

        store.clearFilter(true);
        store.filter(
            {property: 'task', value: value},
        );
        // store.filterBy(function (record, id) {
        //     if(record.get('').indexOf(value) > -1) {
        //         return;
        //     }
        //})

        // {property: 'task', value: value},
        // {property: 'description', value: value},
        // {property: 'createDate', value: value},
        // {property: 'endDate', value: value},
        // {property: 'status_id', value: value},
    }
});