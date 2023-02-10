const express = require('express');
require('./routes/data/boot')

const app = express();

// app.use('/api/members', require('./routes/api/members'));

app.use('/api/updates', require('./routes/api/updates'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`NODE Server running on port ${PORT}`));