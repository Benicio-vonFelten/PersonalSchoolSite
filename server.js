const express = require("express");
const fs = require("fs");
const path = require("path");
const serveIndex = require("serve-index"); // Import serve-index

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static(__dirname));

// Serve files in the documents folder
app.use('/documents', express.static(path.join(__dirname, 'documents')));

// Enable directory listing for the /documents folder
app.use('/documents', serveIndex(path.join(__dirname, 'documents'), { icons: true }));

// Endpoint to list all modules and their files
app.get('/modules', (req, res) => {
    const moduleDir = path.join(__dirname, 'documents');
    fs.readdir(moduleDir, (err, modules) => {
        if (err) {
            return res.status(500).send('Unable to read the directory');
        }
        
        const moduleFiles = modules.map(module => {
            const files = fs.readdirSync(path.join(moduleDir, module));
            return { module, files };
        });

        res.json(moduleFiles);
    });
});

// Catch all unknown routes and serve the 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "html", "404.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
