
const {GameServerClustersServiceClient} = require('@google-cloud/game-servers');

const client = new GameServerClustersServiceClient();

async function callLoadLeaderboard() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'Your Google Cloud Project ID';
  // const location = 'A Compute Engine region, e.g. "us-central1"';
  // const realmId = 'The ID of the realm to be created';
  // const leaderboardId = 'The ID of the leaderboard to be created';
  const request = {
    realmId,
    leaderboardId,
    parent: client.realmPath(projectId, location, realmId),
  };

  const [operation] = await client.loadLeaderboard(request);
  const results = await operation.promise();
  console.log(results);
}

callLoadLeaderboard();


