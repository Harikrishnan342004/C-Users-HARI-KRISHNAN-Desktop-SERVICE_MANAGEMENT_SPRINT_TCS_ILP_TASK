const Bookings = [
    {
        userId: "id123",
        serviceType: "House Cleaning",
        subService: "3 BHK",
        date: "12/12/2024",
        address: "No 16,Nehru street,Navalur",
        contact: "8754378059",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser244"
    },
    {
        userId: "id123",
        serviceType: "House Cleaning",
        subService: "Bathroom Cleaning",
        date: "14/12/2024",
        address: "No 16,Nehru street,Navalur",
        contact: "8754378059",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser245"
    },
    {
        userId: "id313",
        serviceType: "AC & Appliances",
        subService: "TV Repair",
        date: "24/12/2024",
        address: "No 2,vijaya nagar,pallavaram,chennai",
        contact: "992212389",
        vendor: "Here For U",
        amount: "800",
        serviceId: "ser246"
    },
    {
        userId: "id456",
        serviceType: "AC & Appliances",
        subService: "Fridge Repair",
        date: "11/12/2024",
        address: "No 16,Anna nagar,chennai",
        contact: "6385946584",
        vendor: "Mr Service",
        amount: "1500",
        serviceId: "ser247"
    },
    {
        userId: "id456",
        serviceType: "AC & Appliances",
        subService: "Washing Machine Repair",
        date: "11/12/2024",
        address: "No 16,Anna nagar,chennai",
        contact: "6385946584",
        vendor: "Mr Service",
        amount: "1500",
        serviceId: "ser248"
    },
    {
        userId: "id123",
        serviceType: "House Cleaning",
        subService: "Bathroom Cleaning",
        date: "26/12/2024",
        address: "No 16,Nehru street,Navalur",
        contact: "8754378059",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser249"
    },
    {
        userId: "id789",
        serviceType: "Product pickup and drop",
        subService: "Furnitures",
        date: "10/12/2024",
        address: "No 7,Kovil street,Tambaram,chennai",
        contact: "8608136818",
        vendor: "AtLas Service",
        amount: "2000",
        serviceId: "ser250"
    },
    {
        userId: "id789",
        serviceType: "Product pickup and drop",
        subService: "Vehicle",
        date: "20/12/2024",
        address: "No 7,Kovil street,Tambaram,chennai",
        contact: "8608136818",
        vendor: "Mr Service",
        amount: "1500",
        serviceId: "ser251"
    },
    {
        userId: "id222",
        serviceType: "Vehicle Repair",
        subService: "Two Wheeler",
        date: "09/12/2024",
        address: "No 12/A,Sunrise Apartment,Chepak,chennai",
        contact: "8723411090",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser252"
    },
    {
        userId: "id222",
        serviceType: "Vehicle Repair",
        subService: "Four Wheeler",
        date: "11/12/2024",
        address: "No 12/A,Sunrise Apartment,Chepak,chennai",
        contact: "8723411090",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser253"
    },
    {
        userId: "id313",
        serviceType: "AC & Appliances",
        subService: "AC Repair",
        date: "15/12/2024",
        address: "No 2,vijaya nagar,pallavaram,chennai",
        contact: "992212389",
        vendor: "Mr Service",
        amount: "1500",
        serviceId: "ser254"
    },
    {
        userId: "id123",
        serviceType: "AC & Appliances",
        subService: "Washing Machine Repair",
        date: "19/12/2024",
        address: "No 16,Nehru street,Navalur",
        contact: "8754378059",
        vendor: "Sathya Agencies",
        amount: "1000",
        serviceId: "ser255"
    },
    {
        userId: "id222",
        serviceType: "House Cleaning",
        subService: "2 BHK",
        date: "16/12/2024",
        address: "No 12/A,Sunrise Apartment,Chepak,chennai",
        contact: "8723411090",
        vendor: "Here For U",
        amount: "800",
        serviceId: "ser256"
    },
    {
        userId: "id456",
        serviceType: "Product pickup and drop",
        subService: "Groceries",
        date: "11/12/2024",
        address: "No 16,Anna nagar,chennai",
        contact: "6385946584",
        vendor: "Here For U",
        amount: "800",
        serviceId: "ser257"
    },
    {
        userId: "id789",
        serviceType: "Product pickup and drop",
        subService: "Vehicle",
        date: "22/12/2024",
        address: "No 7,Kovil street,Tambaram,chennai",
        contact: "8608136818",
        vendor: "Mr Service",
        amount: "1500",
        serviceId: "ser258"
    }
];


// Data for Registered Users
const RegUsers = [
    {
        userId: "id123",
        name: "Mohan",
        email: "mohanbabu@gmail.com",
        password: "moh@124",
        address: "No 16,Nehru street,Navalur",
        contact: "8754378059"
    },
    {
        userId: "id313",
        name: "Gifty",
        email: "gift@gmail.com",
        password: "gif@122",
        address: "No 2,vijaya nagar,pallavaram,chennai",
        contact: "992212389"
    },
    {
        userId: "id456",
        name: "Gunaseelan",
        email: "guna@gmail.com",
        password: "guna@124",
        address: "No 16,Anna nagar,chennai",
        contact: "6385946584"
    },
    {
        userId: "id789",
        name: "Hariharan",
        email: "hari@gmail.com",
        password: "hari@111",
        address: "No 7,Kovil street,Tambaram,chennai",
        contact: "8608136818"
    },
    {
        userId: "id222",
        name: "Sahana",
        email: "sahana@gmail.com",
        password: "Sah@124",
        address: "No 12/A,Sunrise Apartment,Chepak,chennai",
        contact: "8723411090"
    }
];

    
/// Function to search and display data
function searchAndDisplay(query) {
    query = query.toLowerCase();
    const results = [];
    let type = "";

    // Search in bookings
    Bookings.forEach((booking) => {
        if (
            booking.serviceType.toLowerCase().includes(query) ||
            booking.subService.toLowerCase().includes(query) ||
            // booking.contact.includes(query) ||
            booking.vendor.toLowerCase().includes(query)
        ) {
            // Add user name to booking using userId
            const user = RegUsers.find((user) => user.userId === booking.userId);
            if (user) {
                booking.userName = user.name;
            }
            results.push(booking);
            type = "bookings";
        }
    });

    // Search in users
    RegUsers.forEach((user) => {
        if (
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.contact.includes(query)
        ) {
            results.push(user);
            type = "users";
        }
    });

    displayResults(results, type); 
}

// Function to display results in the table
function displayResults(results, type) {
    const table = document.getElementById("results-table");
    const thead = document.getElementById("results-header");
    const tbody = document.getElementById("results-body");

    // Clear previous results
    thead.innerHTML = "";
    tbody.innerHTML = "";

    if (results.length === 0) {
        // Display "No records found" message
        table.innerHTML = "<p>No records found</p>";
        
    }

    // Set headers based on type
    const headers =
        type === "bookings"
            ? ["User ID", "User Name", "Service Type", "Sub Service", "Date", "Address", "Contact", "Vendor", "Amount", "Service ID"]
            : ["User ID", "Name", "Email", "Address", "Contact"];

    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Populate table body
    results.forEach((item) => {
        const row = document.createElement("tr");
        if (type === "bookings") {
            // Add booking-specific rows with user name
            const bookingRow = [
                item.userId,
                item.userName || "N/A",
                item.serviceType,
                item.subService,
                item.date,
                item.address,
                item.contact,
                item.vendor,
                item.amount,
                item.serviceId
            ];
            bookingRow.forEach((value) => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
        } else {
            // Add user-specific rows
            Object.entries(item).forEach(([key, value]) => {
                if (key === "password") return; // Skip password
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
        }
        tbody.appendChild(row);
    });
}

// Attach event listener to search
document.getElementById("search-btn").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.trim();
    searchAndDisplay(query);
});
