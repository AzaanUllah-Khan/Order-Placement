
        // declaration
        var input = prompt("What do you want to buy?, Fruit || Vegetables || Meat")
        if (input == "Fruit") {
            var which = prompt("Which fruit do you want to buy? apple, mango, banana")
            if (which == "apple" || "banana" || "mango") {
                alert(which + " is 100RS per piece")
                var much = prompt("How much Do you want to buy")
                alert("You have succesfully purchased " + much + " " + which)
                alert("Your total bill is " + 100 * much)
                var delivery = prompt("Do you want online delivery")
                if (delivery == "yes") {
                    var place = prompt("Enter your location here")
                    alert("delivery fees is 50Rs")
                    alert("Now your total bill is " + parseInt(100 * much + 50))
                    alert("Your order will be placed at " + place)
                }
                else {
                    alert("Thanks for purchasing")
                }
            }
            else {
                alert("This fruit is currently not available")
            }
        }
        else if (input == "Vegetable") {
            var which = prompt("Which Vegetable do you want to buy? carrot, tomato, potato")
            if (which == "carrot" || "tomato" || "potato") {
                alert(which + " is 100RS per piece")
                var much = prompt("How much Do you want to buy")
                alert("You have succesfully purchased " + much + " " + which)
                alert("Your total bill is " + 100 * much)
                var delivery = prompt("Do you want online delivery")
                if (delivery == "yes") {
                    var place = prompt("Enter your location here")
                    alert("delivery fees is 50Rs")
                    alert("Now your total bill is " + parseInt(100 * much + 50))
                    alert("Your order will be placed at " + place)
                }
                else {
                    alert("Thanks for purchasing")
                }
            }
            else {
                alert("This vegetable is currently not available")
            }
        }
        else if (input == "Meat") {
            var which = prompt("What kind do you want to buy? beef, mutton, chicken")
            if (which == "beef" || "mutton" || "chicken") {
                alert(which + " is 100RS per kg")
                var much = prompt("How much Do you want to buy")
                alert("You have succesfully purchased " + much + "kg " + which)
                alert("Your total bill is " + 100 * much)
                var delivery = prompt("Do you want online delivery")
                if (delivery == "yes") {
                    var place = prompt("Enter your location here")
                    alert("delivery fees is 50Rs")
                    alert("Now your total bill is " + parseInt(100 * much + 50))
                    alert("Your order will be placed at " + place)
                }
                else {
                    alert("Thanks for purchasing")
                }
            }
            else {
                alert("This is currently not available")
            }
        }
        else {
            alert("You are selecting wrong category")
        }
    