Ext.define('ToDoApp.controller.Task', {
    extend: 'Ext.app.Controller',
    views: ['TaskList', 'CreateTask'],

    init: function () {

        this.control({
            'tasklist': {
                render: this.onTaskListRender
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
            '#actions': {
                click: this.ClickOnActions
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
        props = {
            task: form.findField('task').getValue(),
            description: form.findField('description').getValue(),
            createDate: dayFormCreate,
        };
        record = Ext.create('ToDoApp.model.Task', props);
        record.save({
            success: function() {
                store.add(record);
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
    },

    ClickOnActions: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        var grid = view,
            store = grid.getStore(),
            createForm = Ext.create('ToDoApp.view.CreateTask'),
            eventTarget = Ext.get(tr.target);
z 
        if(eventTarget.hasCls('action-edit')) {
            createForm.down('form').loadRecord(rowIndex);
            
            // var testName = rowIndex.data.task,
            //     dscrName = rowIndex.data.description;

            //     rowIndex.set({
            //     task: testName,
            //     description: dscrName
            // });
            // rowIndex.save();
            // console.log(dscrName);

        }
        else if (eventTarget.hasCls('action-delete')){
            Ext.Msg.confirm(
                'Delete task', Ext.String.format('Delete this task?'),
                function (answer) {
                    if (answer === 'yes') {
                        store.remove(rowIndex);
                        store.sync();
                    }
                }
            )
        }
    }
});