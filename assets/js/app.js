const app = new Vue(
    {
        
        el : '#app',
        data : {
            
            contacts: [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    },  
    
 ],
        
        clickActiveIndex : 0,
        newMessageText : '',
        searchKey : '',
        randomAnswer :'',
        randomAnswerList : [
            'Quando tutto sembra andarti contro, ricorda che l’aereo decolla controvento, non col vento a favore',
            'Si vive una volta sola, ma se lo fai bene, una volta sola è abbastanza',
            'C’è una crepa in ogni cosa. Ed è da lì che entra la luce' ,
            'Ama la vita più della sua logica, solo allora ne capirai il senso',
            'Il tuo tempo è limitato, quindi non sprecarlo vivendo la vita di qualcun altro',
            'Preoccupati di ciò che pensano gli altri e sarai sempre loro prigioniero',
            'Nessun uomo entra mai due volte nello stesso fiume, perché il fiume non è mai lo stesso, ed egli non è lo stesso uomo' ]
        

        }, 

        methods: {

            generate() {
               let chosenAnswer = Math.floor(Math.random() * this.randomAnswerList.length);
                return this. randomAnswer = this.randomAnswerList[chosenAnswer];
              },


            sendMessage(index){
				let newMessage = {
					date : this.getDateTime(),
					message : this.newMessageText.trim(),
					status : 'sent'
				}


				if(newMessage.message.length >0){
					
					this.contacts[index].messages.push(newMessage);
					
					setTimeout(() => {
						let newRecievedMessage = {
							date:  this.getDateTime(),
							message: this.generate(),
							status : 'recieved'
						};
						this.contacts[index].messages.push(newRecievedMessage);
					}, 1000)
					this.newMessageText = '';

					
				}

				
			},

            getDateTime(){
				let now = new Date();
				let dd = String(now.getDate()).padStart(2, '0');
				let mm = String(now.getMonth() + 1).padStart(2, '0'); 
				let yyyy = now.getFullYear();
				let hour = now.getHours();
				let minutes = now.getMinutes();
				let seconds = now.getSeconds();
				

				return dd + '/' + mm + '/' + yyyy + ' ' +  hour +':'+ minutes +':'+ seconds;		

			},

            showDropdownMenu : function(){
				const element = document.querySelectorAll(".my_dropdown-list");

				element.forEach(element => {
					
					element.classList.toggle("my_hidden");
				});

			},

			
			deleteMessage : function(index){
				this.contacts[this.clickActiveIndex].messages.splice(index,1);
			},


			
			getInfoMessage : function(index){
				let date = this.contacts[this.clickActiveIndex].messages[index].date;
				let message = this.contacts[this.clickActiveIndex].messages[index].message;
				let status = this.contacts[this.clickActiveIndex].messages[index].status;
				alert(date + ' ' + message + ' '+ status)
			},

				
            sendAudio: function () {
                alert("Non fare Audio di un ora please");
            },
         		
		},
		

	},
	
	
);

        
        
