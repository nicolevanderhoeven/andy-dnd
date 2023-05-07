module.exports = async function renameNewSession(params) {
    /*
    This function does the following;
    - renames the current session folder with the new session number and title
    - renames the session file with the new session number and title
   */
    const notesFolder = "Wildemount/_Tues Wildemount DM Notes";
    const files = params.app.vault.getAbstractFileByPath(notesFolder);
    for (const file in files.children) {
        let folderName = files.children[file].name;
        if (!folderName.includes("00 Previous Session Lister")) {
            if (!folderName.includes("Previous Session Notes")) {
                // await app.fileManager.renameFile(files.children[file], targetFolder + '/' + folderName);
                const newGameName = 'S' + params.variables["newGameNum"] + ' ' + moment().format('YYYY-MM-DD');
                const newFolderPath = notesFolder + '/' + newGameName;
                app.fileManager.renameFile(files.children[file], newFolderPath);
                for (const note in files.children[file].children) {
                    const noteName = files.children[file].children[note].name;
                    console.log('noteName: ' + noteName);
                    const regex = /S(\d+)/g;
                    console.log(files.children[file]);
                    if (noteName.match(regex)) {
                        const newNotePath = newFolderPath + '/' + newGameName + '.md';
                        console.log('newNotePath: ' + newNotePath);
                        app.fileManager.renameFile(files.children[file].children[note], newNotePath);
                    }
                }
            }
        }
    }
}