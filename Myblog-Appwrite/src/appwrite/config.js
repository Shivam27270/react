import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        import.meta.env.appwriteDatabaseId,
        import.meta.env.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getpost ::", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", true)]) {
    try {
      return await this.databases.listDocuments(
        import.meta.env.appwriteDatabaseId,
        import.meta.env.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: getposts ::", error);
    }
  }

  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      return await this.databases.createDocument(
        import.meta.env.appwriteDatabaseId,
        import.meta.env.appwriteCollectionId,
        slug,
        { title, content, featuredimage, status, userId }
      );
    } catch (error) {
      console.log("appwrite service :: createpost ::", error);
    }
  }

  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return await this.databases.updateDocument(
        import.meta.env.appwriteDatabaseId,
        import.meta.env.appwriteCollectionId,
        slug,
        { title, content, featuredimage, status }
      );
    } catch (error) {
      console.log("appwrite service :: updatepost ::", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        import.meta.env.appwriteDatabaseId,
        import.meta.env.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: deletepost ::", error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        import.meta.env.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite service :: uploadfile ::", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(
        import.meta.env.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.log("appwrite service :: deletefile ::", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(import.meta.env.appwriteBucketId, fileId)
      .href;
  }
}

const service = new Service();
export default service;
