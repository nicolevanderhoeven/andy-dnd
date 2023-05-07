module.exports = async function updateFrontMatter(params) {
    /*
    This function does the following;
    - updates the `date` and `episode` frontmatter properties of the current file
    - renames the parent folder to the current note's title
   */
    const notesFolder = "Wildemount/_Tues Wildemount DM Notes";
    const files = params.app.vault.getAbstractFileByPath(notesFolder);
    const currentFile = params.app.workspace.getActiveFile();
    const currentFileName = currentFile.basename;
    app.fileManager.processFrontMatter(currentFile, fm => {
        fm["date"] = currentFileName.slice(4,14);
        fm["episode"] = currentFileName;
    });
    for (const file in files.children) {
        let folderName = files.children[file].name;
        if (!folderName.includes("00 Previous Session Lister")) {
            if (!folderName.includes("Previous Session Notes")) {
                await app.fileManager.renameFile(files.children[file], notesFolder + '/' + currentFileName);
            }
        }
    }
}