module.exports = async function updateFrontMatter(params) {
    /*
    This function does the following;
    - updates the frontmatter property `date` to the current date
    - updates the frontmatter property `episode` to the name of the current session
   */
    const notesFolder = "Wildemount/_Tues Wildemount DM Notes";
    const files = params.app.vault.getAbstractFileByPath(notesFolder);
    for (const file in files.children) {
        let folderName = files.children[file].name;
        if (!folderName.includes("00 Previous Session Lister")) {
            if (!folderName.includes("Previous Session Notes")) {
                for (const note in files.children[file].children) {
                    const noteName = files.children[file].children[note].name;
                    const regex = /S(\d+)/g;
                    if (noteName.match(regex)) {
                        app.fileManager.processFrontMatter(files.children[file].children[note], fm => { 
                            fm["date"] = moment().format('YYYY-MM-DD');
                            fm["episode"] = noteName.slice(0,-3);
                        })
                    }
                }
            }
        }
    }
}