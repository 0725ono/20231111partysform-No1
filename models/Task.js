const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        rquired: [true, "名前を入れてください"],
        trim: true,
        maxlength: [20, "タスク名は20文字以内に設定してください。"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Task", TaskSchema);