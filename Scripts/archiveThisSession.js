module.exports = async function archiveThisSession(params) {
   /*
    This function does the following;
    - looks for all folders in the notes folder (Wildemount/_Tues Wildemount DM Notes) other than
        "00 Previous Session Lister" and "Previous Session Notes"
    - copies those folders to the "Previous Session Notes" folder, along with their contents
   */
    const targetFolder = "Wildemount/_Tues Wildemount DM Notes/Previous Session Notes";
    const notesFolder = "Wildemount/_Tues Wildemount DM Notes";
    const files = params.app.vault.getAbstractFileByPath(notesFolder);
    for (const file in files.children) {
        let folderName = files.children[file].name;
        const sessionRegex = /S(\d+) (\d+)/g;
        if (folderName.match(sessionRegex)) {
            await app.vault.createFolder(targetFolder + '/' + folderName);
            for (const note in files.children[file].children) {
                const noteName = files.children[file].children[note].name;
                const copiedNotePath = targetFolder + '/' + folderName + '/' + noteName;
                await app.vault.copy(files.children[file].children[note], copiedNotePath);
            }
            break;
        }
    }
};