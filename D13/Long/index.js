const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionToString = "mongodb+srv://long:12345@cluster0.w6r2z.mongodb.net/longdb?retryWrites=true&w=majority";


let taskSchema

let Task;
/**
 * @returns {Promise<mongoose.Connection>}
 */
async function connectToDB() {
    return new Promise((resolve, reject) => {
        mongoose.connect(connectionToString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

        const db = mongoose.connection;
        db.on('error', (err) => {
            reject(err);
        });
        db.once('open', function () {
            console.log('đã kết nối db');
            resolve(db);
        });
    });
}



async function main() {
    try {
        let db = await connectToDB()
        app.get("/tasks", async (req, res) => {
            let result = await Task.find({})
            res.send({
                tasks: result,
            });
        });


        app.listen(4000, "0.0.0.0", () => {
            console.log("Server is running on");
        });
        const taskSchema = new mongoose.Schema({
            name: String
        });
        const Task = mongoose.model('tasks', taskSchema);
        const task01 = new Task({
            name: '"di cho"'
        });

        let result = await Task.findOne({
            name: '"di cho"',
        });




        await task01.save()
    } catch (err) {
        console.error(err);
    }
}

main()





