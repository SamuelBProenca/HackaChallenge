import mongoose from 'mongoose';
import { MONGODB_URI } from '@/configs/config';

interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const globalCache = global as unknown as { mongooseCache?: MongooseCache };
if (!globalCache.mongooseCache) {
  globalCache.mongooseCache = { conn: null, promise: null };
}

async function dbConnect() {
  if (globalCache.mongooseCache?.conn) {
    return globalCache.mongooseCache.conn;
  }

  if (!globalCache.mongooseCache?.promise) {
    globalCache.mongooseCache.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose.connection);
  }

  globalCache.mongooseCache.conn = await globalCache.mongooseCache.promise;
  return globalCache.mongooseCache.conn;
}

export default dbConnect;
