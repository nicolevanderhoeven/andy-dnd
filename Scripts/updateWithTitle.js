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
    const sessionRegex = /S(\d+) (\d+)/g;
    if (currentFileName.match(sessionRegex)) {
        const spaceIndex = currentFileName.indexOf(' ');
        await app.fileManager.processFrontMatter(currentFile, fm => {
            fm["date"] = currentFileName.slice(spaceIndex+1,spaceIndex+11);
            fm["episode"] = currentFileName;
        });
        const parentFolder = currentFile.parent;
        const currentParentFolderPath = parentFolder.path;
        const sessionIndex = currentParentFolderPath.search(sessionRegex);
        const newParentFolderPath = currentParentFolderPath.slice(0,sessionIndex) + currentFileName;
        if (parentFolder.name.match(sessionRegex)) {
            await app.fileManager.renameFile(parentFolder, newParentFolderPath);
        }
    }
    else {
        let error = new Notice();
        error.setMessage(currentFileName + " doesn't look like a session. Update with Title only works for sessions.")
    }
}