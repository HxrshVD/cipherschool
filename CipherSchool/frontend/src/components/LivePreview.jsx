import React, { useMemo } from "react";
import { Sandpack, SandpackThemeProvider } from "@codesandbox/sandpack-react";

export default function LivePreview({ files }) {
    // Map files for Sandpack
    const sandpackFiles = useMemo(() => {
        const obj = {};
        Object.keys(files).forEach((key) => {
            obj["/" + key.replace(/^[\\/]/, "")] = files[key];
        });
        return obj;
    }, [files]);

    // Generate unique key to force remount when files change
    const sandpackKey = Object.keys(files).join("|");

    return (
        <div className="h-full">
            <SandpackThemeProvider>
                <Sandpack
                    key={sandpackKey}
                    template="react"      // ✅ Use react template, not static
                    files={sandpackFiles}
                    // entry="/src/index.js" // ✅ Your main entry point
                    // customSetup={{
                    //     dependencies: {
                    //         react: "^18.2.0",
                    //         "react-dom": "^18.2.0",
                    //     },
                    //     entry: "/src/index.js",
                    // }}
                    customSetup={{
                        // dependencies: {
                        //     react: "19.2.0",
                        //     "react-dom": "19.2.0",
                        // },
                        entry: "/src/index.js",
                    }}

                    options={{
                        showTabs: false,
                        autorun: true,
                        showLineNumbers: true,
                        wrapContent: true,
                    }}
                />
            </SandpackThemeProvider>
        </div>
    );
}