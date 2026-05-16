const fs = require('fs');
const path = require('path');

const contentDir = './content';
const outputFilePath = './public/knowledge.json';

const readJsonFiles = (dir, allContent = {}) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      readJsonFiles(filePath, allContent);
    } else if (file.endsWith('.json')) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const key = path.basename(file, '.json');
      allContent[key] = content;
    }
  });

  return allContent;
};

try {
  console.log('Generating Knowledge Base...');
  const rawContent = readJsonFiles(contentDir);
  
  // Create a structured knowledge object for high-accuracy retrieval
  const knowledge = {
    ...rawContent,
    // Explicit Facts for the AI Brain
    facts: {
        activeStates: rawContent.settings?.activeStates || [],
        contact: {
            phone: rawContent.settings?.phone,
            email: rawContent.settings?.email,
            address: rawContent.settings?.address
        },
        services: rawContent.settings?.navbar?.links?.find(l => l.name === 'Services')?.dropdown?.map(s => s.name) || [],
        testimonials: rawContent.settings?.testimonials?.list?.map(t => ({ name: t.name, facility: t.facility, quote: t.content })),
        faqs: rawContent.settings?.faq?.list || []
    }
  };

  fs.writeFileSync(outputFilePath, JSON.stringify(knowledge, null, 2));
  console.log('Knowledge Base Generated Successfully with Structured Facts.');
} catch (error) {
  console.error('Error generating knowledge base:', error);
}
