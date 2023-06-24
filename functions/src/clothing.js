import { FunctionBuilder } from "firebase-functions/v1";
import { dataBase } from "./dataBaseConnect.js";
const library = dataBase.collection('clothing');

const toArray = (collection) => collection.docs.map(doc => ({id: doc.id, ...doc.data()}))

export async function getAllClothing(req, res) {
    try {
        const allClothing = await library.get();
        res.send(toArray(allClothing));
    } catch (err)) {
        res.status(500).send(err);
    }
}

export async function addNewClothing(req, res) {
    try {
        const newClothing = req.body;
        await library.add(newClothing);
        getAllClothing(req, res);
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function updateNewClothing (req, res) {
    try {
        const findClothingId = req.params;
        await library.doc(findClothingId).update(req.body);
        grabAllClothes(req, res);
    } catch (err) {
        res.status(500).send(err);
    }
}