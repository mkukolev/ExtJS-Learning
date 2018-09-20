Ext.onReady(function() {

    /**
     * form
     * grid
     * window
     * panel
     */

    Ext.create('Ext.window.Window', {
        title: 'my app',
        autoShow: true,
        modal: true,
        resizable: false,
        closable: false,
        maximizable: true,
        minimizable: true,
        width: 300,
        height: 300,
        items: [
            {
                xtype: 'panel',
                region: 'north',
                height: 200,
                html: 'header'
            },
            {
                xtype: 'panel',
                retion: 'center',
                html: 'center'
            }
        ]
    });

    

    // Ext.create('Ext.panel.Panel', {
    //     // renderTo: Ext.getBody(),
    //     layout: 'border',
    //     width: window.screen.availWidth,
    //     height: window.screen.availHeight,
    //     title: 'my app',
    //     items: [
    //         {
    //             xtype: 'panel',
    //             region: 'north',
    //             height: 200,
    //             html: 'header'
    //         },
    //         {
    //             xtype: 'panel',
    //             retion: 'center',
    //             html: 'center'
    //         }
    //     ]
    // });

});