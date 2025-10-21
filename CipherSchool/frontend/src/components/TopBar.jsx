import React from "react";

export default function TopBar({
    onSaveProject,
    onToggleTheme,
    theme,
    autosave,
    setAutosave
}) {
    return (
        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-950 border-b shadow-sm sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <h1 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                    CipherStudio
                </h1>
                <button
                    onClick={onSaveProject}
                    className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                >
                    Save
                </button>
                <label className="text-sm ml-3">
                    Autosave{" "}
                    <input
                        type="checkbox"
                        className="ml-1"
                        checked={autosave}
                        onChange={(e) => setAutosave(e.target.checked)}
                    />
                </label>
            </div>

            <button
                onClick={onToggleTheme}
                className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
        </div>
    );
}