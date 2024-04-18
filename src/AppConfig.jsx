const START_SCREEN = "dashboard";


const cilantroForum = {
	location: "Arlington", 
	chat: [
		{name: "Misty", message: "Great for beginners growing here in Arlington!"},
		{name: "Bob", message: "I’ve been growing every year and I love it!"},

	]
}

const cilantroPlantData = {
	name: "cilantro", 
	description: " Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
	requirements:{
		water: "Every 2-3 days",
		sun: "Partial shade to full sun"
	}
}

const warningList = [
  
    {
        name: "heat-warning",
        large_title: "Cover this plant.",
        description: "It is above 85\u00B0F (29\u00B0C). Cover this plant with shade cloth to prevent heat stress.",
        image: "warnings/heat-warning.png"
    },
    {
        name: "frost-warning",
        large_title: "Protect from Frost",
        description: "Frost warning! Temperatures are expected to drop below freezing. Protect your plants by covering them or bringing them indoors.",
        image: "warnings/heat-warning.png" // CHANGE IMAGE NAME
  
    },
      {
        name: "rain-warning",
        large_title: "Shelter from Rain",
        description: "Rain warning! Heavy rainfall expected. Provide shelter for your plants to prevent overwatering and waterlogging.",
        image: "warnings/heat-warning.png" // CHANGE IMAGE NAME

      },
      {
        name: "wind-warning",
        large_title: "Secure from Wind",
        description: "Wind warning! Strong winds forecasted. Secure your plants with stakes or bring potted plants indoors to prevent damage.",
        image: "warnings/heat-warning.png" // CHANGE IMAGE NAME 

      },
];


const plantsList = [
    {
        name: "Succulent",
        description: "Succulents are plants that store water in their leaves, stems, and roots. They are well-adapted to arid conditions and come in a wide variety of shapes, sizes, and colors.",
        requirements: {
            water: "When soil is completely dry",
            sun: "6 hours of bright indirect sunlight"
        },
        image: "succulent.png",
        warning: "heat-warning",
        weeksAgo: 4
    },
    {
        name: "Lantana",
        description: "Colorful perennial shrub, reaching heights of 1-2 meters. Loved for vibrant flowers attracting butterflies.",
        requirements: {
            water: "Sparingly once a week",
            sun: "6 hours of bright indirect sunlight"
        },
        image: "lantana.png",
        warning: "heat-warning",
        weeksAgo: 3,
        comment: [
            {
                name: "Misty",
                comment: "I’ve been covering my Lantana after 11AM every day.",
                icon: "misty_icon.png"
            },
            {
                name: "Bob",
                comment: "I’ve seen some improvement when increasing my watering.",
                icon: "misty_icon.png"
            }
        ]
    },
    {
        name: "Dwarf Yaupon",
        description: "Dwarf yaupon is a compact evergreen shrub with small, glossy green leaves. It is native to the southeastern United States and is commonly used as a landscaping plant.",
        requirements: {
            water: "Once a week, increase in dry conditions",
            sun: "6-8 hours of bright indirect sunlight"
        },
        image: "dwarf_yaupon.png",
        warning: "frost-warning",
        weeksAgo: 4
    },
    {
        name: "B. eyed Susan",
        description: "Black-eyed Susan is a flowering plant in the sunflower family, native to North America. It is known for its bright yellow or orange flowers with dark centers.",
        requirements: {
            water: "When soil is completely dry",
            sun: "6 hours of bright indirect sunlight"
        },
        image: "b_eyed_susan.png",
        warning: "rain-warning",
        weeksAgo: 4
    },
    {
        name: "Snake Plant",
        description: "Snake plants, also known as mother-in-law's tongue, are a type of succulent with long, upright leaves that are often variegated with shades of green and yellow. They are highly tolerant of neglect and can survive in low light conditions.",
        requirements: {
            water: "Allow soil to dry between waterings",
            sun: "Low to bright indirect sunlight"
        },
        image: "snake_plant.png",
        warning: "wind-warning",
        weeksAgo: 4
    },
    {
        name: "Peace Lily",
        description: "Peace lilies are popular houseplants known for their elegant white flowers and glossy green leaves. They thrive in low light conditions and are excellent air purifiers, making them ideal for indoor spaces.",
        requirements: {
            water: "Keep soil consistently moist, but not soggy",
            sun: "Low to bright indirect sunlight"
        },
        image: "peace_lily.png",
        warning: "",
        weeksAgo: 4,
    },
    {
        name: "Aloe Vera",
        description: "Aloe vera is a succulent plant species known for its thick, fleshy leaves that contain a gel-like substance with various medicinal properties. It requires minimal care and is well-suited for sunny windowsills.",
        requirements: {
            water: "Allow soil to dry out between waterings",
            sun: "Bright direct sunlight"
        },
        image: "aloe_vera.png",
        warning: "",
        weeksAgo: 4
    },
    {
        name: "Spider Plant",
        description: "Spider plants are popular indoor plants characterized by their long, arching leaves that resemble spider legs. They are easy to grow and propagate, making them ideal for beginners.",
        requirements: {
            water: "Keep soil evenly moist, but not waterlogged",
            sun: "Low to bright indirect sunlight"
        },
        image: "spider_plant.png",
        warning: "",
        weeksAgo: 4
    }
];

const elligiblePlants = [
    {
        name: "Cilantro",
        description: "Fragrant annual herb, grows up to 20-50 cm tall. Adds distinct flavor to culinary dishes worldwide",
        requirements: {
            water: "Every 2-3 days",
            sun: "Partial shade to full sun"
        },
        image: "cilantro.png", // Add an image if available
        warning: "", // Add a warning if applicable
        weeksAgo: 0, // Adjust as needed
        comment: [
            {
                name: "Misty",
                comment: "Great for beginners growing here in Arlington!",
                icon: "misty_icon.png"
            },
            {
                name: "Bob",
                comment: "I’ve been growing every year and I love it!",
                icon: "misty_icon.png"
            }
        ]
    },
    {
        name: "Citronella Grass",
        description: "Perennial grass with a strong lemon scent, often used as a natural mosquito repellent. Grows well in containers or planted directly in the ground.",
        requirements: {
            water: "Regular watering, keep soil evenly moist",
            sun: "Full sun"
        },
        image: "citronella.png", // Add an image if available
        warning: "", // Add a warning if applicable
        weeksAgo: 0, // Adjust as needed
    },
    {
        name: "Citrus Tree",
        description: "Fruit-bearing tree belonging to the Rutaceae family. Varieties include lemon, lime, orange, and grapefruit. Requires ample sunlight and well-drained soil.",
        requirements: {
            water: "Regular watering, especially during dry periods",
            sun: "Full sun"
        },
        image: "citrus.png", // Add an image if available
        warning: "", // Add a warning if applicable
        weeksAgo: 0, // Adjust as needed
    }
];

const seasonalInsights = {
    Spring: {
        Lantana: "Increase watering to 2-3 times/week with drier conditions.",
        cilantro: "Water every 2-3 days, watch for bolting in heat.",
        Succulent: "Gradually increase watering frequency as temperatures rise.",
    },
    Summer: {
        Succulent: "Water sparingly when soil is dry, provide partial shade.",
        "Snake Plant": "Reduce watering, keep away from direct sun.",
    },
    Fall: {
        "B. eyed Susan": "Monitor moisture, deadhead for prolonged blooming.",
        "Peace Lily": "Reduce watering, maintain moderate humidity indoors.",
    },
    Winter: {
        Lantana: "Reduce watering frequency, protect from frost.",
        cilantro: "Water sparingly, provide shelter from cold winds.",
        "Aloe Vera": "Water minimally, keep away from drafty areas.",
    }
};



const hourlyWeather = {
    "1PM": {
        temperature: "86°F",
        precip: "20%",
        wind: "8mph NW",
        humidity: "5% low",
        icon: "cloudy.png"
    },
    "2PM": {
        temperature: "89°F",
        precip: "10%",
        wind: "10mph W",
        humidity: "30% medium",
        icon: "cloudy.png"
    },
    "3PM": {
        temperature: "92°F",
        precip: "5%",
        wind: "12mph W",
        humidity: "70% high",
        icon: "sunny.png"
    },
    "4PM": {
        temperature: "93°F",
        precip: "15%",
        wind: "10mph SW",
        humidity: "60% medium",
        icon: "cloudy.png"
    },
    "5PM": {
        temperature: "93°F",
        precip: "25%",
        wind: "15mph SW",
        humidity: "75% high",
        icon: "cloudy.png"
    },
    "6PM": {
        temperature: "89°F",
        precip: "10%",
        wind: "12mph W",
        humidity: "45% medium",
        icon: "sunny.png"
    }

}
export {cilantroPlantData, cilantroForum, START_SCREEN, plantsList, warningList, hourlyWeather, seasonalInsights, elligiblePlants};