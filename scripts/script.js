var JSONText = {
	"books" : [
		{
			"type" : "pdf",
			"value" : "О компании QAP Int.",
			"href" : ""
		}, 
		{
			"type" : "pdf",
			"value" : "Преимущества использования CLM-инструмента для Вашего бизнеса.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Перспективы сотрудничества с QAP Int.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание решения для разработки HTML5-презентаций.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание разработногоинструмента CLM2CRM и его интеграция с salesforce.com(руский).",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание разработногоинструмента CLM2CRM и его интеграция с salesforce.com(english).",
			"href" : ""
		}
	]
}

function ReservationsViewModel(){
	var self = this;	
	self.books = JSONText.books;
	var index = 0;
	self.books.forEach(function(key){
		key.index = index++;
		key.style = "";
		if (key.type =="pdf") {
			key.src = "assets/images/PDF_Icon.png";				
		}
		else{
			key.src = "";
			key.style = "margin-left:-25px;";
		}		
		
	
	});
}
ko.applyBindings(new ReservationsViewModel());