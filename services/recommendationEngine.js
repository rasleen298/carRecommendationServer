// Budget = 40 points
// Priority = 30 points
// Fuel Type = 20 points
// Seats = 10 points


// Total = 100

function calculateRecommendations(cars,preferences){
    const scoredCars = cars?.map(car => {
            let score = 0;

        //budget
        const budgetDifference = ((car.price - preferences.budget) / preferences.budget) * 100;

        if(car.price <= preferences.budget){
            score += 40;
        }
        else if(budgetDifference <= 5){
            score += 30;
        }
        else if(budgetDifference <= 10){
            score += 20;
        }
        else if(budgetDifference <= 20){
            score += 10;
        }

        //fuel
        if(car.fuelType.toLowerCase() === preferences.fuelType.toLowerCase()){
            score += 20;
        }

        //seat
        if(car.seats >= preferences.seats){
            score += 10;
        }

        //priority milaege etc.
        switch(preferences.priority.toLowerCase()){
            case "safety":
                if(car.safetyRating === 5) score+=30;
                else if (car.safetyRating === 4) score += 24;
                else if (car.safetyRating ===3) score += 18;
                else if (car.safetyRating === 2) score += 12;
            break;

            case "mileage":
                if(car.mileage >=25) score+=30;
                else if(car.mileage >=20) score+=25;
                else if(car.mileage >=18) score+=20;
                else if(car.mileage >=15) score+=15;
            break;

            case "performance":
                const power = parseInt(car.specs.power);
                if(power >= 150) score +=30;
                else if(power >= 120) score += 25;
                else if(power >= 100) score += 20;
                else if(power >= 80) score += 15;
            break;

            default:
                break;
        }
        return {
        ...car,
        score
    };
    })
    return scoredCars
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);}

module.exports = calculateRecommendations;