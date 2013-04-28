Ext.define('LM.view.Main', {

    extend: 'Ext.panel.Panel',
    
    alias: 'widget.mainview',
    
		activeItem: 0,

    defaults: {
        // applied to each contained panel
        border:false
    },

    layout: 'card',
        
    items: [

	    {
	      id: 'card0',
	      html: '  Por favor, iforme Login e Senha ou Registre-se como novo usuario</b>',
  	      xtype: 'panel',
              items: [
                        {
                                                xtype: 'button',
                                               text: 'REGISTRAR-SE COMO NOVO UARIO',
                                               action: 'logout'
                        }
                ]


	    },

	    {
	    	id: 'card1',
//		html: ' Click aqui para sair de LDSWay ',
        	html: '<img src="../img/back.png">',
	    	xtype: 'panel',
	    	items: [
		    	{
						xtype: 'button',
						text: 'Sair',
						action: 'logout'
		    	}
	    	]
	    }
      ],        

	initComponent: function() {

       	this.callParent( arguments );

		},      
});

