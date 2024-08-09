import mongoose from 'mongoose';

const ComponentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    code: {
        jsx: {
            type: String,
            required: true
        },
        css: {
            type: String,
            default: ''
        },
        html: {
            type: String,
            default: ''
        }
    },
    metadata: {
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        },
        author: {
            type: String,
            default: 'Unknown'
        },
        tags: {
            type: [String],
            default: []
        }
    }
});

export const Component = mongoose.model('Component', ComponentSchema);
