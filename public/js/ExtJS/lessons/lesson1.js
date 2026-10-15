
function hello1(){
	 Ext.Msg.alert('Наше пробное сообщение','Hello, World!' );	
}

callback = function(){
	alert('Была вызвана функция callback');
}
	
function hello2(){
	 Ext.Msg.alert('Наше пробное сообщение','Hello, World!', callback );	
}

callback2 = function(){
	alert(this.MessageBox.alert);
}
	
function hello3(){
	 Ext.Msg.alert('Наше пробное сообщение','Hello, World!', callback2, Ext );	
}

function hello4(){
	Ext.Msg.show({
		title: 'Наше пробное сообщение',
		msg: 'Hello, World!',  
		width: 300,
		buttons: Ext.Msg.OK
	});	
}


function hello5(){
	var msg = Ext.MessageBox;
	msg.minWidth = 300;		
		// обратите внимание что именно minWidth, а не width. 
		// Почему - предстоит вам понять, изучив внимательно доку 
	msg.alert('Наше пробное сообщение','Hello, World!' );	
} 


function showMsgBox(){
	if(!win){
		var win = new Ext.Window({
			title: 'Обратная связь',
			width: 500,
			height: 300,
			modal: true,
			//layout:'fit',
			bodyStyle:{'background-color':'#FFFFFF'},
			buttons:[{
				text: 'Отправить',
				handler:function(){
					var name = Ext.getCmp('name'); 
					var email = Ext.getCmp('email');
					var msg = Ext.getCmp('msg').getValue();
					if(!msg){
						alert('Не потрудитесь, плиз, набрать хоть несколько символов сообщения');
						return;
					}
					if(email.isValid() == false){
						alert('Вы указали не верный емейл. В Эксте валидность введенного емейла проверяется очень просто: Достаточно текстовому полю указать vtype:"email", что указывает формат вводимых данных');	
						return;
					}
					
					Ext.Ajax.request({
						url:'sendMsg.php',
						method: 'post',
						params:{
							name: name.getValue(),
							email: email.getValue(),
							msg: msg
						},
						success: function(){
							win.close();
							alert('Ваше сообщение успешно отправлено. Спасибо большое!');
						},
						failure: function(){
							alert('Ошибка отправки сообщения.  Попробуйте еще раз позже.');	
						}
					});
				}
			},
			{
				text: 'Отмена',
				handler:function(){
					win.close();	
				}
			}],
			items:[{
				xtype:'form',
				bodyStyle:{
					padding: '5px'	
				},
				defaults:{
					width:200	
				},
				items:[
				{
					xtype:'textfield',
					fieldLabel:'Имя',
					id:'name'
				},
				{
					xtype:'textfield',
					fieldLabel:'Email',
					id:'email',
					vtype:'email' 
				} 
			]},
			{
				xtype:'fieldset',
				layout:'fit',
				items:[{
					xtype:'textarea',
					id:'msg', 
					height:150
				}]
			}]
		})	
	}
	win.show();
}