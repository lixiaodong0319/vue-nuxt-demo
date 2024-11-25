import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, require: true },
    address: { type: String, require: true }
}, { collection: 'User' });

const User = mongoose.model('User', UserSchema);
export default User;