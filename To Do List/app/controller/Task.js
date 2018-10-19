Ext.define('ToDoApp.controller.Task', {
    extend: 'Ext.app.Controller',
    views: ['TaskList', 'CreateTask'],

    init: function () {

        // if (localStorage) {
        //     alert("LocalStorage is supported!")
        // };

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

        var getStoreTask = Ext.getStore('TaskStore'),
            taskWindow = button.findParentByType('window'),
            form = taskWindow.down('#task-fields').getForm(),
            day = Ext.Date.format(new Date(), 'm/d/Y'),
            props,
            record;
        //console.log(day)
        props = form.lenght;
        console.log(props);
        // props = {
        //     task: form.findField('task').getValue(),
        //     description: form.findField('description').getValue(),
        //     createDate: day
        //     //endDate:
        //     //status: 0
        //     //actions:
        // };
        //form.getValues()
        record = Ext.create('ToDoApp.model.Task', form.getValues());
        console.log(form.getValues());
        record.save({
            success: function() {
                getStoreTask.add(record);
                taskWindow.close();
            },
            failure: function () {
                Ext.Msg.alert('Error', "Somthing wrong!");
            }
        });
    },
    CloseWin: function (button) {
        button.up('window').close();
    }
});