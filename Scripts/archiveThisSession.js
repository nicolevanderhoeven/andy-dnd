module.exports = async function archiveThisSession(params) {
   /*
    This function does the following;
    - looks for all folders in the notes folder (Wildemount/_Tues Wildemount DM Notes) other than
        "00 Previous Session Lister" and "Previous Session Notes"
    - moves those folders to "Previous Session Notes", along with all files inside it
   */
    const targetFolder = "Wildemount/_Tues Wildemount DM Notes/Previous Session Notes";
    const notesFolder = "Wildemount/_Tues Wildemount DM Notes";
    const files = params.app.vault.getAbstractFileByPath(notesFolder);
    for (const file in files.children) {
        let folderName = files.children[file].name;
        if (!folderName.includes("00 Previous Session Lister")) {
            if (!folderName.includes("Previous Session Notes")) {
                await app.fileManager.renameFile(files.children[file], targetFolder + '/' + folderName);
            }
        }
    }
};