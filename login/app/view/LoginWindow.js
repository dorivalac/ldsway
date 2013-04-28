Ext.define('LM.view.LoginWindow', {
  extend: 'Ext.Window',
  alias: 'widget.loginwindow',

  title: 'Login LDSWay',
  width: 250,
  autoHeight: true,
  closable: false,
  resizable: false,
  draggable: false,
  autoHeight: true,
  layout: 'fit',
  border: false,
  modal: true,
  
  initComponent: function() {
    Ext.apply(this, {
      items: [{
        xtype: 'form',
        plain: true,
        frame: true,
        border: 0,
        bodyPadding: 5,

        items: [
          {
            itemId: 'userName',
            xtype: 'textfield',
            fieldLabel: 'Usuario',
            name: 'userName',
            allowBlank: false,
            anchor: '100%',
            selectOnFocus: true
          },

          {
            xtype: 'textfield',
            fieldLabel: 'Senha',
            name: 'password',
            allowBlank: false,
            inputType: 'password',
            anchor: '100%',
            selectOnFocus: true
          }

        ],

      }]

    });

    this.callParent(arguments);
  },

  buttons: [
    {
      text: "Login",
      type: "submit",
      action: "login",
      formBind: true,
    }
  ],
  defaultFocus: 'userName',
});


