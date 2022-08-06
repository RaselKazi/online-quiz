import mongoose from 'mongoose'

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our database*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect

/* convert Doc to object */
export function convertDocToObj(doc) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.discountTargetDate = doc.discountTargetDate.toString()
  doc.images.map((img) => (img._id = img._id.toString()))
  doc.updatedAt = doc.updatedAt.toString()
  return doc
}
