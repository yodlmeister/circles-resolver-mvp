import { makeApp } from './server';
import { ethers } from 'ethers';
import { JSONDatabase } from './json';

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const TTL = process.env.TTL || "300";
const PORT = process.env.PORT || "8080";

const address = ethers.utils.computeAddress(PRIVATE_KEY);
const signer = new ethers.utils.SigningKey(PRIVATE_KEY);


const db = JSONDatabase.fromTest(parseInt(TTL));
const app = makeApp(signer, '/', db);
console.log(`Serving on port ${PORT} with signing address ${address}`);
app.listen(parseInt(PORT));

module.exports = app;
