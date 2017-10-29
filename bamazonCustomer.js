var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "sinan12345",
  database: "bamazon"
});
connection.connect(function(err) {

    if (err) throw err;
    
    // connection.end();
  });
  function DisplayAll() {
    connection.query("SELECT * FROM products", function(err, res){
      if (err) throw err;
     
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].stock_quantity + " | " + res[i].department_name +" | " + res[i].price);
        
      }
      
      console.log("-----------------------------------");
      
       
  
      seclectItem();
    }); // Close connection.query
  };
  
  

  function seclectItem() {
    inquirer
      .prompt([{
        name: "ItemID",
        type: "input",
        message: "Enter the Item ID?"
       
      },
      {
        name: "quantity",
        type: "input",
        message: "How many items do you want to buy?"
      }
      ])
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        connection.query('SELECT * FROM products WHERE item_id = ? ', [answer.ItemID], function(err, res) {
          if (err) throw err;
           if (res[0].stock_quantity >= answer.quantity) {
           var newStock = res[0].stock_quantity - answer.quantity;
           var sale = answer.quantity * res[0].price;
           var ide = answer.ItemID;
          updateTable(newStock, sale,ide);
           } else if (res[0].stock_quantity < answer.quantity) {
             console.log("not enough item on stock!!!");
             console.log("Only"+res[0].stock_quantity+"  "+" pcs are available");
           }
          
          

        });
      });
    }
       
    
  


function updateTable(newStock, sale, id) {
  connection.query('UPDATE products SET stock_quantity = ?, product_sale = ? WHERE item_id = ? ', [newStock, sale, id], function(errors, result) {
    if (errors) throw errors;
    //Displays customer cost
    console.log("Thank you, your total cost today is: $" + sale);
    console.log("");
    console.log(newStock);
    console.log("-------------------");
    //if there isnt enough inventory diaply message then rerun displayTable
    console.log("database updated ");
  });
  //after table updates rerun displayTable
  DisplayAll();
}
// run the start function when the file is loaded to prompt the user
 DisplayAll();
  
