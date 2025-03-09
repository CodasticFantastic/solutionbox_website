import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import mime from "mime";

// Filesystem paths
const UPLOADS_DIR = path.join(process.cwd(), "uploads");
const IMAGES_DIR = path.join(UPLOADS_DIR, "images");
const DOCUMENTS_DIR = path.join(UPLOADS_DIR, "documents");

// Allowed files extensions to download
const IMAGE_EXTENSIONS = [".webp"];
const DOCUMENT_EXTENSIONS = [".pdf"];

// Serve requested file from filesystem
export async function GET(
  req: NextRequest,
  { params }: { params: { file: string } }
) {
  const { file } = params;

  // Secure access
  if (!file || file.includes("..") || file.includes("/")) {
    return NextResponse.json(
      { error: "Niepoprawna nazwa pliku" },
      { status: 400 }
    );
  }

  // Determine file location based on file extension
  const extension = path.extname(file).toLowerCase();
  let filePath = "";

  if (IMAGE_EXTENSIONS.includes(extension)) {
    filePath = path.join(IMAGES_DIR, file);
  } else if (DOCUMENT_EXTENSIONS.includes(extension)) {
    filePath = path.join(DOCUMENTS_DIR, file);
  } else {
    return NextResponse.json(
      { error: "Nieobsługiwany typ pliku" },
      { status: 400 }
    );
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Plik nie istnieje" }, { status: 404 });
  }

  // Get file and set appropriate headers for caching and content type
  const fileBuffer = await fs.promises.readFile(filePath);
  const contentType = mime.getType(filePath) || "application/octet-stream";

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
