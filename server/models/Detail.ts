import mongoose from 'mongoose';

const DetailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unique: { type: Number, require: true },
    content: { type: String, require: true },
    thumbnail: { type: String, require: false },
    category_id: { type: Number, require: true },
    main_catg_id: { type: Number, require: true },
    tags: { type: Array, require: false },
    record_time: { type: String, require: false },
    desc: { type: String, require: false }
}, { collection: 'Detail' });

const Detail = mongoose.model('Detail', DetailSchema);
export default Detail;