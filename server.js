import { JSONPreset } from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

// load / create db.json
const db = await JSONPreset(join(__dirname, 'db.json'), {});

// start server
db.server.listen(PORT, () =>
  console.log(`JSON-Server is running on https://<your-app>.onrender.com`)
);