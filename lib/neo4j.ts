import neo4j from 'neo4j-driver';
export { neo4j };

// Create driver instance
const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(
    process.env.NEO4J_USER!,
    process.env.NEO4J_PASS!,
  ),
  { disableLosslessIntegers: true }
);

// Function to run Cypher queries
export async function runQuery(cypher: string, params: Record<string, unknown> = {}) {
  const session = driver.session();
  try {
    const result = await session.run(cypher, params);
    return result.records;
  } finally {
    await session.close();
  }
}

// Close driver on app shutdown
export async function closeDriver() {
  await driver.close();
}
