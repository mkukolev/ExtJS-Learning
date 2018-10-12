Ext.define('ToDoApp.controller.Task', {
    extend: 'Ext.app.Controller',
    views: ['TaskList', 'CreateTask'],

    init: function () {
        this.control({
        '#newTask': {
            click: this.OpenTaskWin
        },
        '#crtTask': {
            click: this.CreateTask
        },

        '#closeWin': {
            click: this.CloseWin
        }
        })
    },
    OpenTaskWin: function () {
        Ext.create('ToDoApp.view.CreateTask');

    },
    CreateTask: function (button) {
        var store = Ext.getStore('TaskStore'),
            taskWindow = button.findParentByType('window'),
            form = taskWindow.down('#task-fields').getForm(),

            properties = {
                task: form.findField('task').getValue(),
                description: form.findField('description').getValue(),
                // createDate:
                // endDate:
                // status:
                // actions:
            }
            console.log(properties);
            //taskWindow.close();
    },
    CloseWin: function (button) {
        button.up('window').close();
    }
});