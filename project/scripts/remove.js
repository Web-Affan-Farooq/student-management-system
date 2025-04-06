import fs from "fs";
const __fileName = "../data/data.json" ;

export default function removeUser(email) {
    fs.readFile(__fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            let users = JSON.parse(data);
            const initialLength = users.length;
            users = users.filter(user => user.email !== email);

            if (users.length === initialLength) {
                console.log('User not found.');
                return;
            }

            fs.writeFile(__fileName, JSON.stringify(users, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('User removed successfully!');
                }
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}

// Example usage:
// removeUser('gpoad0@scribd.com');