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
    const spaceIndex = currentFileName.indexOf(' ');
    await app.fileManager.processFrontMatter(currentFile, fm => {
        fm["date"] = currentFileName.slice(spaceIndex+1,spaceIndex+11);
        fm["episode"] = currentFileName;
    });
    for (const file in files.children) {
        let folderName = files.children[file].name;
        const sessionRegex = /S(\d+) (\d+)/g;
        if (folderName.match(sessionRegex)) {
                await app.fileManager.renameFile(files.children[file], notesFolder + '/' + currentFileName);
        }
    }
}