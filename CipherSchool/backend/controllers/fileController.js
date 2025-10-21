import File from "../models/fileModel.js";

// ---------------------------
// CREATE FILE OR FOLDER
// ---------------------------
export const createFile = async (req, res) => {
    try {
        const { projectId, parentId, name, type, content } = req.body;

        // Validate type
        if (!["file", "folder"].includes(type)) {
            return res.status(400).json({ message: "Invalid type. Must be 'file' or 'folder'." });
        }

        const file = await File.create({
            projectId,
            parentId: parentId || null,
            name,
            type,
            content: content || "" // store file content; empty string for folders
        });

        res.status(201).json(file);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

// ---------------------------
// GET FILE OR FOLDER BY ID
// ---------------------------
export const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: "File not found" });
        res.json(file);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

// ---------------------------
// UPDATE FILE CONTENT OR RENAME
// ---------------------------
export const updateFile = async (req, res) => {
    try {
        const { name, content } = req.body;
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: "File not found" });

        if (name) file.name = name;
        if (content !== undefined) file.content = content;

        await file.save();
        res.json(file);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

// ---------------------------
// DELETE FILE OR FOLDER
// ---------------------------
export const deleteFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ message: "File not found" });

        // Delete all children if it's a folder
        if (file.type === "folder") {
            await File.deleteMany({ parentId: file._id });
        }

        await file.remove();
        res.json({ message: "File deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

export const uploadMiddleware = (req, res, next) => next();