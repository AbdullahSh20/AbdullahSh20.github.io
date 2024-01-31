const fs = require('fs');
const path = require('path');

const certificatesRootDirectory = path.join(__dirname, 'public', 'src', 'assets', 'Certificates');

const certificatesData = [];

function processOrganizationDirectory(organizationDirectory) {
    const organizationName = path.basename(organizationDirectory);

    const files = fs.readdirSync(organizationDirectory);

    files.forEach(file => {
        const certificateData = {
            title: file.replace(/\.[^/.]+$/, ''),
            imageUrl: `src/assets/${organizationName}.png`,
            PDF: `${organizationName}/${file}`,
        };

        certificatesData.push(certificateData);
    });
}

const organizationDirectories = fs.readdirSync(certificatesRootDirectory, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => path.join(certificatesRootDirectory, dir.name));

organizationDirectories.forEach(processOrganizationDirectory);

const outputFilePath = path.join(__dirname, 'public', 'src', 'assets', 'certificatesData.json');
fs.writeFileSync(outputFilePath, JSON.stringify(certificatesData, null, 2));

console.log(`Certificates data written to ${outputFilePath}`);
