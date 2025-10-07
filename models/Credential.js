import mongoose from 'mongoose';

const credentialSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Credential = mongoose.model('Credential', credentialSchema);

export default Credential;
