var mysql = require("mysql");
var fs = require("fs");
var colors = require('colors');
var prompt = require('prompt');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root",
	password:"Qwert411!",
	database:"Bamazon"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connection ad id " + connection.threadId);
});

function displayTable(){
	connection.query("SELECT * FROM products",function(err,res){
		var Table = require('cli-table');

		var table = new Table({
			head:['Id','Product','Department Name','Price','Stock'],
			colWidths:[5,20,20,10,10]
		});
		for(i=0;i<res.length;i++){
			table.push(
				[res[i].item_id,res[i].product_name,res[i].department_name,res[i].price,res[i].stock_quantity]
				);
		}
		console.log(table.toString());
		sell();	
	});
}

function sell(){
	
	inquirer.prompt([
		{
			type:"input",
			message:"Type in the id of the item you would like to buy.",
			name:"itemId"
		},
		{
			type:"input",
			message:"How many would you like to buy?",
			name:"amount"
		}
	]).then(function(input){
		
		if(input.amount <= 0){
			console.log("Not a valid amount");
			sell();
			return;
		}


		connection.query("SELECT * FROM products WHERE ?",{item_id:input.itemId},function(err,res){
			if(res[0].stock_quantity <= 0){
				console.log("Out of stock");
			}else if((res[0].stock_quantity - input.amount) < 0){
				console.log("Insufficient quantity!");
			}else if(res[0].stock_quantity > 0){

				var newStock = res[0].stock_quantity - input.amount;
				connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity:newStock},{item_id:input.itemId}],function(err,res){
				});
				console.log("You just bought " + input.amount + " units of " + res[0].product_name);
			}
			inquirer.prompt([
			{
				type:"confirm",
				message:"Would you like to buy another item?",
				name:"confirm",
				default: true
			}
			]).then(function(input){
				if(input.confirm){
					displayTable();	
				}else{
					process.exit();
				}
			})			
		});	
	});
}
displayTable();


