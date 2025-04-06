import fs from "fs";

const __fileName = "../data/data.json" ;

// Function to add a new user
export default function addUser(newUser) {
    // Read the existing file
    fs.readFile(__fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        let users = [];
        try {
            users = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return;
        }
        
        // Add new user
        users.push(newUser);
        
        // Write updated data back to the file
        fs.writeFile(__fileName, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('User added successfully!');
            }
        });
    });
}

// // Example new user to add
// const newUser = {
//     id: 41,
//     email: "newuser@example.com",
//     gender: "Non-binary",
//     isAdmin: false,
//     password: "securePassword123",
//     category: Math.random() < 0.5 ? "Teacher" : "Student"
// };

// // Call function to add user
// addUser(newUser);
