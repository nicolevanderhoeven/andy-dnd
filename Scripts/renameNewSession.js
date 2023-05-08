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
        const sessionRegex = /S(\d+) (\d+)/g;
        if (folderName.match(sessionRegex)) {
            const newGameName = 'S' + params.variables["newGameNum"] + ' ' + moment().format('YYYY-MM-DD');
            const newFolderPath = notesFolder + '/' + newGameName;
            app.fileManager.renameFile(files.children[file], newFolderPath);
            for (const note in files.children[file].children) {
                const noteName = files.children[file].children[note].name;
                const regex = /S(\d+)/g;
                if (noteName.match(regex)) {
                    console.log('noteName: ' + noteName);
                    const newNotePath = newFolderPath + '/' + newGameName + '.md';
                    app.fileManager.renameFile(files.children[file].children[note], newNotePath);
                }
            }
        }
    }
}