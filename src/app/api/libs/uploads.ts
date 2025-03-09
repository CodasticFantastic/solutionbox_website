import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import mime from "mime";

// Allowed file extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const DOCUMENT_EXTENSIONS = [".pdf"];

// Files Catalogues Pathways
const UPLOADS_DIR = path.join(process.cwd(), "uploads");
const IMAGES_DIR = path.join(UPLOADS_DIR, "images");
const DOCUMENTS_DIR = path.join(UPLOADS_DIR, "documents");

// Create catalogues if not exist
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
if (!fs.existsSync(DOCUMENTS_DIR))
  fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });

/**
 * Upload file
 * @param file - File
 * @returns - File name
 */
export const uploadFile = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = path.extname(file.name).toLowerCase();
  const mimeType = mime.getType(file.name) || "";

  const isImage =
    IMAGE_EXTENSIONS.includes(extension) && mimeType.startsWith("image/");
  const isDocument =
    DOCUMENT_EXTENSIONS.includes(extension) && mimeType === "application/pdf";

  if (!isImage && !isDocument) {
    throw new Error("Nieobsługiwany typ pliku.");
  }

  // Determine destination directory (images or documents)
  const uploadDir = isImage ? IMAGES_DIR : DOCUMENTS_DIR;

  // Generate unique filename
  const filename = `${Date.now()}-${uuidv4()}${isImage ? ".webp" : extension}`;
  const filePath = path.join(uploadDir, filename);

  if (isImage) {
    // Convert image to Webp format and save to disk
    const processedImage = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    await fs.promises.writeFile(filePath, processedImage);
  } else {
    // Save document to disk
    await fs.promises.writeFile(filePath, buffer);
  }

  return filename;
};

/**
 * Delete File
 * @param fileName - File name to delete
 * @returns - True if file deleted successfully, false otherwise
 */
export const deleteFile = async (fileName: string): Promise<boolean> => {
  if (!fileName) {
    throw new Error("Nie podano nazwy pliku!");
  }

  // Check if file exists in either directory (images or documents)
  const imagePath = path.join(IMAGES_DIR, fileName);
  const documentPath = path.join(DOCUMENTS_DIR, fileName);

  let filePath = null;

  if (fs.existsSync(imagePath)) {
    filePath = imagePath;
  } else if (fs.existsSync(documentPath)) {
    filePath = documentPath;
  } else {
    return false; // File not found in either directory
  }

  // Delete file from disk
  await fs.promises.unlink(filePath);
  return true;
};
