import client from "../src/database/prisma";

async function clearDatabase() {
  try {
    const modelNames = Object.keys(client).filter(key => key !== 'prisma');

    // Delete all records from each model
    for (const modelName of modelNames) {
      const model = (client as any)[modelName];
      if (model && typeof model.deleteMany === 'function') {
        console.log(`Deleting all records from ${modelName}...`);
        await model.deleteMany({});
      }
    }

    console.log('All records deleted successfully.');
  } catch (error) {
    console.error('Error clearing the database:', error);
  }
}

clearDatabase();
